// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import useSelectAudioOutputDevice from '../../../../hooks/sdk/useSelectAudioOutputDevice';
import { useAudioOutputs } from '../../../../providers/DevicesProvider';
import { useLogger } from '../../../../providers/LoggerProvider';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no audio output speaker devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for speaker selection, it defaults to `Speaker source`. */
  label?: string;
  /** The callback fired when the selection is changed.
   *  It is required if you want to add testing functionality around speaker selection. */
  onChange?: (selectedAudioOutputDevice: string) => void;
}

export const SpeakerSelection: React.FC<Props> = ({
  notFoundMsg = 'No speaker devices found',
  label = 'Speaker source',
  onChange,
  ...rest
}) => {
  const logger = useLogger();
  const { devices, selectedDevice } = useAudioOutputs();
  const selectAudioOutput = useSelectAudioOutputDevice();

  const handleSelect = async (deviceId: string): Promise<void> => {
    try {
      await selectAudioOutput(deviceId);
      onChange && onChange(deviceId);
    } catch (error) {
      logger.error('SpeakerSelection failed to select speaker');
    }
  };

  return (
    <DeviceInput
      label={label}
      devices={devices}
      onChange={handleSelect}
      selectedDevice={selectedDevice}
      notFoundMsg={notFoundMsg}
      {...rest}
    />
  );
};

export default SpeakerSelection;
