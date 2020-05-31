import React, { useContext, useEffect, useState } from 'react';
import {
  faCaretDown,
  faVideo,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons'

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';
import Dropdown, { OptionItem } from '../components/Dropdown';
import LocalVideo from '../components/LocalVideo';
import { createOptions } from '../utils/DeviceUtils';
import { VIDEO_INPUT } from '../constants';

const VideoInputControl: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [showCameraDropdown, setShowCameraDropdown] = useState(false);
  const [videoInputOptions, setVideoInputOptions] = useState(new Array<OptionItem>());

  useEffect(() => {
    if (meetingManager?.audioVideo?.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }
    populateVideoInputList();
  }, []);

  const populateVideoInputList = async(): Promise<void> => {
    const genericName = 'Camera';
    const additionalDevices = [VIDEO_INPUT.NONE, VIDEO_INPUT.BLUE, VIDEO_INPUT.SMPTE];
    const videoInputOpts = createOptions(
      genericName,
      meetingManager?.videoInputDevices!,
      additionalDevices,
    );
    setVideoInputOptions(videoInputOpts);
  }

  const toggleVideoBtn = async (): Promise<void> => {
    if (isVideoEnabled) {
      meetingManager?.audioVideo?.stopLocalVideoTile();
      setIsVideoEnabled(false);
    } else {
      try {
        if (!meetingManager?.currentVideoInputDevice) {
          throw new Error('Error, currentVideoInputDevice does not exist');
        }
        await meetingManager?.audioVideo?.chooseVideoInputDevice(meetingManager?.currentVideoInputDevice);
        console.log('Current input:', meetingManager?.currentVideoInputDevice);
        meetingManager?.audioVideo?.startLocalVideoTile();
        setIsVideoEnabled(true);
      } catch (error) {
        console.log("No video input device selected");
        setIsVideoEnabled(false);
      }
    }
  }

  const reselectVideoInput = async (name: string): Promise<void> => {
    try {
      await openVideoInputFromSelection(name);
    } catch (err) {
      console.log('No video input device selected');
    }
  }

  const openVideoInputFromSelection = async (selection: string): Promise<void> => {
    if (!selection) {
      return;
    }
    const device = await meetingManager?.videoInputSelectionToDevice(selection);
    if (device === null) {
      meetingManager?.audioVideo?.stopLocalVideoTile();
      setIsVideoEnabled(false);
      console.log('No video device selected');
    }
    await meetingManager?.audioVideo?.chooseVideoInputDevice(device!);
  }

  return (
    <>
      <ButtonGroup>
        <IconButton icon={isVideoEnabled ? faVideo : faVideoSlash} onClick={toggleVideoBtn} />
        <IconButton icon={faCaretDown} onClick={() => setShowCameraDropdown(!showCameraDropdown)}/>
        {showCameraDropdown && <Dropdown onChange={reselectVideoInput} options={videoInputOptions} />}
      </ButtonGroup>
      {/* TODO: need to resize video tile dynamically */}
      <LocalVideo id="meeting-video" style={{ width: "20rem", position: "absolute", top: "3.5rem" }} />
    </>
  );
}

export default VideoInputControl;
