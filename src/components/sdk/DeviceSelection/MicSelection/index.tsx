// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useSelectAudioInputDevice } from '../../../../hooks/sdk/useSelectAudioInputDevice';
import { useAudioInputs } from '../../../../providers/DevicesProvider';
import { DeviceConfig } from '../../../../types';
import { BaseSdkProps } from '../../Base';
import DeviceInput from '../DeviceInput';

interface Props extends BaseSdkProps {
  /** The message that will be shown when no microphone devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for microphone selection, it defaults to `Microphone source`. */
  label?: string;
  /** A boolean that determines whether or not to include additional sample audio input devices, such as "None", "440 Hz". Defaults to true. This will be deprecated in the next major version. */
  appendSampleDevices?: boolean;
}

export const MicSelection: React.FC<Props> = ({
  notFoundMsg = 'No microphone devices found',
  label = 'Microphone source',
  appendSampleDevices = true,
  ...rest
}) => {
  const audioInputConfig: DeviceConfig = {
    additionalDevices: appendSampleDevices,
  };
  const selectAudioInput = useSelectAudioInputDevice();
  const { devices, selectedDevice } = useAudioInputs(audioInputConfig);

  return (
    <DeviceInput
      label={label}
      onChange={selectAudioInput}
      devices={devices}
      selectedDeviceId={selectedDevice}
      notFoundMsg={notFoundMsg}
      {...rest}
    />
  );
};

export default MicSelection;
