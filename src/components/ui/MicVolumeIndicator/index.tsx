// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes, Ref, forwardRef } from 'react';

import Microphone from '../icons/Microphone';
import { StyledMicVolumeIndicator } from './Styled';
import { BaseProps } from '../Base';

export interface MicVolumeIndicatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /* `muted` indicates whether an individual is muted in a meeting. */
  muted?: boolean | undefined;
  /* `signalStrength` is a measure of an attendee's network connection on a scale of 0 to 1. 
  A bad connection is .5 or below. */
  signalStrength: number | undefined;
}

export const MicVolumeIndicator = forwardRef(
  (props: MicVolumeIndicatorProps, bgRef: Ref<HTMLDivElement>) => {
    const { muted = false, signalStrength } = props;
    const poorConnection =
      signalStrength !== undefined && signalStrength <= 0.5;

    return (
      <StyledMicVolumeIndicator {...props} className="mic-volume-indicator">
        <Microphone
          muted={muted}
          className="mic-icon"
          poorConnection={poorConnection}
        />
        <div ref={bgRef} className="bg-volume-fill" data-testid="volume-fill" />
      </StyledMicVolumeIndicator>
    );
  }
);

export default MicVolumeIndicator;
