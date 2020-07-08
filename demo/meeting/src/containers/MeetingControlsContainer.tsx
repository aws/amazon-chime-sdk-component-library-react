// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { ControlBar } from 'amazon-chime-sdk-component-library-react';

const StyledControlBar = styled(ControlBar)`
  grid-area: nav;
  position: static;
`;

import AudioInputControl from './AudioInputControl';
import VideoInputControl from './VideoInputControl';
import ContentShareControl from './ContentShareControl';
import AudioOutputControl from './AudioOutputControl';
import EndMeetingControl from './EndMeetingControl';

const MeetingControlsContainer: React.FC = () => {
  return (
    <StyledControlBar layout="undocked-horizontal" showLabels>
      <AudioInputControl />
      <VideoInputControl />
      <ContentShareControl />
      <AudioOutputControl />
      <EndMeetingControl />
    </StyledControlBar>
  );
};

export default MeetingControlsContainer;
