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

interface CaretProps extends SvgProps {
  /** Defines the direction of the caret. */
  direction?: Direction;
  className?: string;
}

const StyledCaret = styled(Svg)<CaretProps>`
  transform: ${({ direction }) =>
    `rotate(${dirTransform[direction || 'up']}deg)`};
`;

const Caret: React.FC<React.PropsWithChildren<CaretProps>> = ({
  direction = 'up',
  ...rest
}) => {
  return (
    <StyledCaret direction={direction} {...rest}>
      <path
        transform-origin="center"
        d="M8.824 13.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722z"
      />
    </StyledCaret>
  );
};

Caret.displayName = 'Caret';

export default Caret;
