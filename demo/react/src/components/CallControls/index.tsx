import React, { useState } from 'react';
import Microphone from '../icons/Microphone';
import Camera from '../icons/Camera';
import Phone from '../icons/Phone';
import { StyledCallControls } from './Styled';


const CallControls: React.FC = () => {
    const [muted, setMuted] = useState(false);
    const [cameraActive, setCameraActive] = useState(true);

    // TODO: Replace implementation
    const endMeeting = () => {
        console.log("End the meeting here");
    };

    const toggleMuted = () => {
        console.log(`Set Muted to ${!muted}`);
        setMuted(!muted);
    };

    const toggleCamera = () => {
        console.log(`Set camera active to ${!cameraActive}`);
        setCameraActive(!cameraActive);
    };

  return (
    // TODO: Replace components with Library components
    <StyledCallControls className="call-controls">
        <button onClick={toggleMuted}><Microphone  disabled={muted}/></button>
        <button onClick={toggleCamera}><Camera disabled={cameraActive}/></button>
        <button onClick={endMeeting}><Phone /></button>
    </StyledCallControls>

  );
}

export default CallControls;
