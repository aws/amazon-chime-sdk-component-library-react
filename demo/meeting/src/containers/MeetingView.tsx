import React from 'react';

import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingStatusProvider from '../meeting/MeetingStatusContext';

const MeetingView = () => {

  return (
    <MeetingStatusProvider>
      <MeetingControlsContainer />
    </MeetingStatusProvider>
  );
};

export default MeetingView;
