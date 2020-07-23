// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Heading } from '../../../ui/Heading';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useAudioInputs } from '../../../../providers/DevicesProvider';
import DeviceInput from '../DeviceInput';
import AudioActivityPreview from './AudioActivityPreview';

import { title } from '../Styled';

interface Props {
  notFoundMsg?: string;
}

const MicSelection: React.FC<Props> = ({
  notFoundMsg = 'No microphone devices found'
}) => {
  const meetingManager = useMeetingManager();
  const { devices } = useAudioInputs();

  async function selectAudioInput(deviceId: string) {
    meetingManager.selectAudioInputDevice(deviceId);
  }

  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Audio
      </Heading>
      <DeviceInput
        label="Microphone source"
        onChange={selectAudioInput}
        devices={devices}
        notFoundMsg={notFoundMsg}
      />
      <AudioActivityPreview />
    </div>
  );
};

export default MicSelection;
