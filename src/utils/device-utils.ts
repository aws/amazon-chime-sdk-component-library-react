// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultDeviceController, Device } from 'amazon-chime-sdk-js';

import { DeviceType } from '../types';

export const getFormattedDropdownDeviceOptions = (
  jsonObject: any
): DeviceType[] => {
  const formattedJSONObject = Object.entries(jsonObject).map((entry) => ({
    deviceId: entry[0].toLowerCase(),
    label: entry[1] as string,
  }));
  return formattedJSONObject;
};

export const videoInputSelectionToDevice = (deviceId: string): Device => {
  if (deviceId === 'blue') {
    return DefaultDeviceController.synthesizeVideoDevice('blue');
  }
  if (deviceId === 'smpte') {
    return DefaultDeviceController.synthesizeVideoDevice('smpte');
  }
  if (deviceId === 'none') {
    return null;
  }
  return deviceId;
};

export const audioInputSelectionToDevice = (deviceId: string): Device => {
  if (deviceId === '440') {
    return DefaultDeviceController.synthesizeAudioDevice(440);
  }
  if (deviceId === 'none') {
    return null;
  }
  return deviceId;
};

export const isOptionActive = (
  meetingManagerDeviceId: string | null,
  currentDeviceId: string
): boolean => {
  if (currentDeviceId === 'none' && meetingManagerDeviceId === null) {
    return true;
  }
  return currentDeviceId === meetingManagerDeviceId;
};

// TODO: Remove this and use DefaultBrowserBehavior.supportsSetSinkId from JS SDK v2.x
export const supportsSetSinkId = (): boolean => {
  return 'setSinkId' in HTMLAudioElement.prototype;
};
