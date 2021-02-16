// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ReactNode } from 'react';

import { StyledNavbarItem } from './Styled';
import PopOver, { Placement } from '../PopOver';
import IconButton, { IconButtonProps } from '../Button/IconButton';
import { Tooltipable, WithTooltip } from '../WithTooltip';

const IconButtonWithToolTip = WithTooltip(IconButton);

export interface NavbarItemProps extends IconButtonProps, Tooltipable {
  /* As part of IconButtonProps, any icon from the library for button in navbar item */
  icon: any;
  /* As part of IconButtonProps, The callback fired when the icon is clicked */
  onClick: () => void;
  /* As part of IconButtonProps, a label for navbar button */
  label: string;
  /* As part of IconButtonProps, an optional badge or icon to display adjacent to the IconButton*/
  badge?: ReactNode | ReactNode[];
  /* As part of IconButtonProps, an optional flag to notify if the button is in a selected state. */
  selected?: boolean;
  /* Including badgeProps will result in the children contents rendering in a PopOver */
  children?: ReactNode | ReactNode[];
  /* Defines the placement of PopOver menu, if used */
  placement?: Placement;
  /* Render the label text below the IconButton */
  showLabel?: boolean;
  /* Unique identifier to target element */
  testId?: string;
}

export const NavbarItem = ({
  label,
  children,
  placement = 'right-start',
  icon,
  showLabel = false,
  badge,
  onClick,
  testId = 'navbar-item',
  ...rest
}: NavbarItemProps) => {
  const ButtonComponent = !!rest['data-tooltip']
    ? IconButtonWithToolTip
    : IconButton;

  return (
    <StyledNavbarItem data-testid={testId} showLabel={showLabel}>
      {children ? (
        <PopOver
          placement={placement}
          a11yLabel={label}
          renderButtonWrapper={(isActive, props) => (
            <ButtonComponent
              onClick={onClick}
              selected={isActive}
              icon={icon}
              badge={badge}
              label={label}
              {...rest}
              {...props}
            />
          )}
        >
          {children}
        </PopOver>
      ) : (
        <ButtonComponent
          icon={icon}
          label={label}
          onClick={onClick}
          badge={badge}
          {...rest}
        />
      )}

      <label
        className="ch-navigation-bar-item-label"
        data-testid="navbar-label"
        onClick={onClick}
      >
        {label}
      </label>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
