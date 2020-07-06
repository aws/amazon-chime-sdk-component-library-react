// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { ControlBar } from 'amazon-chime-sdk-component-library-react';

import { useMeetingManager } from '../../../../src';
import AudioInputControl from './AudioInputControl';
import VideoInputControl from './VideoInputControl';
import ContentShareControl from './ContentShareControl';
import AudioOutputControl from './AudioOutputControl';
import EndMeetingControl from './EndMeetingControl';

const MeetingControlsContainer: React.FC = () => {
  const meetingManager = useMeetingManager();
  const meetingId = meetingManager?.meetingId;
  const region = meetingManager?.region;

  return (
    <div className="MeetingControlContainer" style={{ display: 'flex' }}>
      <p>{`${meetingId} (${region})`}</p>
      <ControlBar layout="top" showLabels>
        <AudioInputControl />
        <VideoInputControl />
        <ContentShareControl />
        <AudioOutputControl />
        <EndMeetingControl />
      </ControlBar>
    </div>
  );
};

export default MeetingControlsContainer;
