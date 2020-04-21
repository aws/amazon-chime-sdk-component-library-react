import React, { useState } from 'react';

import MeetingForm from './MeetingForm';
import Call from '../components/Call';
import ApiGatewayClient from '../ApiGatewayClient';
import MeetingWrapper from '../MeetingWrapper';

const CustomerHome = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [inMeeting, setInMeeting] = useState(false);

  const POLL_TIMEOUT = 10000; // 10 seconds

  const handleJoinMeeting = async(customerName: string) => {
    const response = await ApiGatewayClient.createCustomer(customerName);
    const attendeeId = await response.CustomerId;
    setIsLoading(true);

    fetchInitiatedMeeting(attendeeId);
  };

  const fetchInitiatedMeeting = async (attendeeId: string) => {
    const meetingResponse = await ApiGatewayClient.getCustomerMeeting(attendeeId);
   
    if (meetingResponse.data) {
      console.log("Connected meeting", meetingResponse.data);
      MeetingWrapper.initializeMeetingSession(meetingResponse.data, meetingResponse.data.customerAttendee);
      setInMeeting(true);
      setIsLoading(false);
    } else {
      // Poll to check if meeting is created every 10 sec
      window.setTimeout(() => fetchInitiatedMeeting(attendeeId), POLL_TIMEOUT);
    }
  };
  
  return (
    <div>
      <h1>Do you have a question?</h1>
      <MeetingForm handleSubmit={handleJoinMeeting} isLoading={isLoading}/>
      {inMeeting && <Call attendeeName="Agent"/>}
    </div>
  );
};

export default CustomerHome;
