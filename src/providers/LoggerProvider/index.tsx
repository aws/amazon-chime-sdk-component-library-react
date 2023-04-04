// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ConsoleLogger, Logger, LogLevel } from 'amazon-chime-sdk-js';
import React, { useContext } from 'react';

const consoleLogger: Logger = new ConsoleLogger(
  'ChimeSDKReactComponent',
  LogLevel.INFO
);
export const LoggerContext = React.createContext<Logger>(consoleLogger);

interface Props {
  logger: Logger;
}

export const LoggerProvider: React.FC<React.PropsWithChildren<Props>> = ({ logger, children }) => {
  return (
    <LoggerContext.Provider value={logger}>{children}</LoggerContext.Provider>
  );
};

export const useLogger = (): Logger => {
  const logger = useContext(LoggerContext);
  return logger;
};
