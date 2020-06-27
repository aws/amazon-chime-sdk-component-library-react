import React from 'react';

import MeetingStatusProvider from '../providers/MeetingStatusProvider';
import ContentShareProvider from '../providers/ContentShareProvider';
import { LocalVideoToggleProvider } from '../providers/LocalVideoToggleProvider';
import ContentShare from './ContentShare';
import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingRoster from './MeetingRoster';
import RemoteVideoGrid from './RemoteVideoGrid';
import { LocalAudioOutputProvider } from '../providers/LocalAudioOutputProvider';

const MeetingView = () => (
  <MeetingStatusProvider>
    <LocalAudioOutputProvider>
      <LocalVideoToggleProvider>
        <ContentShareProvider>
          <MeetingControlsContainer />
          <ContentShare />
          <MeetingRoster />
          <RemoteVideoGrid />
        </ContentShareProvider>
      </LocalVideoToggleProvider>
    </LocalAudioOutputProvider>
  </MeetingStatusProvider>
);

export default MeetingView;
