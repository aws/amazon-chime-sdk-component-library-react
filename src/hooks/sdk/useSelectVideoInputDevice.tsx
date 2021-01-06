// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';
import { useLocalVideo } from '../../providers/LocalVideoProvider';

export const useSelectVideoInputDevice = () => {
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const meetingManager = useMeetingManager();

  const selectVideo = useCallback(
    async (deviceId: string) => {
      if (deviceId === 'none' && isVideoEnabled) {
        await toggleVideo();
      }
      await meetingManager.selectVideoInputDevice(deviceId);
    },
    [isVideoEnabled]
  );

  return selectVideo;
};

export default useSelectVideoInputDevice;
