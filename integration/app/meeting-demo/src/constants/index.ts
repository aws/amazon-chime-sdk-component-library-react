// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { LogLevel } from 'amazon-chime-sdk-js';

export const AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER = '+17035550122';

export const VIDEO_INPUT = {
  NONE: 'None',
  BLUE: 'Blue',
  SMPTE: 'SMPTE Color Bars',
};

export const AUDIO_INPUT = {
  NONE: 'None',
  440: '440 Hz',
};

export const MAX_REMOTE_VIDEOS = 25;

export const AVAILABLE_AWS_REGIONS = {
  'us-east-1': 'United States (N. Virginia)',
  'af-south-1': 'Africa (Cape Town)',
  'ap-northeast-1': 'Japan (Tokyo)',
  'ap-northeast-2': 'Korea (Seoul)',
  'ap-south-1': 'India (Mumbai)',
  'ap-southeast-1': 'Singapore',
  'ap-southeast-2': 'Australia (Sydney)',
  'ca-central-1': 'Canada',
  'eu-central-1': 'Germany (Frankfurt)',
  'eu-north-1': 'Sweden (Stockholm)',
  'eu-south-1': 'Italy (Milan)',
  'eu-west-1': 'Ireland',
  'eu-west-2': 'United Kingdom (London)',
  'eu-west-3': 'France (Paris)',
  'sa-east-1': 'Brazil (São Paulo)',
  'us-east-2': 'United States (Ohio)',
  'us-west-1': 'United States (N. California)',
  'us-west-2': 'United States (Oregon)',
};

export const VIDEO_INPUT_QUALITY = {
  '360p': '360p (nHD) @ 15 fps (600 Kbps max)',
  '540p': '540p (qHD) @ 15 fps (1.4 Mbps max)',
  '720p': '720p (HD) @ 15 fps (1.4 Mbps max)',
};

export const SDK_LOG_LEVELS = {
  'debug': LogLevel.DEBUG,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'off': LogLevel.OFF,
};
