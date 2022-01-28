// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import { MicVolumeIndicatorProps } from '.';

export const StyledMicVolumeIndicator = styled.div<MicVolumeIndicatorProps>`
  position: relative;
  height: inherit;
  line-height: 0;

  .ch-mic-icon {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .ch-bg-volume-wrapper {
    position: absolute;
    bottom: 41%;
    left: 40%;
    height: 38%;
    width: 21%;
    border-radius: 20%;
    overflow: hidden;
  }

  .ch-bg-volume-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    will-change: transform;
    background-color: ${(props) =>
      props.signalStrength && props.signalStrength <= 0.5
        ? props.theme.colors.error.light
        : props.theme.colors.primary.light};
  }

  ${baseSpacing}
  ${baseStyles}
`;

export default StyledMicVolumeIndicator;
