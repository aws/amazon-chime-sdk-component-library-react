// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { MicVolumeIndicatorProps } from '.';
import { baseStyles } from '../Base';

export const StyledMicVolumeIndicator = styled.div<MicVolumeIndicatorProps>`
  position: relative;
  height: inherit;
  ${baseStyles}

  .mic-icon {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 0;
  }

  .volume-fill-container {
    position: relative;
    top: 19%;
    left: 41.5%;
    height: 41%;
    width: 20%;
    border-radius: 5px;
    overflow: hidden;

    .volume-fill {
      background-color: ${props => props.signalStrength && props.signalStrength <= .5 ? props.theme.colors.error.light : props.theme.colors.primary.light};
      position: absolute;
      width: 100%;
      height: 100%;
      top: 100%;
      left: 0;
      will-change: transform;
      transform: ${props => props.volume !== undefined ? `translateY(-${props.volume * 100}%)` : ''};
    }
  }
`;

export default StyledMicVolumeIndicator;

