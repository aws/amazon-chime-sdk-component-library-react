// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {
  ConsoleLogger,
  LogLevel,
} from 'amazon-chime-sdk-js';
import { SDK_LOG_LEVELS } from './constants';

const urlParams = new URLSearchParams(window.location.search);
const queryLogLevel = urlParams.get('logLevel') || 'warn';
const logLevel = SDK_LOG_LEVELS[queryLogLevel] || SDK_LOG_LEVELS.warn;

const BASE_URL: string = [
  location.protocol,
  '//',
  location.host,
  location.pathname.replace(/\/*$/, '/'),
].join('');

const postLogConfig = {
  name: 'SDK_LOGS',
  batchSize: 85,
  intervalMs: 2000,
  url: `${BASE_URL}logs`,
  logLevel: SDK_LOG_LEVELS.info,
};

export const logger = new ConsoleLogger('SDK', LogLevel.INFO);

const config = {
  logLevel,
  simulcastEnabled: false,
  postLogConfig,
  logger,
};

export default config;
