import React from 'react';

import MeetingStatusProvider from '../providers/MeetingStatusProvider';
import ContentShareProvider from '../providers/ContentShareProvider';
import { LocalVideoToggleProvider } from '../providers/LocalVideoToggleProvider';
import ContentShare from './ContentShare';
import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingRoster from './MeetingRoster';
import RemoteVideoGrid from './RemoteVideoGrid';

const MeetingView = () => (
  <MeetingStatusProvider>
    <LocalVideoToggleProvider>
      <ContentShareProvider>
        <MeetingControlsContainer />
        <ContentShare />
        <MeetingRoster />
        <RemoteVideoGrid />
      </ContentShareProvider>
    </LocalVideoToggleProvider>
  </MeetingStatusProvider>
);

export default MeetingView;
