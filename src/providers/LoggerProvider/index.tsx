// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext } from 'react';

import { ConsoleLogger, Logger, LogLevel } from 'amazon-chime-sdk-js';

export const LoggerContext = React.createContext<Logger | undefined>(undefined);

interface Props {
  /**
   * Represents [LogLevel](https://aws.github.io/amazon-chime-sdk-js/enums/loglevel.html) to determine how verbose the logging should be.
   */
  logLevel?: LogLevel;

  /**
   * This name will be used as a prefix when we log statements.
   */
  name?: string;

  /**
   * Provide a custom [Logger](https://aws.github.io/amazon-chime-sdk-js/interfaces/logger.html).
   * If not provided, we create and use [ConsoleLogger](https://aws.github.io/amazon-chime-sdk-js/classes/consolelogger.html).
   * You can also create multiple loggers using [MultiLogger](https://aws.github.io/amazon-chime-sdk-js/classes/multilogger.html).
   * If provided, the `logLevel` and `name` props will be ignored.
   */
  logger?: Logger;
}

export const LoggerProvider: React.FC<Props> = ({ logLevel = LogLevel.INFO, name = 'ChimeSDKReactComponent', logger, children }) => {
  const createLogger = () => {
    if (logger) {
      return logger;
    } else {
      return new ConsoleLogger(name, logLevel);
    }
  };

  const componentLogger = createLogger();
  return (
    <LoggerContext.Provider value={componentLogger}>
      {children}
    </LoggerContext.Provider>
  )
};

export const useLogger = (): Logger | undefined => {
  const logger = useContext(LoggerContext);
  if (!logger) {
    console.warn('useLogger must be used within LoggerProvider');
  }
  return logger;
};
