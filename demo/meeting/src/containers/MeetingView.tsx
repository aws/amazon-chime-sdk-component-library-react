import React from 'react';

import MeetingStatusProvider from '../providers/MeetingStatusProvider';
import ContentShareProvider from '../providers/ContentShareProvider';
import RosterProvider from '../providers/RosterProvider';
import ContentShare from './ContentShare';
import MeetingControlsContainer from './MeetingControlsContainer';
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
