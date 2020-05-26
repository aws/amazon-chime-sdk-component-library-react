import React, { useContext, useEffect, useState } from 'react';
// import { faEyeSlash, faPause, faVolumeOff, faVolumeUp, faSignOutAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown, faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash, faEye, faPause, faVolumeOff, faSignOutAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import routes from '../constants/routes';
import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';
import LocalVideo from '../components/LocalVideo';
import { getMeetingStatusContext, MeetingStatus } from '../meeting/MeetingStatusContext';

const MeetingControlsContainer: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const history = useHistory();
  const [muted, setMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const { updateMeetingStatus } = useContext(getMeetingStatusContext());

  const meetingId = meetingManager?.meetingId;
  const region = meetingManager ?.region;

  useEffect(() => {
    const handler = (isMuted: boolean): void => {
      setMuted(isMuted);
    };
    meetingManager ?.audioVideo?.realtimeSubscribeToMuteAndUnmuteLocalAudio(handler);
    if (meetingManager?.audioVideo?.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }
    return () => {
      meetingManager ?.audioVideo?.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(handler);
    };
  }, []);

  const toggleMicBtn = async (): Promise<void> => {
    if (muted) {
      meetingManager ?.audioVideo ?.realtimeUnmuteLocalAudio();
    } else {
      meetingManager ?.audioVideo ?.realtimeMuteLocalAudio();
    }
  };

  const toggleVideoBtn = async (): Promise<void> => {
    if (isVideoEnabled) {
      meetingManager ?.audioVideo ?.stopLocalVideoTile();
      setIsVideoEnabled(false);
      // TODO: need to hide tile here
    } else {
      try {
        if (!meetingManager ?.currentVideoInputDevice) {
          throw new Error('Error, currentVideoInputDevice does not exist');
        }
        await meetingManager?.audioVideo?.chooseVideoInputDevice(meetingManager ?.currentVideoInputDevice);
        console.log('Current input:', meetingManager ?.currentVideoInputDevice);
        meetingManager?.audioVideo?.startLocalVideoTile();
        setIsVideoEnabled(true);
      } catch (error) {
        console.log("No video input device selected");
        setIsVideoEnabled(false);
      }
    }
  }

  const endMeeting = async (): Promise<void> => {
    console.log("TODO: add end meeting alert");
    await meetingManager ?.endMeeting(meetingId!);
    updateMeetingStatus(MeetingStatus.Ended);
    history.push(`${routes.HOME}`)
  }

  const leaveMeeting = async (): Promise<void> => {
    meetingManager ?.leaveMeeting().then(() => {
      history.push(`${routes.HOME}`);
    });
  }

  return (
    <>
    <div className="MeetingControlContainer" style={{ display: "flex" }}>
      <p>{`${meetingId} (${region})`}</p>
      <ButtonGroup>
          <IconButton icon={muted ? faMicrophoneSlash : faMicrophone } onClick={toggleMicBtn} />
        <IconButton icon={faCaretDown} />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon={isVideoEnabled ? faVideo : faVideoSlash} onClick={toggleVideoBtn} />
        <IconButton icon={faCaretDown} />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon={faEye} />
        <IconButton icon={faCaretDown} />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon={faPause} />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon={faVolumeOff} />
        <IconButton icon={faCaretDown} />
      </ButtonGroup>
      <ButtonGroup>
        <IconButton icon={faSignOutAlt} onClick={leaveMeeting} />
        <IconButton icon={faPowerOff} onClick={endMeeting} />
      </ButtonGroup>
    </div>
      <LocalVideo id="meeting-video"/>
    </>
  );
}

export default MeetingControlsContainer;
