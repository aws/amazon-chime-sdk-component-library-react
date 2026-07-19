// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';

import { useDeviceManager } from '../../providers/DeviceProvider';
import { DeviceLabelTriggerStatus } from '../../types';

export function useDeviceLabelTriggerStatus(): DeviceLabelTriggerStatus {
  const deviceManager = useDeviceManager();
  const [status, setStatus] = useState<DeviceLabelTriggerStatus>(
    DeviceLabelTriggerStatus.UNTRIGGERED
  );

  useEffect(() => {
    deviceManager.subscribeToDeviceLabelTriggerStatus(setStatus);
    return () => {
      deviceManager.unsubscribeFromDeviceLabelTriggerStatus(setStatus);
    };
  }, [deviceManager]);

  return status;
}

export default useDeviceLabelTriggerStatus;
