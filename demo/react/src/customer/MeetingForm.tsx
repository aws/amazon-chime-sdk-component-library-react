import React, { FC, useState, FormEvent } from 'react';

import Input from '../components/Input';
import ApiGatewayClient from '../ApiGatewayClient';

const POLL_TIMEOUT = 10000; // 10 seconds

const MeetingForm: FC = () => {
  const [inputName, setInputName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinMeeting = async(e: FormEvent) => {
    e.preventDefault();
    const response = await ApiGatewayClient.createCustomer(inputName);
    const attendeeId = await response.CustomerId;
    setIsLoading(true);

    fetchInitiatedMeeting(attendeeId);
  };

  const fetchInitiatedMeeting = async (attendeeId: string) => {
    const meetingResponse = await ApiGatewayClient.getCustomerMeeting(attendeeId);
   
    if (meetingResponse.data) {
      console.log("Connected meeting", meetingResponse.data);
      console.log("TODO: Need to initiate meeting session, set video/audio");
    } else {
      // Poll to check if meeting is created every 10 sec
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
      <button onClick={handleJoinMeeting}>{isLoading ? "Connecting..." : "Call"}</button>
    </form>
  );
}

export default MeetingForm;