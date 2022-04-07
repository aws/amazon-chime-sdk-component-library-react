// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Device, VideoTransformDevice } from 'amazon-chime-sdk-js';
import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectVideoInputDevice = (): ((
  device: Device | VideoTransformDevice
) => Promise<void>) => {
  const meetingManager = useMeetingManager();

  const selectVideo = useCallback(async (deviceId: string) => {
    await meetingManager.selectVideoInputDevice(deviceId);
  }, []);

  return selectVideo;
};

export default useSelectVideoInputDevice;
