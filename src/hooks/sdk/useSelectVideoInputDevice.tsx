// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { VideoInputDevice } from 'amazon-chime-sdk-js';
import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectVideoInputDevice = (): ((
  device: VideoInputDevice
) => Promise<void>) => {
  const meetingManager = useMeetingManager();

  const selectVideo = useCallback(async (device: VideoInputDevice) => {
    await meetingManager.selectVideoInputDevice(device);
  }, []);

  return selectVideo;
};

export default useSelectVideoInputDevice;
