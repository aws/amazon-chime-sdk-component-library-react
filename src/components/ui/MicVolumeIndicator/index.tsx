// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes, Ref, forwardRef } from 'react';

import Microphone from '../icons/Microphone';
import { StyledMicVolumeIndicator } from './Styled';
import { BaseProps } from '../Base';

export interface MicVolumeIndicatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /* Whether or not the attendee is muted */
  muted?: boolean | undefined;
  /* The measure of an attendee's network connection on a scale of 0 to 1. 
  A bad connection is .5 or below. */
  signalStrength: number | undefined;
}

export const MicVolumeIndicator = forwardRef(
  (
    { muted = false, signalStrength, ...rest }: MicVolumeIndicatorProps,
    bgRef: Ref<HTMLDivElement>
  ) => {
    const poorConnection =
      signalStrength !== undefined && signalStrength <= 0.5;

    return (
      <StyledMicVolumeIndicator
        {...rest}
        signalStrength={signalStrength}
        muted={muted}
        className="ch-mic-volume-indicator"
      >
        <Microphone
          muted={muted}
          className="ch-mic-icon"
          poorConnection={poorConnection}
        />
        <div className="ch-bg-volume-wrapper">
          <div
            ref={bgRef}
            className="ch-bg-volume-fill"
            data-testid="volume-fill"
          />
        </div>
      </StyledMicVolumeIndicator>
    );
  }
);

export default MicVolumeIndicator;
