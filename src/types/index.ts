// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputDevice, VideoInputDevice } from 'amazon-chime-sdk-js';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DeviceType = {
  deviceId: string;
  label: string;
};

export type AudioInputContextType = {
  devices: DeviceType[];
  selectedDevice: AudioInputDevice | undefined;
};

export type AudioOutputContextType = {
  devices: DeviceType[];
  selectedDevice: string | null;
};

export type VideoInputContextType = {
  devices: DeviceType[];
  selectedDevice: VideoInputDevice | undefined;
};

export type LocalAudioOutputContextType = {
  isAudioOn: boolean;
  toggleAudio: () => void;
};

export type LocalVideoContextType = {
  tileId: null | number;
  isVideoEnabled: boolean;
  setIsVideoEnabled: (isEnabled: boolean) => void;
  hasReachedVideoLimit: boolean;
  setHasReachedVideoLimit: (hasReached: boolean) => void;
  toggleVideo: () => Promise<void>;
};

export type ContentShareControlContextType = {
  paused: boolean;
  toggleContentShare: (source?: string | MediaStream) => Promise<void>;
  togglePauseContentShare: () => void;
};

export enum MeetingStatus {
  Loading,
  Succeeded,
  Failed,
  Ended,
  JoinedFromAnotherDevice,
  Left,
  TerminalFailure,
  Reconnecting,
}

export type RosterAttendeeType = {
  chimeAttendeeId: string;
  externalUserId?: string;
  name?: string;
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};

export enum DeviceLabelTriggerStatus {
  UNTRIGGERED = 'UNTRIGGERED',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
}

export enum DeviceLabels {
  None = 1,
  Audio,
  Video,
  AudioAndVideo,
}

export type DeviceLabelTrigger = () => Promise<MediaStream>;

export type MeetingFeatures = {
  Audio: { [key: string]: string };
};

export type CreateMeetingResponse = {
  MeetingFeatures: MeetingFeatures;
};

export type JoinMeetingInfo = {
  Meeting: CreateMeetingResponse;
  Attendee: string;
};
