// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultBrowserBehavior } from 'amazon-chime-sdk-js';
import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioOutputDevice = (): ((
  deviceId: string
) => Promise<void>) => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(async (deviceId: string) => {
    if (new DefaultBrowserBehavior().supportsSetSinkId()) {
      await meetingManager.selectAudioOutputDevice(deviceId);
    }
  }, []);

  return selectDevice;
};

export default useSelectAudioOutputDevice;
