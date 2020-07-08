// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledRoster } from './Styled';
import { BaseProps } from '../Base';

export const Roster: React.FC<BaseProps> = ({ children, ...rest }) => {
  return <StyledRoster {...rest}>{children}</StyledRoster>;
};

export default Roster;
