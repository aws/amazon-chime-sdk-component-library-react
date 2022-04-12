// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';
import { DeviceLabelTriggerStatus } from '../../types';

export function useDeviceLabelTriggerStatus(): DeviceLabelTriggerStatus {
  const meetingManager = useMeetingManager();
  const [status, setStatus] = useState<DeviceLabelTriggerStatus>(
    DeviceLabelTriggerStatus.UNTRIGGERED
  );

  useEffect(() => {
    meetingManager.subscribeToDeviceLabelTriggerStatus(setStatus);
    return () => {
      meetingManager.unsubscribeFromDeviceLabelTriggerStatus(setStatus);
    };
  }, [meetingManager]);

  return status;
}

export default useDeviceLabelTriggerStatus;
