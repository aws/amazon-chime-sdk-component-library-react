// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useVideoInputs } from '../../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no camera devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for camera selection, it defaults to "Camera source". */
  label?: string;
}

export const CameraSelection: React.FC<Props> = ({
  notFoundMsg = 'No camera devices found',
  label = 'Camera source',
  ...rest
}) => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useVideoInputs();
  const selectVideoInput = async (deviceId: string): Promise<void> => {
    await meetingManager.selectVideoInputDevice(deviceId);
  };

  return (
    <DeviceInput
      label={label}
      onChange={selectVideoInput}
      devices={devices}
      selectedDeviceId={selectedDevice}
      notFoundMsg={notFoundMsg}
      {...rest}
    />
  );
};

export default CameraSelection;
