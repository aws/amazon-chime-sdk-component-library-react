import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';

import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import DeviceInput from '../DeviceInput';
import AudioActivityPreview from './AudioActivityPreview';

import { title } from '../Styled';

const MicSelection = () => {
  const meetingManager = useMeetingManager();
  const audioInputs = useAudioInputs();

  async function selectAudioInput(deviceId: string) {
    meetingManager.selectAudioInputDevice(deviceId);
  }

  return (
    <div>
      <Heading as="h2" level="h6" css={title}>
        Audio
      </Heading>
      <DeviceInput
        label="Microphone source"
        onChange={selectAudioInput}
        devices={audioInputs}
      />
      <AudioActivityPreview />
    </div>
  );
};

export default MicSelection;
