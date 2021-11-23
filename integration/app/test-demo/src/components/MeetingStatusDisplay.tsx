import React from 'react';
import {
  MeetingStatus,
  useMeetingStatus,
} from "amazon-chime-sdk-component-library-react";

const MeetingStatusDisplay: React.FC = () => {
  const meetingStatus = useMeetingStatus();
  return <p id="meeting-status">Meeting Status: {MeetingStatus[meetingStatus]}</p>;
}

export default MeetingStatusDisplay;
