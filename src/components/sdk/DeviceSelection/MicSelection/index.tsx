// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useAudioInputs } from '../../../../providers/DevicesProvider';
import DeviceInput from '../DeviceInput';

interface Props {
  /** The message that will be shown when no microphone devices are found. */
  notFoundMsg?: string;
  /** The label that will be shown for microphone selection, it defaults to `Microphone source`. */
  label?: string;
}

export const MicSelection: React.FC<Props> = ({
  notFoundMsg = 'No microphone devices found',
  label = 'Microphone source'
}) => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useAudioInputs();

  async function selectAudioInput(deviceId: string) {
    meetingManager.selectAudioInputDevice(deviceId);
  }

  return (
    <DeviceInput
      label={label}
      onChange={selectAudioInput}
      devices={devices}
      selectedDeviceId={selectedDevice}
      notFoundMsg={notFoundMsg}
    />
  );
};

export default MicSelection;
