// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

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

export type LocalVideoContextType = {
  isVideoEnabled: boolean;
  toggleVideo: () => Promise<void>;
};

export type DeviceConfig = {
  additionalDevices?: boolean;
};

export type LocalAudioOutputContextType = {
  isAudioOn: boolean;
  toggleAudio: () => void;
};

export type ContentShareControlContextType = {
  isContentSharePaused: boolean;
  toggleContentShare: () => Promise<void>;
  togglePauseContentShare: () => void;
};

export enum MeetingMode {
  Spectator,
  Attendee,
}

export enum Layout {
  Gallery,
  Featured,
}

// Different CPU Utilizations percentage options for initializing background blur and replacement processors
export const VideoFiltersCpuUtilization = {
  Disabled: '0',
  CPU10Percent: '10',
  CPU20Percent: '20',
  CPU40Percent: '40',
};

// Video Transform Options 
export const VideoTransformOptions = {
  None: 'None',
  Blur: 'Background Blur',
  Replacement: 'Background Replacement',
};

export type VideoTransformDropdownOptionType = {
  label: string,
  value: string,
}