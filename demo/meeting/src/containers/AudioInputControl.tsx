import React, { useContext, useState, useEffect } from 'react';
import {
  faCaretDown,
  faMicrophone,
  faMicrophoneSlash,
} from '@fortawesome/free-solid-svg-icons'

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';
import Dropdown, { OptionItem } from '../components/Dropdown';
import { createOptions } from '../utils/DeviceUtils';
import { AUDIO_INPUT } from '../constants';

const AudioInputControl: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const [muted, setMuted] = useState(false);
  const [showMicDropdown, setShowMicDropdown] = useState(false);
  const [audioInputOptions, setAudioInputOptions] = useState(new Array<OptionItem>());

  useEffect(() => {
    const handler = (isMuted: boolean): void => {
      setMuted(isMuted);
    };
    meetingManager?.audioVideo?.realtimeSubscribeToMuteAndUnmuteLocalAudio(handler);

    return () => {
      meetingManager?.audioVideo?.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(handler);
    };
  }, []);

  useEffect(() => {
    populateAudioInputList();
  }, []);

  const populateAudioInputList = async (): Promise<void> => {
    const genericName = 'Microphone';
    const additionalDevices = [AUDIO_INPUT.NONE, AUDIO_INPUT[440]];
    const audioInputOpts = createOptions(
      genericName,
      meetingManager?.audioInputDevices!,
      additionalDevices,
    );
    setAudioInputOptions(audioInputOpts);
  }

  const toggleMicBtn = async (): Promise<void> => {
    if (muted) {
      meetingManager?.audioVideo?.realtimeUnmuteLocalAudio();
    } else {
      meetingManager?.audioVideo?.realtimeMuteLocalAudio();
    }
  };

  const reselectAudioInput = async (name: string): Promise<void> => {
    await meetingManager?.audioVideo?.chooseAudioInputDevice(meetingManager?.audioInputSelectionToDevice(name));
  }

  return (
    <ButtonGroup>
      <IconButton icon={muted ? faMicrophoneSlash : faMicrophone } onClick={toggleMicBtn} />
      <IconButton icon={faCaretDown} onClick={() => setShowMicDropdown(!showMicDropdown)} />
      {showMicDropdown && <Dropdown onChange={reselectAudioInput} options={audioInputOptions} />}
    </ButtonGroup>
  )
}

export default AudioInputControl;
