// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import {
  ControlBar,
  AudioInputControl,
  VideoInputControl,
  ContentShareControl,
  AudioOutputControl,
  ControlBarButton,
  Dots,
} from 'amazon-chime-sdk-component-library-react';

import EndMeetingControl from './EndMeetingControl';
import { useNavigation } from '../providers/NavigationProvider';

const StyledControlBar = styled(ControlBar)`
  grid-area: meetingcontrols;
  position: static;
`;

const MeetingControlsContainer = () => {
  const { toggleNavbar } = useNavigation();
  return (
    <StyledControlBar layout="undocked-horizontal" showLabels>
      <ControlBarButton
        icon={<Dots />}
        onClick={toggleNavbar}
        label="Navigation"
      />
      <AudioInputControl />
      <VideoInputControl />
      <ContentShareControl />
      <AudioOutputControl />
      <EndMeetingControl />
    </StyledControlBar>
  );
};

export default MeetingControlsContainer;
