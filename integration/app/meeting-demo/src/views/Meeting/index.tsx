// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  VideoTileGrid,
  UserActivityProvider,
} from 'amazon-chime-sdk-component-library-react';

import { StyledLayout, StyledContent } from './Styled';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { useNavigation } from '../../providers/NavigationProvider';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingControls from '../../containers/MeetingControls';
import useMeetingEndRedirect from '../../hooks/useMeetingEndRedirect';
import DynamicMeetingControls from '../../containers/DynamicMeetingControls';
import { MeetingMode, Layout } from '../../types';
import { VideoTileGridProvider } from '../../providers/VideoTileGridProvider';
import { useAppState } from '../../providers/AppStateProvider';

const MeetingView = (props: { mode: MeetingMode }) => {
  useMeetingEndRedirect();
  const { showNavbar, showRoster } = useNavigation();
  const { mode } = props;
  const { layout } = useAppState();

  return (
    <UserActivityProvider>
      <VideoTileGridProvider>
        <StyledLayout showNav={showNavbar} showRoster={showRoster}>
          <StyledContent>
            <VideoTileGrid
              layout={
                layout === Layout.Gallery
                  ? 'standard'
                  : 'featured'
              }
              className="videos"
              noRemoteVideoView={<MeetingDetails />}
            />
            {mode === MeetingMode.Spectator ? (
              <DynamicMeetingControls />
            ) : (
              <MeetingControls />
            )}
          </StyledContent>
          <NavigationControl />
        </StyledLayout>
      </VideoTileGridProvider>
    </UserActivityProvider>
  );
};

export default MeetingView;
