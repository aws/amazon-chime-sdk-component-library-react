// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DeviceType = {
  deviceId: string;
  label: string;
};

export type SelectedDeviceId = string | null;

export type DeviceTypeContext = {
  devices: DeviceType[];
  selectedDevice: SelectedDeviceId;
  selectDeviceError?: Error | null;
};

export type DeviceConfig = {
  /** Whether to include additional devices (such as "Color bars" for video, "440Hz" for audio) in the available devices list */
  additionalDevices?: boolean;
};

export type LocalAudioOutputContextType = {
  isAudioOn: boolean;
  toggleAudio: () => void;
};

export type LocalVideoContextType = {
  tileId: null | number;
  isVideoEnabled: boolean;
  setIsVideoEnabled: (isEnabled: boolean) => void;
  toggleVideo: () => Promise<void>;
};

export type ContentShareControlContextType = {
  paused: boolean;
  toggleContentShare: (sourceId?: string) => Promise<void>;
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
}

export type RosterAttendeeType = {
  chimeAttendeeId: string;
  externalUserId?: string;
  name?: string;
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};

export enum DevicePermissionStatus {
  UNSET = 'UNSET',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
}

export enum DeviceLabels {
  None,
  Audio,
  Video,
  AudioAndVideo,
}

export type DeviceLabelTrigger = () => Promise<MediaStream>;
