// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../../Base';
import { RosterCellProps } from '.';

export const StyledCell = styled.div<RosterCellProps>`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;

  .ch-mic {
    flex-shrink: 0;
    width: 1.5rem;
    line-height: 0;

    ${({ micPosition }) =>
      micPosition === 'leading'
        ? `
        order: -1;
        margin-right: .75rem;
      `
        : ''}
  }

  .ch-menu {
    color: ${(props) => props.theme.buttons.icon.hover.bgd};

    &:hover,
    &:focus {
      color: ${(props) => props.theme.buttons.icon.hover.text};
    }
  }

  svg {
    width: 1.5rem;
    flex-shrink: 0;
  }

  > * {
    margin-right: 0.5rem;
  }

  > :last-child {
    margin-right: 0;
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledLateMessage = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.roster.secondaryText};

  > svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.roster.secondaryText};
  }
`;
