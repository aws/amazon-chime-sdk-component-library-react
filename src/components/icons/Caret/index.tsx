import React, { FC } from 'react';
import styled from 'styled-components';

import Svg, { SvgProps } from '../Svg';

type Direction = 'up' | 'right' | 'down' | 'left';
const dirTransform = {
  up: '0',
  right: '90',
  down: '180',
  left: '270',
};

interface CaretProps extends SvgProps {
  direction?: Direction;
  className?: string;
}

const Cog: React.FC<CaretProps> = ({ direction = 'up', ...props }) => {

  const dir: string = `rotate(${dirTransform[direction]}deg)`;

  const StyledCaret = styled.svg<CaretProps>`
    transform: ${dir};
  `;

  return (
    <StyledCaret {...props}>
      <path
        transform-origin="center"
        d="M8.824 13.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722z"
      />
    </StyledCaret>
  );
};

export default Cog;
