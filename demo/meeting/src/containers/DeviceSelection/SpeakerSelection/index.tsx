import React, { useState, useEffect } from 'react';
import { SecondaryButton } from 'amazon-chime-sdk-component-library-react';
import { useMeetingManager, useAudioOutputs } from '../../../../../../src';

import TestSound from '../../../utils/TestSound';
import DeviceInput from '../DeviceInput';

const SpeakerSelection = () => {
  const meetingManager = useMeetingManager();
  const audioOutputs = useAudioOutputs();
  const [selectedOutput, setSelectedOutput] = useState('');

  useEffect(() => {
    if (!audioOutputs.length || selectedOutput) {
      return;
    }

    setSelectedOutput(audioOutputs[0].deviceId);
  }, [selectedOutput, audioOutputs]);

  const handleTestSpeaker = () => {
    new TestSound(selectedOutput);
  };

  async function selectAudioOutput(deviceId: string) {
    setSelectedOutput(deviceId);
    meetingManager.selectAudioInputDevice(deviceId);
  }

  return (
    <div>
      <DeviceInput
        label="Speaker source"
        devices={audioOutputs}
        onChange={selectAudioOutput}
      />
      <SecondaryButton label="Test speakers" onClick={handleTestSpeaker} />
    </div>
  );
};

export default SpeakerSelection;
