// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, ReactNode } from 'react';

import { BaseProps } from '../Base';
import { StyledHeading } from './Styled';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends BaseProps {
  /** The children element(s) within a heading. */
  children: ReactNode | ReactNode[];
  /** The level of heading from 1 to 6. 1 defines the most important heading, 6 defines the least important heading. */
  level: HeadingLevel;
}

export const Heading = forwardRef(
  (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
    const { tag, children, className, level, ...rest } = props;

    return (
      <StyledHeading
        as={tag || `h${level}`}
        className={className || ''}
        level={level}
        ref={ref}
        data-testid="heading"
        {...rest}
      >
        {children}
      </StyledHeading>
    );
  }
);

export default Heading;
