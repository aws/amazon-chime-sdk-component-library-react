// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

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
