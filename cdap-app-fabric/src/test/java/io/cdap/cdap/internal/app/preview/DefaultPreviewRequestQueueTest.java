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

package io.cdap.cdap.internal.app.preview;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import io.cdap.cdap.app.preview.PreviewRequest;
import io.cdap.cdap.app.preview.PreviewRequestQueue;
import io.cdap.cdap.app.preview.PreviewStatus;
import io.cdap.cdap.app.store.preview.PreviewStore;
import io.cdap.cdap.common.app.RunIds;
import io.cdap.cdap.common.conf.CConfiguration;
import io.cdap.cdap.common.conf.Constants;
import io.cdap.cdap.common.guice.ConfigModule;
import io.cdap.cdap.proto.ProgramType;
import io.cdap.cdap.proto.artifact.AppRequest;
import io.cdap.cdap.proto.id.ApplicationId;
import io.cdap.cdap.proto.id.ProgramId;
import io.cdap.cdap.proto.id.ProgramRunId;
import org.apache.hadoop.conf.Configuration;
import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.annotation.Nullable;

/**
 * Tests for {@link DefaultPreviewRequestQueue}
 */
public class DefaultPreviewRequestQueueTest {

  @ClassRule
  public static final TemporaryFolder TEMP_FOLDER = new TemporaryFolder();
  private static final Gson GSON = new Gson();

  private PreviewRequestQueue previewRequestQueue;

  @Before
  public void init() throws Exception {
    CConfiguration cConf = CConfiguration.create();
    cConf.set(Constants.CFG_LOCAL_DATA_DIR, TEMP_FOLDER.newFolder().getAbsolutePath());
    cConf.setInt(Constants.Preview.WAITING_QUEUE_CAPACITY, 2);

    Injector injector = Guice.createInjector(
      new ConfigModule(cConf, new Configuration()),
      new AbstractModule() {
        @Override
        protected void configure() {
          bind(PreviewStore.class).to(MockPreviewStore.class);
        }
      }
    );

    previewRequestQueue = injector.getInstance(DefaultPreviewRequestQueue.class);
  }

  static class MockPreviewStore implements PreviewStore {
    @Override
    public void put(ApplicationId applicationId, String tracerName, String propertyName, Object value) {

    }

    @Override
    public Map<String, List<JsonElement>> get(ApplicationId applicationId, String tracerName) {
      return null;
    }

    @Override
    public void remove(ApplicationId applicationId) {

    }

    @Override
    public void setProgramId(ProgramRunId programRunId) {

    }

    @Nullable
    @Override
    public ProgramRunId getProgramRunId(ApplicationId applicationId) {
      return null;
    }

    @Override
    public void setPreviewStatus(ApplicationId applicationId, PreviewStatus previewStatus) {

    }

    @Nullable
    @Override
    public PreviewStatus getPreviewStatus(ApplicationId applicationId) {
      return null;
    }

    @Override
    public void addToWaitingState(ApplicationId applicationId, AppRequest appRequest) {

    }

    @Override
    public List<PreviewRequest> getAllInWaitingState() {
      return Collections.emptyList();
    }

    @Override
    public void setPreviewRequestPollerInfo(ApplicationId applicationId, JsonObject pollerInfo) {

    }
  }

  @Test
  public void testPreviewRequestQueue() {
    String json = "{ \"id\": \"runner-1\"}";
    JsonObject pollerInfo = new JsonParser().parse(json).getAsJsonObject();
    Optional<PreviewRequest> requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertFalse(requestOptional.isPresent());

    ApplicationId app1 = new ApplicationId("default", RunIds.generate().getId());
    PreviewRequest request = new PreviewRequest(app1, getAppRequest());
    previewRequestQueue.add(request);

    requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertTrue(requestOptional.isPresent());
    request = requestOptional.get();
    ProgramId programId1 = new ProgramId(app1, ProgramType.SPARK, "WordCount");
    Assert.assertEquals(programId1, request.getProgram());

    requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertFalse(requestOptional.isPresent());

    ApplicationId app2 = new ApplicationId("default", RunIds.generate().getId());
    request = new PreviewRequest(app2, getAppRequest());
    previewRequestQueue.add(request);

    ApplicationId app3 = new ApplicationId("default", RunIds.generate().getId());
    request = new PreviewRequest(app3, getAppRequest());
    previewRequestQueue.add(request);

    ApplicationId app4 = new ApplicationId("default", RunIds.generate().getId());
    request = new PreviewRequest(app4, getAppRequest());
    boolean exceptionThrown = false;
    try {
      previewRequestQueue.add(request);
    } catch (IllegalStateException e) {
      exceptionThrown = true;
    }
    Assert.assertTrue(exceptionThrown);

    requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertTrue(requestOptional.isPresent());
    request = requestOptional.get();
    ProgramId programId2 = new ProgramId(app2, ProgramType.SPARK, "WordCount");
    Assert.assertEquals(programId2, request.getProgram());

    requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertTrue(requestOptional.isPresent());
    request = requestOptional.get();
    ProgramId programId3 = new ProgramId(app3, ProgramType.SPARK, "WordCount");
    Assert.assertEquals(programId3, request.getProgram());

    requestOptional = previewRequestQueue.poll(pollerInfo);
    Assert.assertFalse(requestOptional.isPresent());
  }

  private AppRequest getAppRequest() {
    String appRequestWithSchedules = "{\n" +
      "  \"artifact\": {\n" +
      "     \"name\": \"cdap-notifiable-workflow\",\n" +
      "     \"version\": \"1.0.0\",\n" +
      "     \"scope\": \"system\"\n" +
      "  },\n" +
      "  \"config\": {\n" +
      "     \"plugin\": {\n" +
      "        \"name\": \"WordCount\",\n" +
      "        \"type\": \"sparkprogram\",\n" +
      "        \"artifact\": {\n" +
      "           \"name\": \"word-count-program\",\n" +
      "           \"scope\": \"user\",\n" +
      "           \"version\": \"1.0.0\"\n" +
      "        }\n" +
      "     },\n" +
      "\n" +
      "     \"notificationEmailSender\": \"sender@example.domain.com\",\n" +
      "     \"notificationEmailIds\": [\"recipient@example.domain.com\"],\n" +
      "     \"notificationEmailSubject\": \"[Critical] Workflow execution failed.\",\n" +
      "     \"notificationEmailBody\": \"Execution of Workflow running the WordCount program failed.\"\n" +
      "  },\n" +
      "  \"preview\" : {\n" +
      "    \"programName\" : \"WordCount\",\n" +
      "    \"programType\" : \"Spark\"\n" +
      "    },\n" +
      "  \"principal\" : \"test2\",\n" +
      "  \"app.deploy.update.schedules\":\"false\"\n" +
      "}";

    return GSON.fromJson(appRequestWithSchedules, AppRequest.class);
  }
}

