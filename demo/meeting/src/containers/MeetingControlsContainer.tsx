// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import {
  ControlBar,
  AudioInputControl,
  VideoInputControl,
  ContentShareControl,
  AudioOutputControl
} from 'amazon-chime-sdk-component-library-react';

import EndMeetingControl from './EndMeetingControl';

const StyledControlBar = styled(ControlBar)`
  grid-area: nav;
  position: static;
`;

const MeetingControlsContainer: React.FC = () => (
  <StyledControlBar layout="undocked-horizontal" showLabels>
    <AudioInputControl />
    <VideoInputControl />
    <ContentShareControl />
    <AudioOutputControl />
    <EndMeetingControl />
  </StyledControlBar>
);

export default MeetingControlsContainer;
