import React, { useContext } from 'react';

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import AudioInputControl from './AudioInputControl';
import VideoInputControl from './VideoInputControl';
import ContentShareControl from './ContentShareControl';
import AudioOutputControl from './AudioOutputControl';
import EndMeetingControl from './EndMeetingControl';

const MeetingControlsContainer: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const meetingId = meetingManager?.meetingId;
  const region = meetingManager?.region;

  return (
    <div className="MeetingControlContainer" style={{ display: "flex" }}>
      <p>{`${meetingId} (${region})`}</p>
      <AudioInputControl />
      <VideoInputControl />
      <ContentShareControl />
      <AudioOutputControl />
      <EndMeetingControl />
    </div>
  );
}

export default MeetingControlsContainer;
