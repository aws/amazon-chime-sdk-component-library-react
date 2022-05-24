import React from 'react';
import {
  MeetingStatus,
  useMeetingManager,
  useMeetingStatus,
} from 'amazon-chime-sdk-component-library-react';

const MeetingInfo: React.FC = () => {
  const meetingStatus = useMeetingStatus();
  const meetingManager = useMeetingManager();

  return (
    <div>
      <p >Meeting Status: <span id='meeting-status'>{MeetingStatus[meetingStatus]}</span></p>
      <p >Meeting ID: <span id='meeting-id'>{meetingManager.meetingId}</span></p>
    </div>
  );
}

export default MeetingInfo;
