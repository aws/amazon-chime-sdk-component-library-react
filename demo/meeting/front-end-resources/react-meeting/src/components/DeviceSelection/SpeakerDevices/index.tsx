// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import {
  SpeakerSelection,
  SecondaryButton,
  useAudioOutputs
} from 'amazon-chime-sdk-component-library-react';

import TestSound from '../../../utils/TestSound';

const SpeakerDevices = () => {
  const { selectedDevice } = useAudioOutputs();
  const [selectedOutput, setSelectedOutput] = useState(selectedDevice);

  const handleChange = (deviceId: string): void => {
    setSelectedOutput(deviceId);
  };

  const handleTestSpeaker = () => {
    new TestSound(selectedOutput);
  };

  return (
    <div>
      <SpeakerSelection onChange={handleChange} />
      <SecondaryButton label="Test speakers" onClick={handleTestSpeaker} />
    </div>
  );
};

export default SpeakerDevices;
