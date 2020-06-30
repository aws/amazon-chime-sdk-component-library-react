import React from 'react';

import MeetingStatusProvider from '../providers/MeetingStatusProvider';
import ContentShareProvider from '../providers/ContentShareProvider';
import { LocalVideoToggleProvider } from '../providers/LocalVideoToggleProvider';
import ContentShare from './ContentShare';
import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingRoster from './MeetingRoster';
import RemoteVideoGrid from './RemoteVideoGrid';
import { LocalAudioOutputProvider } from '../providers/LocalAudioOutputProvider';
import { ContentShareControlProvider } from '../providers/ContentShareControlProvider';

const MeetingView = () => (
  <MeetingStatusProvider>
    <LocalAudioOutputProvider>
      <LocalVideoToggleProvider>
        <ContentShareProvider>
          <ContentShareControlProvider>
            <MeetingControlsContainer />
            <ContentShare />
          </ContentShareControlProvider>
          <MeetingRoster />
          <RemoteVideoGrid />
        </ContentShareProvider>
      </LocalVideoToggleProvider>
    </LocalAudioOutputProvider>
  </MeetingStatusProvider>
);

export default MeetingView;
