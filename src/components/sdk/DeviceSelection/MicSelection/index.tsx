// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useAudioInputs } from '../../../../providers/DevicesProvider';
import DeviceInput from '../DeviceInput';

interface Props {
  /** Message shown when no microphone devices are found */
  notFoundMsg?: string;
}

export const MicSelection: React.FC<Props> = ({
  notFoundMsg = 'No microphone devices found'
}) => {
  const meetingManager = useMeetingManager();
  const { devices } = useAudioInputs();

  async function selectAudioInput(deviceId: string) {
    meetingManager.selectAudioInputDevice(deviceId);
  }

  return (
    <DeviceInput
      label="Microphone source"
      onChange={selectAudioInput}
      devices={devices}
      notFoundMsg={notFoundMsg}
    />
  );
};

export default MicSelection;
