// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  Flex,
  SecondaryButton
} from 'amazon-chime-sdk-component-library-react';

import MeetingForm from '../MeetingForm';
import SIPMeeting from '../SIPMeeting';
import useToggle from '../../hooks/useToggle';
import SIPMeetingProvider from '../../providers/SIPMeetingProvider';
import { StyledDiv, StyledWrapper } from './Styled';

const MeetingFormSelector: React.FC = () => {
  const { isActive, toggle } = useToggle(false);
  const formToShow = isActive ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  const buttonText = isActive ? 'Join without SIP' : 'Join via SIP';

  return (
    <StyledWrapper>
      <StyledDiv>{formToShow}</StyledDiv>
      <Flex container layout="fill-space-centered" style={{ padding: '2rem' }}>
        <SecondaryButton label={buttonText} onClick={toggle} />
      </Flex>
    </StyledWrapper>
  );
};

export default MeetingFormSelector;
