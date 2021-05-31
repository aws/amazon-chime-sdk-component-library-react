// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';

import JoinMeetingDetails from '../../containers/MeetingJoinDetails';
import { StyledLayout } from './Styled';
import DeviceSelection from '../../components/DeviceSelection';

const DeviceSetup: React.FC = () => (
  <StyledLayout>
    <Heading tag="h1" level={3} css="align-self: flex-start">
      Device settings
    </Heading>
    <DeviceSelection />
    <JoinMeetingDetails />
  </StyledLayout>
);

export default DeviceSetup;
