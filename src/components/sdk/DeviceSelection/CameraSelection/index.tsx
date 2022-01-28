// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useVideoInputs } from '../../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { DeviceConfig } from '../../../../types';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no camera devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for camera selection, it defaults to "Camera source". */
  label?: string;
  /** A boolean that determines whether or not to include additional sample video devices, such as "None", "Blue", "SMTP Color Bars". Defaults to true. This will be deprecated in the next major version. */
  appendSampleDevices?: boolean;
}

export const CameraSelection: React.FC<Props> = ({
  notFoundMsg = 'No camera devices found',
  label = 'Camera source',
  appendSampleDevices = true,
  ...rest
}) => {
  const meetingManager = useMeetingManager();
  const videoInputConfig: DeviceConfig = {
    additionalDevices: appendSampleDevices,
  };
  const { devices, selectedDevice } = useVideoInputs(videoInputConfig);

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

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
