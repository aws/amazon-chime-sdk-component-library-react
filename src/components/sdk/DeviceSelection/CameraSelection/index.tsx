// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import DeviceInput from '../DeviceInput';

interface Props {
  /** Message shown when no camera devices are found */
  notFoundMsg?: string;
}

export const CameraSelection: React.FC<Props> = ({
  notFoundMsg = 'No camera devices found'
}) => {
  const meetingManager = useMeetingManager();
  const { devices } = useVideoInputs();

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

  return (
    <DeviceInput
      label="Camera source"
      onChange={selectVideoInput}
      devices={devices}
      notFoundMsg={notFoundMsg}
    />
  );
};

export default CameraSelection;
