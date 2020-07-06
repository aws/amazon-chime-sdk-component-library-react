// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';
import { useMeetingManager, useAudioInputs } from '../../../../../../src';

import DeviceInput from '../DeviceInput';
import AudioActivityPreview from './AudioActivityPreview';

import { title } from '../Styled';

const MicSelection = () => {
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
      />
      <AudioActivityPreview />
    </div>
  );
};

export default MicSelection;
