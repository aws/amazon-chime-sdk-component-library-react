// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { MeetingStatus } from '../providers/MeetingStatusProvider';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DeviceType = {
  deviceId: string;
  label: string;
};

export type SelectedDeviceId = string | null;

export type DeviceTypeContext = {
  devices: DeviceType[];
  selectedDevice: SelectedDeviceId;
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
  toggleVideo: () => Promise<void>;
};

export type ContentShareState = {
  activeContentTileId: number | null;
  isLocalShareLoading: boolean;
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

export type RosterAttendeeType = {
  chimeAttendeeId: string;
  externalUserId?: string;
  name?: string;
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};
