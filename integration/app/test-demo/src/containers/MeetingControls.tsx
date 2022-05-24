import React from 'react';
import {
  ControlBar,
  AudioInputControl,
  VideoInputControl,
  AudioOutputControl,
  ContentShareControl,
} from 'amazon-chime-sdk-component-library-react';
import MeetingLeaveControl from '../components/MeetingLeaveControl';

const MeetingControls: React.FC = () => (
  <ControlBar
    layout='undocked-horizontal'
    showLabels
  >
    <AudioInputControl />
    <VideoInputControl />
    <AudioOutputControl />
    <ContentShareControl />
    <MeetingLeaveControl />
  </ControlBar>
)
export default MeetingControls;
