// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

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
  logLevel: SDK_LOG_LEVELS.info
};

const config = {
  logLevel,
  postLogConfig
};

export default config;
