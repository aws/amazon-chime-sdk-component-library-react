// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { BaseProps, FocusableProps } from '../Base';
import { FlexProps } from '../Flex';
import { StyledNavbar } from './Styled';

export interface NavbarProps extends FlexProps, BaseProps, FocusableProps {
  /** Classname to apply custom CSS styles */
  className?: string;
  /** Any react components or HTML elements */
  children?: any;
  /** optionally render a responsive layout at mobile breakpoints  */
  responsive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className,
  responsive = true,
  ...rest
}: NavbarProps) => (
  <StyledNavbar
    data-testid="navigation-bar"
    {...rest}
    className={className || ''}
    responsive={responsive}
  >
    {children}
  </StyledNavbar>
);

export default Navbar;
