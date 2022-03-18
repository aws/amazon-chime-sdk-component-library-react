// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  EventController,
  Logger,
  LogLevel,
} from 'amazon-chime-sdk-js';

import { DeviceLabels, DeviceLabelTrigger } from '../../types';

export enum DevicePermissionStatus {
  UNSET = 'UNSET',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
}

export interface MeetingManagerJoinOptions {
  deviceLabels?: DeviceLabels | DeviceLabelTrigger;
  eventController?: EventController;
  logLevel?: LogLevel;
  postLoggerConfig?: PostLoggerConfig;
  logger?: Logger;
  enableWebAudio?: boolean;
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
}

export interface AttendeeResponse {
  name?: string;
  [attribute: string]: any;
}

export type FullDeviceInfoType = {
  selectedAudioOutputDevice: string | null;
  selectedAudioInputDevice: string | null;
  selectedVideoInputDevice: string | null;
  audioInputDevices: MediaDeviceInfo[] | null;
  audioOutputDevices: MediaDeviceInfo[] | null;
  videoInputDevices: MediaDeviceInfo[] | null;
};

export interface PostLoggerConfig {
  name: string;
  batchSize: number;
  intervalMs: number;
  url: string;
  logLevel: LogLevel;
}
