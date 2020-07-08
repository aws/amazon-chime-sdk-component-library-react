// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Device, DefaultDeviceController } from 'amazon-chime-sdk-js';
import { FormattedDeviceType } from '../types';

export const populateDeviceList = (
  element: Element,
  genericName: string,
  devices: MediaDeviceInfo[],
  additionalOptions: string[],
  callback?: (name: string) => void
): void => {
  const list = element as HTMLSelectElement;
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
  for (let i = 0; i < devices.length; i++) {
    const option = document.createElement('option');
    list.appendChild(option);
    option.text = devices[i].label || `${genericName} ${i + 1}`;
    option.value = devices[i].deviceId;
    callback && callback(devices[i].deviceId);
  }
  if (additionalOptions.length > 0) {
    const separator = document.createElement('option');
    separator.disabled = true;
    separator.text = '──────────';
    list.appendChild(separator);
    for (const additionalOption of additionalOptions) {
      const option = document.createElement('option');
      list.appendChild(option);
      option.text = additionalOption;
      option.value = additionalOption;
      callback && callback(additionalOption);
    }
  }
  if (!list.firstElementChild) {
    const option = document.createElement('option');
    option.text = 'Device selection unavailable';
    list.appendChild(option);
  }
};

export const getFormattedDropdownDeviceOptions = (
  jsonObject: any
): FormattedDeviceType[] => {
  const formattedJSONObject = Object.entries(jsonObject).map(entry => ({
    deviceId: entry[0].toLowerCase(),
    label: entry[1] as string
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
