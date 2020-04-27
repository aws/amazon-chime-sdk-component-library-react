import React, { useState } from 'react';

import CallUpdates from './CallUpdates';
import Meeting from '../meeting/Meeting';

const AgentHome: React.FC = () => {
  const [inMeeting, setInMeeting] = useState(false);

  const handleIsInMeetingChange = (isInMeeting: boolean) => {
    setInMeeting(isInMeeting);
  };

  return (
    <div>
      <h1>Agent site</h1>
      {inMeeting ? 
        <Meeting attendeeName="Customer" onIsInMeetingChange={handleIsInMeetingChange} /> :
        <CallUpdates onIsInMeetingChange={handleIsInMeetingChange} />
      }
    </div>
  );
};

export default AgentHome;
