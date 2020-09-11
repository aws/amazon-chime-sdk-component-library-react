// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { BadgeProps } from './';
import { baseStyles, baseSpacing } from '../Base';

export const StyledBadge = styled.span<Partial<BadgeProps>>`
  display: inline-block;
  padding: 0.1rem 0.4rem 0.125rem;
  border-radius: 0.5rem;
  line-height: 1.43;
  color: ${(props) => props.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${(props) => {
    switch (props.status) {
      case 'alert':
        return props.theme.colors.error.primary;
      case 'default':
        return props.theme.colors.greys.grey60;
      case 'success':
        return props.theme.colors.success.primary;
      default:
        return props.theme.colors.warning.primary;
    }
  }};

  ${baseSpacing};
  ${baseStyles}
`;
