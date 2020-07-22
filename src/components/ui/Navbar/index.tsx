// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledNavbar } from './Styled';
import { FlexProps } from '../Flex';

export interface NavbarProps extends FlexProps {
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
