// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { GridProps as SSGridProps } from 'styled-system';

import { BaseProps } from '../Base';
import { StyledGrid } from './Styled';

export interface GridProps extends BaseProps, SSGridProps {
  /** Whether or not the grid is responsive to different window sizes. */
  responsive?: boolean;
}

export const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  className,
  tag,
  children,
  ...rest
}) => {
  return (
    <StyledGrid as={tag} className={className || ''} {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
