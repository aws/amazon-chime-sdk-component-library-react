import React from 'react';

import MeetingAudio from './MeetingAudio';
import MeetingVideo from '../components/MeetingVideo';

export interface MeetingProps {
  attendeeName: string;
  onIsInMeetingChange: (isInMeeting: boolean) => void;
}

const Meeting : React.FC<MeetingProps> = ({ attendeeName, onIsInMeetingChange }) => {
  return (
    <>
      <h1>You are talking to {attendeeName}</h1>
      <MeetingVideo attendeeName={attendeeName} onIsInMeetingChange={onIsInMeetingChange} />
      <MeetingAudio />
    </>
  )
};

export default Meeting;
