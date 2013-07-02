/*
 * Copyright 2012-2013 Continuuity,Inc. All Rights Reserved.
 */

package com.continuuity.common.logging.logback.kafka;

import com.continuuity.common.conf.CConfiguration;
import com.continuuity.common.logging.LoggingContext;
import com.continuuity.common.logging.LoggingContextAccessor;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;
import com.google.inject.Inject;

/**
 * Log appender that publishes log messages to Kafka.
 */
public final class KafkaLogAppender extends AppenderBase<ILoggingEvent> {
  public static final String APPENDER_NAME = "KafkaLogAppender";
  private final SimpleKafkaProducer producer;

  @Inject
  public KafkaLogAppender(CConfiguration configuration) {
    this.producer = new SimpleKafkaProducer(configuration);
    setName(APPENDER_NAME);
  }

  @Override
  protected void append(ILoggingEvent eventObject) {
    LoggingContext loggingContext = LoggingContextAccessor.getLoggingContext();
    eventObject.prepareForDeferredProcessing();
    producer.publish(loggingContext.getLogPartition(), eventObject);
  }

  @Override
  public void stop() {
    producer.stop();
    super.stop();
  }
}
