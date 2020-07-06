// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect } from 'react';
import { SecondaryButton } from 'amazon-chime-sdk-component-library-react';
import { useMeetingManager, useAudioOutputs } from '../../../../../../src';

import TestSound from '../../../utils/TestSound';
import DeviceInput from '../DeviceInput';

const SpeakerSelection = () => {
  const meetingManager = useMeetingManager();
  const { devices } = useAudioOutputs();
  const [selectedOutput, setSelectedOutput] = useState('');

  useEffect(() => {
    if (!devices.length || selectedOutput) {
      return;
    }

    setSelectedOutput(devices[0].deviceId);
  }, [selectedOutput, devices]);

  const handleTestSpeaker = () => {
    new TestSound(selectedOutput);
  };

  async function selectAudioOutput(deviceId: string) {
    setSelectedOutput(deviceId);
    meetingManager.selectAudioOutputDevice(deviceId);
  }

  return (
    <div>
      <DeviceInput
        label="Speaker source"
        devices={devices}
        onChange={selectAudioOutput}
      />
      <SecondaryButton label="Test speakers" onClick={handleTestSpeaker} />
    </div>
  );
};

export default SpeakerSelection;
