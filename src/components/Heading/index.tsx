import React, { forwardRef, ReactNode } from 'react';

import { BaseProps } from '../Base';
import { StyledHeading } from './Styled';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends BaseProps {
  children: ReactNode | ReactNode[];
  level: HeadingLevel;
}

export const Heading = forwardRef((props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { tag, children, className, level, ...rest} = props;

  return (
    <StyledHeading
      as={tag || `h${level}`}
      className={className || ''}
      level={level}
      ref={ref}
      data-testid='heading'
      {...rest}
    >
      {children}
    </StyledHeading>
  );
});

export default Heading;
