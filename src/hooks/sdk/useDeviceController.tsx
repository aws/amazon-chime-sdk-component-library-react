// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DeviceController } from 'amazon-chime-sdk-js';
import { useContext, useEffect, useState } from 'react';

import { MeetingContext } from '../../providers/MeetingProvider';

/**
 * Returns the device controller for building custom device UIs, or `undefined` when no controller is
 * available (no `deviceController` was passed to `MeetingProvider` and no meeting has been joined).
 */
export const useDeviceController = (): DeviceController | undefined => {
  const meetingManager = useContext(MeetingContext);
  const [deviceController, setDeviceController] = useState<
    DeviceController | undefined
  >(meetingManager?.deviceController);

  useEffect(() => {
    if (!meetingManager) {
      return;
    }
    meetingManager.subscribeToDeviceController(setDeviceController);
    return () =>
      meetingManager.unsubscribeFromDeviceController(setDeviceController);
  }, [meetingManager]);

  return deviceController;
};
