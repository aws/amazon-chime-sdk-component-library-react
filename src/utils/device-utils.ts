// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioTransformDevice,
  DefaultDeviceController,
  Device,
  isAudioTransformDevice,
  isVideoTransformDevice,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';

export const isOptionActive = async (
  selectedDevice:
    | Device
    | AudioTransformDevice
    | VideoTransformDevice
    | null
    | undefined,
  currentDeviceId: string
): Promise<boolean> => {
  const selectedDeviceId = await getDeviceId(selectedDevice);
  return selectedDeviceId === currentDeviceId;
};

export const getDeviceId = async (
  device:
    | Device
    | AudioTransformDevice
    | VideoTransformDevice
    | null
    | undefined
): Promise<string> => {
  if (!device) {
    return '';
  }

  let intrinsicDevice: Device | null;

  if (isAudioTransformDevice(device) || isVideoTransformDevice(device)) {
    intrinsicDevice = await device.intrinsicDevice();
  } else {
    intrinsicDevice = device;
  }
  const deviceId = DefaultDeviceController.getIntrinsicDeviceId(
    intrinsicDevice
  ) as string;

  return deviceId;
};

export function isPrevNextUndefined<T>(prev: T, next: T): boolean {
  const isPrevUndefined = prev === undefined;
  const isNextUndefined = next === undefined;
  return isPrevUndefined && isNextUndefined;
}

export function isPrevNextEmpty<T>(prev: T, next: T): boolean {
  const isPrevEmpty = prev && Object.keys(prev).length === 0;
  const isNextEmpty = next && Object.keys(next).length === 0;
  return isPrevEmpty && isNextEmpty;
}
