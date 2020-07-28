// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { VideoTileGrid } from 'amazon-chime-sdk-component-library-react';

import { StyledLayout, StyledContent } from './Styled';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { useNavigation } from '../../providers/NavigationProvider';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingControlsContainer from '../../containers/MeetingControlsContainer';

const MeetingView = () => {
  const { showNavbar, showRoster } = useNavigation();

  return (
    <StyledLayout showNav={showNavbar} showRoster={showRoster}>
      <StyledContent>
        <VideoTileGrid noRemoteVideoView={<MeetingDetails />} />
        <MeetingControlsContainer />
      </StyledContent>
      <NavigationControl />
    </StyledLayout>
  );
};

export default MeetingView;
