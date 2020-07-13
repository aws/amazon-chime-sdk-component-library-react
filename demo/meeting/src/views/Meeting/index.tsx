// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { VideoTileGrid } from 'amazon-chime-sdk-component-library-react';

import MeetingControlsContainer from '../../containers/MeetingControlsContainer';
import MeetingRoster from '../../containers/MeetingRoster';

import { StyledLayout } from './Styled';

const MeetingView = () => (
  <StyledLayout>
    <VideoTileGrid />
    <MeetingRoster />
    <MeetingControlsContainer />
  </StyledLayout>
);

export default MeetingView;
