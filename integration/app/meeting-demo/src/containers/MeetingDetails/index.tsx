// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';

import {
  Flex,
  Heading,
  PrimaryButton,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';

import { useAppState } from '../../providers/AppStateProvider';
import { StyledList } from './Styled';

const MeetingDetails = () => {
  const { meetingId, toggleTheme, theme } = useAppState();
  const manager = useMeetingManager();

  return (
    <Flex container layout="fill-space-centered">
      <Flex mb="2rem" mr={{ md: '2rem' }} px="1rem">
        <Heading level={4} tag="h1" mb={2}>
          Meeting information
        </Heading>
        <StyledList>
          <div>
            <dt>Meeting ID</dt>
            <dd>{meetingId}</dd>
          </div>
          <div>
            <dt>Hosted region</dt>
            <dd>{manager.meetingRegion}</dd>
          </div>
        </StyledList>
        <PrimaryButton
          mt={4}
          label={theme === 'light' ? 'Dark mode' : 'Light mode'}
          onClick={toggleTheme}
        ></PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default MeetingDetails;
