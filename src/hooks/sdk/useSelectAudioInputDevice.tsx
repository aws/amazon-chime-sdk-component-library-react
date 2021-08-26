// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';
import { Device, AudioTransformDevice } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioInputDevice = () => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(async (device: Device | AudioTransformDevice) => {
    await meetingManager.selectAudioInputDevice(device);
  }, []);

  return selectDevice;
};

export default useSelectAudioInputDevice;
