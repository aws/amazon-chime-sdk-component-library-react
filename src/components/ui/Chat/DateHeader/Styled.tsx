// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseStyles, baseSpacing } from '../../Base';

export const StyledDateHeader = styled.div`
  border-radius: 13px;
  background-color: ${props => props.theme.chatDateHeader.bgd};
  color: ${props => props.theme.chatDateHeader.fontColor};
  font-size: ${props => props.theme.fontSizes.footnote.fontSize};
  width: fit-content;
  padding: 0.25rem;
  margin: 0 auto;

  ${baseStyles};
  ${baseSpacing};
`;

