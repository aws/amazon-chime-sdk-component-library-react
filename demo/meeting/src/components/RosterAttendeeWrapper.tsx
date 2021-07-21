// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  RosterAttendee,
  useAttendeeStatus,
  PopOverItem,
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';
import VideoStreamMetrics from '../containers/VideoStreamMetrics';
import routes from '../constants/routes';

interface Props {
  /** The Chime attendee ID */
  attendeeId: string;
}

const RosterAttendeeWrapper: React.FC<Props> = ({ attendeeId }) => {
  const { videoEnabled } = useAttendeeStatus(attendeeId);

  const meetingManager = useMeetingManager();
  const history = useHistory();

  const sendMessage = async (topic: string, data: string, attendeeId: String) => {
    const DATA_MESSAGE_LIFETIME_MS = 30000;
  
    const payload = {
      data: data,
      attendeeId: attendeeId || ''
    };
  
    meetingManager.audioVideo &&
      meetingManager.audioVideo.realtimeSendDataMessage(topic, payload, DATA_MESSAGE_LIFETIME_MS);
  }

  //Subscribe to receive data messages, customize this based on the need by allowing only certain roles to perform the operations
  const realtimeSubscribeToReceiveDataMessage = async () => {
    meetingManager.audioVideo?.realtimeSubscribeToReceiveDataMessage("RosterAttendeeActions", async (data) => {
        const receivedData = (data && data.json()) || {};
        const senderId = receivedData.attendeeId;
        const type = receivedData.data;
        if(senderId === meetingManager.meetingSession?.configuration.credentials?.attendeeId || '') {
          if ((type === 'UNMUTE') && meetingManager.audioVideo?.realtimeIsLocalAudioMuted()) {
            //use this to allow admin to unmute muted participants
            //meetingManager.audioVideo?.realtimeUnmuteLocalAudio();
          } else if(type === 'MUTE' && !meetingManager.audioVideo?.realtimeIsLocalAudioMuted()) {
            meetingManager.audioVideo?.realtimeMuteLocalAudio();
            //use this to restrict attendees unmuting themselves once muted by admin/other participants
            //meetingManager.audioVideo?.realtimeSetCanUnmuteLocalAudio(false);
          } else if(type === 'KICK_OUT') {
            meetingManager.audioVideo?.stop();
            meetingManager.audioVideo?.stopContentShare();
            meetingManager.leave();
            history.push(routes.HOME);
          }
        }
      });

      meetingManager.audioVideo?.realtimeSubscribeToReceiveDataMessage("RosterActions", async (data) => {
        const receivedData = (data && data.json()) || {};
        const type = receivedData.data;
        
        if ((type === 'UNMUTEALL') && meetingManager.audioVideo?.realtimeIsLocalAudioMuted()) {
          meetingManager.audioVideo?.realtimeUnmuteLocalAudio();
        } else if(type === 'MUTEALL' && !meetingManager.audioVideo?.realtimeIsLocalAudioMuted()) {
          meetingManager.audioVideo?.realtimeMuteLocalAudio();
        }
      });
  };

  useEffect(() => {
    realtimeSubscribeToReceiveDataMessage();
  },[]);

  return (
    <RosterAttendee
      attendeeId={attendeeId}
      menu={
        <><PopOverItem
          children={<span>Kick Out</span>}
          onClick={() => {
            sendMessage("RosterAttendeeActions", "KICK_OUT", attendeeId);
          } } />
          <PopOverItem
            children={<span>Mute</span>}
            onClick={() => {
              sendMessage("RosterAttendeeActions", "MUTE", attendeeId);
            }} />
          <PopOverItem
            children={<span>Umnute</span>}
            onClick={() => { 
              sendMessage("RosterAttendeeActions", "UNMUTE", attendeeId);
            }} />
            {videoEnabled ? <VideoStreamMetrics attendeeId={attendeeId} /> : null}
        </>
      }
    />
  );
};

export default RosterAttendeeWrapper;
