// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import { Direction } from '../../../../types';
import Svg, { SvgProps } from '../Svg';

const dirTransform = {
  up: '0',
  right: '90',
  down: '180',
  left: '270',
};

interface ArrowProps extends SvgProps {
  /** Defines the direction of the arrow. */
  direction?: Direction;
}

const StyledArrow = styled(Svg)<ArrowProps>`
  transform: ${({ direction }) =>
    `rotate(${dirTransform[direction || 'up']}deg)`};
`;

const Arrow: React.FC<React.PropsWithChildren<ArrowProps>> = ({
  direction = 'up',
  ...rest
}) => (
  <StyledArrow direction={direction} {...rest}>
    <path
      transform-origin="center"
      d="M16.85 10.53l-4.495-4.39c-.094-.09-.214-.132-.335-.136C12.013 6.003 12.007 6 12 6c-.006 0-.012.003-.02.004-.12.004-.24.047-.334.137L7.15 10.53c-.197.193-.201.51-.008.707.098.1.228.15.357.15.126 0 .252-.046.35-.141l3.646-3.56v9.812c0 .277.223.5.5.5.276 0 .5-.223.5-.5V7.677l3.655 3.57c.097.095.223.142.349.142.13 0 .26-.05.358-.151.193-.197.189-.514-.008-.707"
    />
  </StyledArrow>
);

Arrow.displayName = 'Arrow';

export default Arrow;
