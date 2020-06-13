import React, { useState, useEffect, useRef } from 'react';
import { formatDistance } from 'date-fns';

import CallList from './CallList';
import Card from '../components/Card';
import ApiGatewayClient from '../ApiGatewayClient';
import MeetingManager from '../meeting/MeetingManager';

const POLL_TIMEOUT = 10000; // 10 secondes

export interface CallUpdatesProps {
  onIsInMeetingChange: (isInMeeting: boolean) => void;
}

const CallUpdates: React.FC<CallUpdatesProps> = ({ onIsInMeetingChange }) => {
  const [callItems, setCallItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pollTimeout: any = useRef(0);

  const fetchCustomerCalls = async () => {
    const response = await ApiGatewayClient.retriveCustomers();
    setCallItems(response);
    pollTimeout.current = window.setTimeout(() => fetchCustomerCalls(), POLL_TIMEOUT);
  };

  const renderCalls = () => {
    return callItems.map(({ CustomerName, CreatedDate, CustomerId }) => (
      <Card
        key={CustomerId}
        title={CustomerName}
        time={`(Waiting time: ${formatDistance(new Date(CreatedDate), new Date(), { includeSeconds: true })})` }
      />
    ));
  };

  const handleCreateMeeting = async () => {
    setIsLoading(true);
    const firstCustomer = await ApiGatewayClient.getFirstCustomer();
    const meeting = firstCustomer && await ApiGatewayClient.createMeeting(firstCustomer.CustomerId);
    onIsInMeetingChange(true);
    console.log("Agent created meeting", meeting);
    await MeetingManager.initializeMeetingSession(meeting.meeting, meeting.agentAttendee);
  };

  useEffect(() => {
    // Poll to get customer calls every 10 sec
    fetchCustomerCalls();
    return () => window.clearTimeout(pollTimeout);
  }, []);

  const msg = (!callItems || !callItems.length) && "No incoming customer call"
  return (
    <div>
      <CallList
        title="Incoming customer calls"
        defaultMessage={msg}
      >
        {callItems && callItems.length > 0 && renderCalls()}
      </CallList>
      <br />
      <button onClick={handleCreateMeeting} disabled={!callItems || !callItems.length || isLoading}>
        {isLoading ? "Connecting" : "Join next customer call"}
      </button>
    </div>
  );
}

export default CallUpdates;
