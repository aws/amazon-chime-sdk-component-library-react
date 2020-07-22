// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StyledNavbarItem } from './Styled';
import { PopOverItemProps } from '../PopOver/PopOverItem';
import ControlBarButton from '../ControlBar/ControlBarItem';

export interface NavbarItemProps {
  /** Any icon from the library for button in navbar item */
  icon: JSX.Element;
  /** Callback fired when icon is clicked */
  onClick: () => void;
  /** Label for navbar item */
  label: string;
  /** PopOver menu if needed in navbar item */
  popOver?: PopOverItemProps[] | null;
}

export const NavbarItem = ({ onClick, label, icon, popOver = null }: NavbarItemProps) => (
  <StyledNavbarItem data-testid='navbar-item'>
    <ControlBarButton onClick={onClick} label={label} icon={icon} popOver={popOver} />
    {label && <span data-testid='navbar-label' className='navigationBarItem__label' onClick={onClick}>{label}</span>}
  </StyledNavbarItem>
);

export default NavbarItem;