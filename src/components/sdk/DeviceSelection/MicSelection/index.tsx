// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useAudioInputs } from '../../../../providers/DevicesProvider';
import { useLogger } from '../../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no microphone devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for microphone selection, it defaults to `Microphone source`. */
  label?: string;
}

export const MicSelection: React.FC<React.PropsWithChildren<Props>> = ({
  notFoundMsg = 'No microphone devices found',
  label = 'Microphone source',
  ...rest
}) => {
  const logger = useLogger();
  const { devices, selectedDevice } = useAudioInputs();
  const meetingManager = useMeetingManager();

  const handleSelect = async (deviceId: string): Promise<void> => {
    try {
      await meetingManager.startAudioInputDevice(deviceId);
    } catch (error) {
      logger.error('MicSelection failed to select mic');
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

export default MicSelection;
