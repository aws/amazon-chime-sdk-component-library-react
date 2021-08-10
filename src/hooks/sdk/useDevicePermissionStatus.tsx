// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';
import { DevicePermissionStatus } from '../../types';

export function useDevicePermissionStatus() {
  const meetingManager = useMeetingManager();
  const [permission, setPermission] = useState<DevicePermissionStatus>(
    DevicePermissionStatus.UNSET
  );

  useEffect(() => {
    meetingManager.subscribeToDevicePermissionStatus(setPermission);
    return () => {
      meetingManager.unsubscribeFromDevicePermissionStatus(setPermission);
    };
  }, [meetingManager]);

  return permission;
}

export default useDevicePermissionStatus;
