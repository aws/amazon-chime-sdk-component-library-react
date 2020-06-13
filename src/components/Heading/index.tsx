import React, { forwardRef, ReactNode } from 'react';
import { StyledHeading } from './Styled';

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps  {
  as?: any;
  children: ReactNode | ReactNode[];
  className?: string;
  css?: string;
  level: HeadingLevel;
}

export const Heading = forwardRef((props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { as, children, className, css, level, } = props;

  return (
    <StyledHeading
      as={as || level}
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
