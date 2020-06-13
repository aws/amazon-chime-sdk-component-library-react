import React, { FC, useState, FormEvent } from 'react';

import Input from '../components/Input';
import ApiGatewayClient from '../ApiGatewayClient';
import MeetingManager from '../meeting/MeetingManager';

const POLL_TIMEOUT = 5000; // 5 seconds

interface MeetingFormProps {
  onIsInMeetingChange: (isInMeeting: boolean) => void;
}

const MeetingForm: FC<MeetingFormProps> = ({ onIsInMeetingChange }) => {
  const [inputName, setInputName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinMeeting = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await ApiGatewayClient.createCustomer(inputName);
    const attendeeId = await response.CustomerId;
    fetchInitiatedMeeting(attendeeId);
  };

  const fetchInitiatedMeeting = async (attendeeId: string) => {
    const meetingResponse = await ApiGatewayClient.getCustomerMeeting(attendeeId);
    if (meetingResponse.data) {
      console.log("Connected meeting", meetingResponse.data);
      MeetingManager.initializeMeetingSession(meetingResponse.data.meeting, meetingResponse.data.customerAttendee);
      onIsInMeetingChange(true);
    } else {
      // Poll to check if meeting is created every 5 sec
      window.setTimeout(() => fetchInitiatedMeeting(attendeeId), POLL_TIMEOUT);
    }
  };

  return (
    <form className="MeetingForm">
      <p>Start a video chat with an agent representative</p>
      <Input
        type={"text"}
        name={"inputName"}
        value={inputName}
        placeholder={"Your Name"}
        onChange={e => setInputName(e.target.value)}
      />
      <br />
      <button onClick={handleJoinMeeting} disabled={isLoading || !inputName}>
        {isLoading ? "Connecting..." : "Call"}
      </button>
      {isLoading && <p>Connecting to the next available representative...</p>}
    </form>
  );
}

export default MeetingForm;
