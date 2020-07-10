// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, useRef, HTMLAttributes } from 'react';

import Microphone from '../icons/Microphone';
import { StyledMicVolumeIndicator } from './Styled';
import { BaseProps } from '../Base';

export interface MicVolumeIndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
  /* `volume` is a number from 0 to 1 that indicates the volume
  of a  speaker's microphone in a meeting. */
  volume: number | undefined;
  /* `muted` indicates whether an individual is muted in a meeting. */
  muted?: boolean | undefined;
  /* `signalStrength` is a measure of an attendee's network connection on a scale of 0 to 1. 
  A bad connection is .5 or below. */
  signalStrength: number | undefined;
}

const MicVolumeIndicator:FC<MicVolumeIndicatorProps> = (props) => {
  const { volume, muted = false, signalStrength } = props;
  const poorConnection = signalStrength !== undefined && signalStrength <= .5;
  const volumeFillRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledMicVolumeIndicator {...props} className='mic-volume-indicator'>
      <Microphone muted={muted} poorConnection={poorConnection} className='mic-icon'/>
      <div className='volume-fill-container'>
        <div ref={volumeFillRef} className='volume-fill' data-testid='volume-fill'/>
      </div>
    </StyledMicVolumeIndicator>
  );
};

export default MicVolumeIndicator;