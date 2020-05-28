import React from 'react';

import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingStatusProvider from '../meeting/MeetingStatusContext';
import ContentShareProvider from '../meeting/ContentShareProvider';
import ContentShare from '../components/ContentShare';

const MeetingView = () => {

  return (
    <MeetingStatusProvider>
      <ContentShareProvider>
        <MeetingControlsContainer />
        <ContentShare/>
      </ContentShareProvider>
    </MeetingStatusProvider>
  );
};

export default MeetingView;
