// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioOutputDevice = () => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(
    async (deviceId: string) => {
      await meetingManager.selectAudioOutputDevice(deviceId);
    },
    []
  );

  return selectDevice;
};

export default useSelectAudioOutputDevice;
