import React, { useState } from 'react';

import CallUpdates from './CallUpdates';
import Call from '../components/Call';
import MeetingWrapper from '../MeetingWrapper';
import ApiGatewayClient from '../ApiGatewayClient';

const AgentHome = (): JSX.Element => {
  const [inMeeting, setInMeeting] = useState(false);

  const handleCreateMeeting = async () => {
    const firstCustomer = await ApiGatewayClient.getFirstCustomer();
    const meeting = firstCustomer && await ApiGatewayClient.createMeeting(firstCustomer.CustomerId);
    console.log("Created meeting", meeting);
    MeetingWrapper.initializeMeetingSession(meeting, meeting.agentAttendee);
    setInMeeting(true);
  };

  return (
    <div>
      <h1>Agent site</h1>
      <CallUpdates handleJoinMeeting={handleCreateMeeting}/>
      {inMeeting && <Call attendeeName="Customer" />}
    </div>
  );
};

export default AgentHome;