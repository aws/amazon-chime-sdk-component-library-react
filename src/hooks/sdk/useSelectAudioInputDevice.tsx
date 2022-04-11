// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputDevice } from 'amazon-chime-sdk-js';
import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioInputDevice = (): ((
  device: AudioInputDevice
) => Promise<void>) => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(
    async (device: AudioInputDevice) => {
      await meetingManager.selectAudioInputDevice(device);
    },
    [meetingManager]
  );

  return selectDevice;
};

export default useSelectAudioInputDevice;
