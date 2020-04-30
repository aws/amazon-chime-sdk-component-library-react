import React from 'react';

import MeetingAudio from './MeetingAudio';
import MeetingVideo from '../components/MeetingVideo';
import MeetingVideoProvider from './MeetingVideoProvider';

export interface MeetingProps {
  attendeeName: string;
  onIsInMeetingChange: (isInMeeting: boolean) => void;
}

const Meeting : React.FC<MeetingProps> = ({ attendeeName, onIsInMeetingChange }) => {
  return (
    <>
      <h1>You are talking to {attendeeName}</h1>
      <MeetingVideoProvider attendeeName={attendeeName} onIsInMeetingChange={onIsInMeetingChange}>
        <MeetingVideo />
      </MeetingVideoProvider>
      <MeetingAudio />
    </>
  )
};

export default Meeting;
