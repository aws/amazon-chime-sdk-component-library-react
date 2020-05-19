import React from 'react';

import MeetingControlsContainer from './MeetingControlsContainer';
import MeetingStatusProvider from '../meeting/MeetingStatusContext';

const MeetingView = () => {

  return (
    <MeetingStatusProvider>
    {/* <MeetingStatusProvider joinMuted={false} joinWithVideo={false}> */}
      <MeetingControlsContainer />
    </MeetingStatusProvider>
  );
};

export default MeetingView;
