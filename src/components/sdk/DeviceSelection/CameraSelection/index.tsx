// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import useSelectVideoInputDevice from '../../../../hooks/sdk/useSelectVideoInputDevice';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import { useLogger } from '../../../../providers/LoggerProvider';
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
  const logger = useLogger();
  const { devices, selectedDevice } = useVideoInputs();
  const selectVideoInput = useSelectVideoInputDevice();

  const handleSelect = async (deviceId: string): Promise<void> => {
    try {
      await selectVideoInput(deviceId);
    } catch (error) {
      logger.error('CameraSelection failed to select camera');
    }
  };

  return (
    <DeviceInput
      label={label}
      onChange={handleSelect}
      devices={devices}
      selectedDevice={selectedDevice}
      notFoundMsg={notFoundMsg}
      {...rest}
    />
  );
};

export default CameraSelection;
