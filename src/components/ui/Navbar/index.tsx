// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledNavbar, StyledContainer } from './Styled';
import { FlexProps } from '../Flex';

export interface NavbarProps extends FlexProps {
  className?: string;
  children?: any;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className, ...rest}: NavbarProps) => (
    <StyledContainer>
      <StyledNavbar data-testid='navigation-bar' {...rest} className={className || ''}>
        {children}
      </StyledNavbar>
    </StyledContainer>
);

export default Navbar;