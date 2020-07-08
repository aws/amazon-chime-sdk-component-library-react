// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import MeetingStatusProvider from '../../providers/MeetingStatusProvider';
import ContentShareProvider from '../../providers/ContentShareProvider';
import { LocalVideoToggleProvider } from '../../providers/LocalVideoToggleProvider';
import MeetingControlsContainer from '../../containers/MeetingControlsContainer';
import MeetingRoster from '../../containers/MeetingRoster';
import { LocalAudioOutputProvider } from '../../providers/LocalAudioOutputProvider';
import { ContentShareControlProvider } from '../../providers/ContentShareControlProvider';
import VideoLayout from '../../components/VideoLayout';

import { StyledLayout } from './Styled';

const MeetingView = () => (
  <MeetingStatusProvider>
    <LocalAudioOutputProvider>
      <LocalVideoToggleProvider>
        <ContentShareProvider>
          <ContentShareControlProvider>
            <StyledLayout>
              <VideoLayout />
              <MeetingRoster />
              <MeetingControlsContainer />
            </StyledLayout>
          </ContentShareControlProvider>
        </ContentShareProvider>
      </LocalVideoToggleProvider>
    </LocalAudioOutputProvider>
  </MeetingStatusProvider>
);

export default MeetingView;
