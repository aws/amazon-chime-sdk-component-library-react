// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

import { DevicePermissionStatus } from '../enums';

export default function useDevicePermissionStatus() {
  const meetingManager = useMeetingManager();
  const [permission, setPermission] = useState<string>(
    DevicePermissionStatus.UNSET
  );

  useEffect(() => {
    const callback = (updatedPermission: string): void => {
      setPermission(updatedPermission);
    };
    meetingManager.subscribeToDevicePermissionUpdate(callback);
    return () => {
      meetingManager.unsubscribeFromDevicePermissionUpdate(callback);
    };
  }, [meetingManager]);

  return permission;
}
