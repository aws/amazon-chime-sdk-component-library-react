// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  Heading,
  DeviceSelection,
} from 'amazon-chime-sdk-component-library-react';

import JoinMeetingDetails from '../../containers/MeetingJoinDetails';

import { StyledLayout } from './Styled';

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
