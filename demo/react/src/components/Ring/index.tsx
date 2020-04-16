import React from 'react';
import { StyledRingOverlay, StyledAccept, StyledDecline, StyledClose } from './Styled';

export interface RingProps {
    callerName: string,
}

const Ring: React.FC<RingProps> = (props: RingProps) => {
    const handleAccept = () => {
        console.log("Need to handle accept");
    };

    const handleDecline = () => {
        console.log("Need to handle decline");
    };

    const handleClose = () => {
        console.log("Need to handle close");
    };

  return (
      // TODO: Replace components with Library components
    <StyledRingOverlay {...props}>
      <StyledClose onClick={handleClose} > Close </StyledClose>
      <h2>{`Call from: ${props.callerName}`}</h2>
      <div>
        <StyledAccept onClick={handleAccept} > Accept </StyledAccept>
        <StyledDecline onClick={handleDecline} > Decline </StyledDecline>
      </div>
    </StyledRingOverlay>
  );
}

export default Ring;
