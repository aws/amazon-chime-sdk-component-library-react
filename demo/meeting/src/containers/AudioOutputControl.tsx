import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  faCaretDown,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';
import Dropdown, { OptionItem } from '../components/Dropdown';
import { createOptions } from '../utils/DeviceUtils';

const AudioOutputControl: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [showAudioDropdown, setShowAudioDropdown] = useState(false);
  const [audioOutputOptions, setAudioOutputOptions] = useState(new Array<OptionItem>());
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    populateAudioOutputList();
  }, []);
    
  const populateAudioOutputList = async (): Promise<void> => {
    const genericName = 'Speaker';
    const audioOutputOpts = createOptions(
      genericName,
      meetingManager?.audioOutputDevices!,
      [],
    );
    setAudioOutputOptions(audioOutputOpts);
  } 
  
  const toggleAudio = (): void => {
    if (!audioRef.current) {
      return;
    }
    setIsAudioOn(!isAudioOn);
    if (isAudioOn) {
      meetingManager?.audioVideo?.unbindAudioElement();
    } else {
      meetingManager?.audioVideo?.bindAudioElement(audioRef.current);
    }
  }

  const reselectAudioOutput = async (name: string): Promise<void> => {
    await meetingManager?.audioVideo?.chooseAudioOutputDevice(name);
  }

  return (
    <>
      <ButtonGroup>
        <IconButton icon={isAudioOn ? faVolumeUp : faVolumeMute} onClick={toggleAudio} />
        <IconButton icon={faCaretDown} onClick={() => setShowAudioDropdown(!showAudioDropdown)}/>
          {showAudioDropdown && <Dropdown onChange={reselectAudioOutput} options={audioOutputOptions} />}
      </ButtonGroup>
      <audio ref={audioRef} style={{ display: 'none' }} />
    </>
  );
}

export default AudioOutputControl;
