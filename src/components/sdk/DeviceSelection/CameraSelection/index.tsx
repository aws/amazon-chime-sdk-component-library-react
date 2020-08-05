// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import DeviceInput from '../DeviceInput';

interface Props {
  /** The message that will be shown when no camera devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for camera selection, it defaults to "Camera source". */
  label?: string;
}

export const CameraSelection: React.FC<Props> = ({
  notFoundMsg = 'No camera devices found',
  label = 'Camera source'
}) => {
  const meetingManager = useMeetingManager();
  const { devices } = useVideoInputs();

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

  return (
    <DeviceInput
      label={label}
      onChange={selectVideoInput}
      devices={devices}
      notFoundMsg={notFoundMsg}
    />
  );
};

export default CameraSelection;
