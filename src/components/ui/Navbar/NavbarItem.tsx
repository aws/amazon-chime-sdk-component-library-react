// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledNavbarItem } from './Styled';
import { PopOverItemProps } from '../PopOver/PopOverItem';
import ControlBarButton from '../ControlBar/ControlBarItem';
import { FocusableProps, BaseProps } from '../Base';

export interface NavbarItemProps extends FocusableProps, BaseProps {
  /** Any icon from the library for button in navbar item */
  icon: JSX.Element;
  /** The callback fired when the icon is clicked */
  onClick: () => void;
  /** Label for navbar item */
  label: string;
  /** PopOver menu if needed in navbar item */
  popOver?: PopOverItemProps[] | null;
  /**  Apply this prop to receive visual feedback that the button is 'active' */
  isSelected?: boolean;
}

export const NavbarItem = ({
  onClick,
  label,
  icon,
  isSelected = false,
  popOver = null,
  ...rest
}: NavbarItemProps) => (
  <StyledNavbarItem data-testid="navbar-item" {...rest}>
    <ControlBarButton
      onClick={onClick}
      label={label}
      icon={icon}
      popOver={popOver}
      isSelected={isSelected}
    />
    {label && (
      <span
        data-testid="navbar-label"
        className="ch-navigation-bar-item-label"
        onClick={onClick}
      >
        {label}
      </span>
    )}
  </StyledNavbarItem>
);

export default NavbarItem;
