// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { BaseProps, FocusableProps } from '../Base';
import IconButton from '../Button/IconButton';
import { Remove } from '../icons';
import { StyledHeader } from './Styled';

export interface NavbarHeaderProps extends BaseProps, FocusableProps {
  /** The title of the navigation bar menu */
  title: string;
  /** The callback fired when the navigation bar is closed */
  onClose?: () => void;
}

export const NavbarHeader: React.FC<React.PropsWithChildren<NavbarHeaderProps>> = (
  props: NavbarHeaderProps
) => (
  <StyledHeader {...props}>
    <span className="ch-title">{props.title}</span>
    {props.onClose && (
      <IconButton
        className="ch-btn-close"
        label="Close"
        onClick={props.onClose}
        icon={<Remove />}
      />
    )}
  </StyledHeader>
);

export default NavbarHeader;
