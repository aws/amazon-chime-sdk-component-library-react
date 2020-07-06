// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import { useMeetingManager } from '../../../../src';

import { DevicePermissionStatus } from '../enums';

export default function useDevicePermissionStatus() {
  const [permission, setPermission] = useState<string>(
    DevicePermissionStatus.UNSET
  );
  const meetingManager = useMeetingManager();
  useEffect(() => {
    const callback = (updatedPermission: string): void => {
      setPermission(updatedPermission);
    };
    meetingManager.subscribeToDevicePermissionUpdate(callback);
    return () => {
      meetingManager.unSubscribeFromDevicePermissionUpdate(callback);
    };
  }, []);

  return permission;
}
