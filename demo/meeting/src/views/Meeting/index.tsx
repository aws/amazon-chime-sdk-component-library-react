// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { VideoTileGrid, UserActivityProvider, UserActivityManager } from 'amazon-chime-sdk-component-library-react';

import { StyledLayout, StyledContent } from './Styled';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { useNavigation } from '../../providers/NavigationProvider';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingControlsContainer from '../../containers/MeetingControlsContainer';
import useMeetingEndRedirect from '../../hooks/useMeetingEndRedirect';

const MeetingView = () => {
  useMeetingEndRedirect();
  const { showNavbar, showRoster } = useNavigation();

  return (
    <UserActivityProvider>
      <StyledLayout showNav={showNavbar} showRoster={showRoster}>
        <StyledContent>
          <VideoTileGrid noRemoteVideoView={<MeetingDetails />} />
          <UserActivityManager>
            <MeetingControlsContainer />
          </UserActivityManager>
        </StyledContent>
        <NavigationControl />
      </StyledLayout>
    </UserActivityProvider>
  );
};

export default MeetingView;
