import React from 'react';
import {
  ControlBarButton,
  LeaveMeeting,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';

const MeetingLeaveControl: React.FC = () => {
  const meetingManager = useMeetingManager();

  return (
    <ControlBarButton
      icon={<LeaveMeeting />}
      onClick={async () => { await meetingManager.leave() }}
      label='Leave'
    />
  );
};

export default MeetingLeaveControl;
