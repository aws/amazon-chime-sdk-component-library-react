// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext } from 'react';

import { ConsoleLogger, Logger, LogLevel } from 'amazon-chime-sdk-js';

export const LoggerContext = React.createContext<Logger|undefined>(undefined);

interface Props {
  /**
   * Represents [LogLevel](https://aws.github.io/amazon-chime-sdk-js/enums/loglevel.html) to determine how verbose the logging should be.
   */
  logLevel?: LogLevel;
  
  /**
   * This name will be used as a prefix when we log statements.
   */
  name?: string;
}

export const LoggerProvider: React.FC<Props> = ({ logLevel = LogLevel.INFO, name = 'ChimeReactComponentSDK', children }) => {
  const logger: Logger = new ConsoleLogger(name, logLevel);
  return (
    <LoggerContext.Provider value={logger}>
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
