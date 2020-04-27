import React, { useState } from 'react';

import MeetingForm from './MeetingForm';
import Meeting from '../meeting/Meeting';

const CustomerHome: React.FC = () => {
  const [inMeeting, setInMeeting] = useState(false);

  const handleIsInMeetingChange = (isInMeeting: boolean) => {
    setInMeeting(isInMeeting);
  };
  
  return (
    <div>
      <h1>Do you have a question?</h1>
      {inMeeting ?
        <Meeting attendeeName="Agent" onIsInMeetingChange={handleIsInMeetingChange} /> : 
        <MeetingForm onIsInMeetingChange={handleIsInMeetingChange} />
      }
    </div>
  );
};

export default CustomerHome;
