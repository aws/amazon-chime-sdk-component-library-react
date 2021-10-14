// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { grid } from 'styled-system';

import { baseSpacing, baseStyles } from '../Base';
import { GridProps } from './';
import { CellProps } from './Cell';

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  width: 100%;
  height: 100%;

  ${grid}
  ${baseSpacing}
  ${baseStyles}

  ${({ responsive, theme }) =>
    responsive
      ? `
    ${theme.mediaQueries.max.md} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.max.sm} {
      grid-template-columns: 1fr;
    }
  `
      : ''}

  ${(props) => props.css || ''}
`;

export const StyledCell = styled.div<CellProps>`
  ${baseSpacing}
  ${grid}

  ${(props) => props.css || ''}
`;
