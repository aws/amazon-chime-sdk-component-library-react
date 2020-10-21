// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledNavbar } from './Styled';
import { FlexProps } from '../Flex';
import { FocusableProps, BaseProps } from '../Base';

export interface NavbarProps extends FlexProps, BaseProps, FocusableProps {
  /** Classname to apply custom CSS styles */
  className?: string;
  /** Any react components or HTML elements */
  children?: any;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className,
  ...rest
}: NavbarProps) => (
  <StyledNavbar
    data-testid="navigation-bar"
    {...rest}
    className={className || ''}
  >
    {children}
  </StyledNavbar>
);

export default Navbar;
