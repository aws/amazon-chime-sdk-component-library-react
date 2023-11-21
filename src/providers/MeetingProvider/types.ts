// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ActiveSpeakerPolicy, EventController } from 'amazon-chime-sdk-js';

import { DeviceLabels, DeviceLabelTrigger } from '../../types';

export interface MeetingManagerJoinOptions {
  deviceLabels?: DeviceLabels | DeviceLabelTrigger;
  eventController?: EventController;
  enableWebAudio?: boolean;
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
  skipDeviceSelection?: boolean;
}

export interface AttendeeResponse {
  name?: string;
  [attribute: string]: any;
}

export type ParsedJoinParams = {
  deviceLabels: DeviceLabels | DeviceLabelTrigger;
  eventController: EventController | undefined;
  enableWebAudio: boolean;
  activeSpeakerPolicy: ActiveSpeakerPolicy;
  skipDeviceSelection: boolean;
};

export type FullDeviceInfoType = {
  selectedAudioOutputDevice: string | null;
  selectedAudioInputDevice: string | null;
  selectedVideoInputDevice: string | null;
  audioInputDevices: MediaDeviceInfo[] | null;
  audioOutputDevices: MediaDeviceInfo[] | null;
  videoInputDevices: MediaDeviceInfo[] | null;
};
