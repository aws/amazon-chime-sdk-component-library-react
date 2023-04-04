// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Clock } from '../../icons';
import { StyledLateMessage } from './Styled';

const LateMessage: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <StyledLateMessage>
    <Clock />
    {children}
  </StyledLateMessage>
);

export default LateMessage;
