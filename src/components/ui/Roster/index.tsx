// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { BaseProps, FocusableProps } from '../Base';
import { StyledRoster } from './Styled';

export interface RosterProps extends BaseProps, FocusableProps {}

export const Roster: React.FC<React.PropsWithChildren<RosterProps>> = ({ children, ...rest }) => {
  return <StyledRoster {...rest}>{children}</StyledRoster>;
};

export default Roster;
