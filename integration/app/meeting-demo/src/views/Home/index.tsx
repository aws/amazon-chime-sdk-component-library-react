// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';

import MeetingFormSelector from '../../containers/MeetingFormSelector';
import { StyledLayout } from './Styled';
import { VersionLabel } from '../../utils/VersionLabel';

const Home = () => (
  <StyledLayout>
    <MeetingFormSelector />
    <VersionLabel />
  </StyledLayout>
);

export default Home;
