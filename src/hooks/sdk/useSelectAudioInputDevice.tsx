// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioTransformDevice, Device } from 'amazon-chime-sdk-js';
import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioInputDevice = () => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(
    async (device: Device | AudioTransformDevice) => {
      await meetingManager.selectAudioInputDevice(device);
    },
    []
  );

  return selectDevice;
};

export default useSelectAudioInputDevice;
