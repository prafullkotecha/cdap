/*
 * Copyright © 2020 Cask Data, Inc.
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

import {
  ISchemaType,
  IDisplayType,
  IInternalFieldType,
  IFlattenRowType,
  IFieldType,
  IFieldTypeNullable,
  ILogicalTypeBase,
} from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import uuidV4 from 'uuid/v4';
import {
  getComplexTypeName,
  isNullable,
  isComplexType,
  getNonNullableType,
  getSimpleType,
} from 'components/AbstractWidget/SchemaEditor/SchemaHelpers';
import isObject from 'lodash/isObject';

type ITypeProperties = Record<string, any>;

interface INode {
  name?: string;
  children?: INode | Record<string, INode>;
  id: string;
  internalType: IInternalFieldType;
  nullable?: boolean;
  type?: IDisplayType;
  typeProperties?: ITypeProperties;
}

function parseUnionType(type): Record<string, INode> {
  const result: Record<string, INode> = {} as Record<string, INode>;
  for (const subType of type) {
    const id = uuidV4();
    if (isComplexType(subType)) {
      const typeName = getComplexTypeName(subType);
      result[id] = {
        id,
        type: typeName,
        internalType: 'union-complex-type-root',
        children: parseComplexType(subType),
      };
    } else {
      result[id] = {
        id,
        type: subType,
        nullable: false,
        internalType: 'union-simple-type',
      };
    }
  }
  return result;
}

function parseArrayType(type): Record<string, INode> {
  const nullable = isNullable(type);
  const t = getNonNullableType(type);
  const id = uuidV4();
  if (t.items && !isComplexType(t.items)) {
    return {
      [id]: {
        internalType: 'array-simple-type',
        id,
        nullable,
        type: getNonNullableType(t.items),
      },
    };
  }
  return {
    [id]: {
      internalType: 'array-complex-type-root',
      id,
      nullable,
      type: getComplexTypeName(t.items),
      children: parseComplexType(t.items),
    },
  };
}

function parseEnumType(type): Record<string, INode> {
  const nullable = isNullable(type);
  const t = getNonNullableType(type);
  const result = {};
  for (const symbol of t.symbols) {
    const id = uuidV4();
    result[id] = {
      id,
      internalType: 'enum-symbol',
      nullable,
      typeProperties: {
        symbol,
      },
    };
  }
  return result;
}

function getMapSubType(type, internalTypeName): INode {
  const id = uuidV4();
  if (!isComplexType(type)) {
    return {
      id,
      internalType: internalTypeName.simpleType,
      nullable: isNullable(type),
      type: getNonNullableType(type),
    };
  } else {
    const complexType = getComplexTypeName(type);
    const nullable = isNullable(type);
    return {
      children: parseComplexType(type),
      id,
      internalType: internalTypeName.complexType,
      type: complexType,
      nullable,
    };
  }
}

function parseMapType(type): Record<string, INode> {
  const t = getNonNullableType(type);
  const keysType = t.keys;
  const valuesType = t.values;
  const result: Record<string, INode> = {};
  const mapKeysSubType = getMapSubType(keysType, {
    simpleType: 'map-keys-simple-type',
    complexType: 'map-keys-complex-type',
  });
  const mapValuesSubType = getMapSubType(valuesType, {
    simpleType: 'map-values-simple-type',
    complexType: 'map-values-complex-type',
  });
  result[mapKeysSubType.id] = mapKeysSubType;
  result[mapValuesSubType.id] = mapValuesSubType;
  return result;
}

function parseComplexType(type): Record<string, INode> {
  const complexTypeName = getComplexTypeName(type);
  let record: Record<string, INode> = {};
  switch (complexTypeName) {
    case 'enum':
      record = parseEnumType(type);
      break;
    case 'array':
      record = parseArrayType(type);
      break;
    case 'record': {
      const schema: ISchemaType = { name: 'etlSchemaBody', schema: getNonNullableType(type) };
      const parsedSchema = parseSchema(schema);
      record[parsedSchema.id] = parsedSchema;
      break;
    }
    case 'union':
      record = parseUnionType(type);
      break;
    case 'map':
      record = parseMapType(type);
      break;
    default:
      record = {};
  }
  return record;
}

function checkForLogicalType(field: IFieldType | IFieldTypeNullable) {
  let type = field.type;
  type = getNonNullableType(type) as ILogicalTypeBase;
  if (type.logicalType) {
    return {
      typeProperties: {
        logicalType: type.logicalType,
        precision: type.precision,
        scale: type.scale,
      },
    };
  }
  return {};
}

function parseSubTree(field: IFieldType | IFieldTypeNullable): INode {
  const { type, name } = field;
  const nullable = isNullable(type);
  const complexType = isComplexType(type);
  const t = getNonNullableType(type);
  if (!complexType) {
    return {
      name,
      id: uuidV4(),
      internalType: 'record-field-simple-type',
      nullable,
      type: getSimpleType(t),
      ...checkForLogicalType(field),
    };
  }
  return {
    name,
    children: parseComplexType(type),
    id: uuidV4(),
    internalType: 'record-field-complex-type-root',
    nullable,
    type: getComplexTypeName(t),
  };
}

function parseSchema(avroSchema: ISchemaType, name = 'etlSchemaBody'): INode {
  const fields = avroSchema.schema.fields;
  const root: INode = {
    name,
    internalType: 'schema',
    id: uuidV4(),
    children: {} as INode,
  };
  for (const field of fields) {
    const child = parseSubTree(field);
    root.children[child.id] = child;
  }
  return root;
}

function flattenTree(schemaTree: INode, ancestors = []) {
  const result: IFlattenRowType[] = [];
  if (!schemaTree) {
    return [];
  }
  const { internalType, name, id, children, type, typeProperties, nullable } = schemaTree;
  result.push({
    internalType,
    name,
    id,
    type,
    typeProperties,
    ancestors,
    nullable,
  });
  if (isObject(children) && Object.keys(children).length) {
    for (const [_, value] of Object.entries(children)) {
      result.push(...flattenTree(value, ancestors.concat(id)));
    }
  }
  return result;
}

interface ISchemaTree {
  tree: () => INode;
  flat: () => IFlattenRowType[];
}

function SchemaTree(avroSchema: ISchemaType): ISchemaTree {
  const schemaTree: INode = parseSchema(avroSchema);
  const flatTree: IFlattenRowType[] = flattenTree(schemaTree);
  return {
    tree: () => schemaTree,
    flat: () => flatTree,
  };
}

export { SchemaTree, INode };
