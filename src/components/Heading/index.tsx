import React, { forwardRef, ReactNode } from 'react';
import { StyledHeading } from './Styled';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps  {
  tag?: any;
  children: ReactNode | ReactNode[];
  className?: string;
  css?: string;
  level: HeadingLevel;
}

export const Heading = forwardRef((props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { tag, children, className, css, level, } = props;

  return (
    <StyledHeading
      as={tag || level}
      className={className || ''}
      css={css}
      level={level}
      ref={ref}
      data-testid='heading'
    >
      {children}
    </StyledHeading>
  );
});

export default Heading;
