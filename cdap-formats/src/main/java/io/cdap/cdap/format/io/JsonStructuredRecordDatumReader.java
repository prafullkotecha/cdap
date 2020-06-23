/*
 * Copyright © 2017 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package io.cdap.cdap.format.io;

import com.google.common.collect.ImmutableMap;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import io.cdap.cdap.api.data.format.StructuredRecord;
import io.cdap.cdap.api.data.schema.Schema;
import io.cdap.cdap.common.io.Decoder;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * A {@link StructuredRecordDatumReader} that decodes from Json.
 */
public class JsonStructuredRecordDatumReader extends StructuredRecordDatumReader {

  private static final Map<Schema.Type, JsonToken> SCHEMA_TO_JSON_TYPE = new EnumMap<>(
    ImmutableMap.<Schema.Type, JsonToken>builder()
      .put(Schema.Type.NULL, JsonToken.NULL)
      .put(Schema.Type.BOOLEAN, JsonToken.BOOLEAN)
      .put(Schema.Type.INT, JsonToken.NUMBER)
      .put(Schema.Type.LONG, JsonToken.NUMBER)
      .put(Schema.Type.FLOAT, JsonToken.NUMBER)
      .put(Schema.Type.DOUBLE, JsonToken.NUMBER)
      .put(Schema.Type.STRING, JsonToken.STRING)
      .put(Schema.Type.BYTES, JsonToken.BEGIN_ARRAY)
      .put(Schema.Type.ARRAY, JsonToken.BEGIN_ARRAY)
      .put(Schema.Type.MAP, JsonToken.BEGIN_OBJECT)
      .put(Schema.Type.RECORD, JsonToken.BEGIN_OBJECT)
      .build()
  );

  private final boolean fieldNameIgnoreCase;
  private final boolean logicalTypeAsString;
  private final boolean isPreview;

  /**
   * Constructor that treats field names case sensitive.
   */
  public JsonStructuredRecordDatumReader() {
    this(false, false, false);
  }

  /**
   * Constructor.
   *
   * @param fieldNameIgnoreCase {@code true} to have case sensitive field names.
   */
  public JsonStructuredRecordDatumReader(boolean fieldNameIgnoreCase) {
    this(fieldNameIgnoreCase, false, false);
  }

  /**
   * Constructor.
   *
   * @param fieldNameIgnoreCase {@code true} to have case sensitive field names.
   * @param logicalTypeAsString {@code true} to read string values of logical type fields.
   * @param isPreview {@code true} to have logical type field values as string for preview
   */
  public JsonStructuredRecordDatumReader(boolean fieldNameIgnoreCase, boolean logicalTypeAsString, boolean isPreview) {
    this.fieldNameIgnoreCase = fieldNameIgnoreCase;
    this.logicalTypeAsString = logicalTypeAsString;
    this.isPreview = isPreview;
  }

  @Override
  public StructuredRecord read(Decoder decoder, Schema sourceSchema) throws IOException {
    if (!(decoder instanceof JsonDecoder)) {
      throw new IOException("The JsonStructuredRecordDatumReader can only decode using a JsonDecoder");
    }

    return super.read(decoder, sourceSchema);
  }

  @Override
  protected String decodeEnum(Decoder decoder, Schema schema) throws IOException {
    return getJsonReader(decoder).nextString();
  }

  @Override
  protected Collection<?> decodeArray(Decoder decoder, Schema elementSchema) throws IOException {
    List<Object> array = new ArrayList<>();

    JsonReader jsonReader = getJsonReader(decoder);
    jsonReader.beginArray();
    while (jsonReader.peek() != JsonToken.END_ARRAY) {
      array.add(decode(decoder, elementSchema));
    }
    jsonReader.endArray();

    return array;
  }

  @Override
  protected Map<?, ?> decodeMap(Decoder decoder, Schema keySchema, Schema valueSchema) throws IOException {
    if (!keySchema.isCompatible(Schema.of(Schema.Type.STRING))) {
      throw new IOException("Complex key type in maps are not supported: " + keySchema);
    }

    Map<Object, Object> result = new HashMap<>();

    JsonReader jsonReader = getJsonReader(decoder);

    jsonReader.beginObject();
    while (jsonReader.peek() != JsonToken.END_OBJECT) {
      Object key = convertKey(jsonReader.nextName(), keySchema.getType());
      result.put(key, decode(decoder, valueSchema));
    }
    jsonReader.endObject();

    return result;
  }

  @Override
  protected StructuredRecord decodeRecord(Decoder decoder, Schema schema) throws IOException {
    StructuredRecord.Builder builder = StructuredRecord.builder(schema);

    JsonReader jsonReader = getJsonReader(decoder);

    jsonReader.beginObject();
    while (jsonReader.peek() != JsonToken.END_OBJECT) {
      Schema.Field field = schema.getField(jsonReader.nextName(), fieldNameIgnoreCase);
      if (field == null) {
        // Ignore unrecognized fields
        jsonReader.skipValue();
        continue;
      }

      builder.set(field.getName(), decode(decoder, field.getSchema()));
    }
    jsonReader.endObject();

    return builder.build();
  }

  @Override
  protected Object decodeUnion(Decoder decoder, Schema unionSchema) throws IOException {
    JsonReader jsonReader = getJsonReader(decoder);
    JsonToken token = jsonReader.peek();
    // Based on the token to guess the schema
    for (Schema schema : unionSchema.getUnionSchemas()) {
      if (SCHEMA_TO_JSON_TYPE.get(schema.getType()) == token) {
        return decode(decoder, schema);
      }
    }

    throw new IOException(String.format("No matching schema found for union type: %s for token: %s", unionSchema,
                                        token));
  }

  @Override
  protected Object decode(Decoder decoder, Schema schema) throws IOException {
    Schema nonNullableSchema = schema.isNullable() ? schema.getNonNullable() : schema;
    Schema.LogicalType logicalType = nonNullableSchema.getLogicalType();
    if (logicalTypeAsString && logicalType != null) {
      String decodedString = decoder.readString();
      if (isPreview) {
        // For preview always return a string. CDAP-16754 - Needed so that preview displays logical type as string.
        return decodedString;
      }
      switch (logicalType) {
        case DATE:
          return Math.toIntExact(LocalDate.parse(decodedString, DateTimeFormatter.ISO_LOCAL_DATE).toEpochDay());
        case TIME_MILLIS:
          LocalTime localTimeMillis = LocalTime.parse(decodedString, DateTimeFormatter.ISO_LOCAL_TIME);
          return Math.toIntExact(TimeUnit.NANOSECONDS.toMillis(localTimeMillis.toNanoOfDay()));
        case TIME_MICROS:
          LocalTime localTimeMicros = LocalTime.parse(decodedString, DateTimeFormatter.ISO_LOCAL_TIME);
          return TimeUnit.NANOSECONDS.toMicros(localTimeMicros.toNanoOfDay());
        case TIMESTAMP_MILLIS:
          ZonedDateTime zonedDateTimeMillis = ZonedDateTime.parse(decodedString, DateTimeFormatter.ISO_ZONED_DATE_TIME);
          Instant instantMillis = zonedDateTimeMillis.toInstant();
          long millis = TimeUnit.SECONDS.toMillis(instantMillis.getEpochSecond());
          return Math.addExact(millis, TimeUnit.NANOSECONDS.toMillis(instantMillis.getNano()));
        case TIMESTAMP_MICROS:
          ZonedDateTime zonedDateTimeMicros = ZonedDateTime.parse(decodedString, DateTimeFormatter.ISO_ZONED_DATE_TIME);
          Instant instantMicros = zonedDateTimeMicros.toInstant();
          long micros = TimeUnit.SECONDS.toMicros(instantMicros.getEpochSecond());
          return Math.addExact(micros, TimeUnit.NANOSECONDS.toMicros(instantMicros.getNano()));
        case DECIMAL:
          BigDecimal bigDecimal = new BigDecimal(decodedString);
          return bigDecimal.unscaledValue().toByteArray();
      }
    }
    return super.decode(decoder, schema);
  }

  private JsonReader getJsonReader(Decoder decoder) {
    // Type already checked in the read method, hence assuming the casting is fine.
    return ((JsonDecoder) decoder).getJsonReader();
  }

  private static Object convertKey(String key, Schema.Type type) throws IOException {
    switch (type) {
      case STRING:
        return key;
      case BOOLEAN:
        return Boolean.valueOf(key);
      case INT:
        return Integer.valueOf(key);
      case LONG:
        return Long.valueOf(key);
      case FLOAT:
        return Float.valueOf(key);
      case DOUBLE:
        return Double.valueOf(key);
    }
    throw new IOException("Unable to convert string to type " + type);
  }
}
