// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import {
  Flex,
  SecondaryButton,
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import MeetingForm from '../MeetingForm';
import SIPMeeting from '../SIPMeeting';
import useToggle from '../../hooks/useToggle';
import SIPMeetingProvider from '../../providers/SIPMeetingProvider';
import { StyledDiv, StyledWrapper } from './Styled';
import Spinner from '../../components/Spinner';
import { fetchMeeting } from '../../utils/api';
import routes from '../../constants/routes';
import { useAppState } from '../../providers/AppStateProvider';

const MeetingFormSelector: React.FC = () => {
  const meetingManager = useMeetingManager();
  const history = useHistory();
  const { isActive, toggle } = useToggle(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setAppMeetingInfo } = useAppState();

  const formToShow = isActive ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  const buttonText = isActive ? 'Join without SIP' : 'Join via SIP';

  const handleAppChecker = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const meetingId = `READINESS_CHECKER-${uuidv4()}`;
    const name = `READINESS_CHECKER${uuidv4()}`;
    const region = 'us-east-1';
    setIsLoading(true);

    try {
      const { JoinInfo } = await fetchMeeting(meetingId, name, region);
      await meetingManager.join({
        meetingInfo: JoinInfo.Meeting,
        attendeeInfo: JoinInfo.Attendee
      });
      setAppMeetingInfo(meetingId, name, region);

      history.push(routes.CHECKER);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <StyledWrapper>
      <StyledDiv>{formToShow}</StyledDiv>
      <Flex container layout="fill-space-centered" style={{ padding: '2rem' }}>
        <SecondaryButton label={buttonText} onClick={toggle} />
      </Flex>
      <Flex layout="fill-space-centered" style={{ paddingBottom: '1rem' }}>
        {isLoading ?
          <Spinner /> 
          :
          <a href="#" onClick={e => handleAppChecker(e)}>Check meeting readiness</a>
        }
      </Flex>
    </StyledWrapper>
  );
};

export default MeetingFormSelector;
