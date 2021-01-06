// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { SpaceProps, GridProps } from 'styled-system';

import { StyledCell } from './Styled';

export interface CellProps extends SpaceProps, GridProps {
  tag?: string;
  css?: string;
  className?: string;
}

export const Cell: React.FC<CellProps> = ({ className, children, ...rest }) => (
  <StyledCell className={className || ''} {...rest}>
    {children}
  </StyledCell>
);

export default Cell;
