// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { MeetingStatus } from '../providers/MeetingStatusProvider';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type FormattedDeviceType = {
  deviceId: string;
  label: string;
};

export type DeviceType = MediaDeviceInfo | FormattedDeviceType;

export type SelectedDeviceType = string | null;

export type DeviceTypeContext = {
  devices: DeviceType[];
  selectedDevice: SelectedDeviceType;
};

export type DeviceConfig = {
  additionalDevices?: boolean;
};

export type LocalAudioOutputContextType = {
  isAudioOn: boolean;
  toggleAudio: () => void;
};

export type LocalVideoToggleContextType = {
  isVideoEnabled: boolean;
  toggleVideo: () => Promise<void>;
};

export type ContentShareState = {
  activeContentTileId: number | null;
  isRemoteUserSharing: boolean;
  isLocalUserSharing: boolean;
  isSomeoneSharing: boolean;
  sharingAttendeeId: string | null;
};

export type ContentShareControlContextType = {
  isContentSharePaused: boolean;
  toggleContentShare: () => Promise<void>;
  togglePauseContentShare: () => void;
};

export type MeetingContextType = {
  meetingStatus: MeetingStatus;
  updateMeetingStatus: (s: MeetingStatus) => void;
};