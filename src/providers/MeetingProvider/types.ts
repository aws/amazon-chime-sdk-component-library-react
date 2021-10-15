// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  EventReporter,
  Logger,
  LogLevel,
  VideoDownlinkBandwidthPolicy,
  VideoUplinkBandwidthPolicy,
} from 'amazon-chime-sdk-js';

import { DeviceLabels, DeviceLabelTrigger } from '../../types';

export enum DevicePermissionStatus {
  UNSET = 'UNSET',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
}

export interface MeetingJoinData {
  meetingInfo: any;
  attendeeInfo: any;
  deviceLabels?: DeviceLabels | DeviceLabelTrigger;
  eventReporter?: EventReporter;
  meetingManagerConfig?: MeetingManagerConfig;
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

export interface PostLogConfig {
  name: string;
  batchSize: number;
  intervalMs: number;
  url: string;
  logLevel: LogLevel;
}

export interface MeetingManagerConfig {
  logLevel: LogLevel;
  postLogConfig?: PostLogConfig;
  simulcastEnabled?: boolean;
  enableWebAudio?: boolean;
  logger?: Logger;
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
  videoUplinkBandwidthPolicy?: VideoUplinkBandwidthPolicy;
  videoDownlinkBandwidthPolicy?: VideoDownlinkBandwidthPolicy;
}
