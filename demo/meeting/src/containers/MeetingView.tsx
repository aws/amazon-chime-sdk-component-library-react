import React from 'react';

import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingStatusProvider from '../meeting/MeetingStatusContext';
import ContentShareProvider from '../meeting/ContentShareProvider';
import ContentShare from '../components/ContentShare';
import RosterProvider from '../providers/RosterProvider';
import MeetingRoster from './MeetingRoster';
import RemoteVideoGrid from './RemoteVideoGrid';

const MeetingView = () => {
  return (
    <MeetingStatusProvider>
      <RosterProvider>
        <ContentShareProvider>
          <MeetingControlsContainer />
          <ContentShare />
          <MeetingRoster />
          <RemoteVideoGrid />
        </ContentShareProvider>
      </RosterProvider>
    </MeetingStatusProvider>
  );
};

export default MeetingView;
