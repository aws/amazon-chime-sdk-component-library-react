// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { BadgeProps } from './';
import { baseStyles, baseSpacing } from '../Base';

export const StyledBadge = styled.span<Partial<BadgeProps>>`
  ${props => {
    if ((typeof props.value) === 'object') {
      const element: JSX.Element = (props.value) as JSX.Element;
      const width: string = (element.props && element.props.width) || '1rem';
      return `width: ${width};`
    }
    return null;
  }}
  display: inline-block;
  padding: ${props => 
    (typeof props.value) === 'object'
      ? '0'
      : '0.1rem 0.4rem 0.125rem'};
  border-radius: 0.5rem;
  line-height: ${props =>
    (typeof props.value) === 'object'
      ? '1'
      : '1.43'};
  color: ${props => props.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${props =>
    props.status === 'alert'
      ? props.theme.colors.error.primary
      : props.theme.colors.greys.grey60};

  ${baseSpacing};
  ${baseStyles}
`;
