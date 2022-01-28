// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import useSelectAudioOutputDevice from '../../../../hooks/sdk/useSelectAudioOutputDevice';
import { useAudioOutputs } from '../../../../providers/DevicesProvider';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no audio output speaker devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for speaker selection, it defaults to `Speaker source`. */
  label?: string;
  /** The callback fired when the selection is changed. It is required if you want to add testing functionality around speaker selection. */
  onChange?: (selectedAudioOutputDeviceId: string) => void;
}

export const SpeakerSelection: React.FC<Props> = ({
  notFoundMsg = 'No speaker devices found',
  label = 'Speaker source',
  onChange,
  ...rest
}) => {
  const { devices, selectedDevice } = useAudioOutputs();
  const selectAudioOutput = useSelectAudioOutputDevice();

  async function selectDevice(deviceId: string) {
    selectAudioOutput(deviceId);
    onChange && onChange(deviceId);
  }

  return (
    <DeviceInput
      label={label}
      devices={devices}
      onChange={selectDevice}
      selectedDeviceId={selectedDevice}
      notFoundMsg={notFoundMsg}
      {...rest}
    />
  );
};

export default SpeakerSelection;
