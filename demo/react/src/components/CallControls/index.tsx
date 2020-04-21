import React from 'react';
import Microphone from '../icons/Microphone';
import Camera from '../icons/Camera';
import Phone from '../icons/Phone';
import { StyledCallControls } from './Styled';

export interface CallControlsProps {
  handleMuteToggle: () => void,
  handleCameraToggle: () => void,
  handleEndMeeting: () => void,
  isMuted: boolean,
  isCameraActive: boolean,
}
const CallControls: React.FC<CallControlsProps> = ({handleCameraToggle, handleEndMeeting, handleMuteToggle, isCameraActive, isMuted}) => {
return (
    // TODO: Replace components with Library components
    <StyledCallControls className="call-controls">
      <button onClick={handleMuteToggle}><Microphone  disabled={isMuted}/></button>
      <button onClick={handleCameraToggle}><Camera disabled={isCameraActive}/></button>
      <button onClick={handleEndMeeting}><Phone /></button>
    </StyledCallControls>
  );
}

export default CallControls;
