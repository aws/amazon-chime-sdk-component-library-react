// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Dots } from '../icons';
import PopOver from '../PopOver';
import IconButton, { IconButtonProps } from '../Button/IconButton';
import classNames from 'classnames';

interface PopOverMenuProps {
  menu: React.ReactNode;
  a11yMenuLabel?: string;
  buttonProps?: Partial<IconButtonProps>;
}

export const PopOverMenu = ({
  menu,
  a11yMenuLabel = '',
  buttonProps,
}: PopOverMenuProps) => (
  <PopOver
    className="ch-menu"
    a11yLabel={a11yMenuLabel}
    renderButtonWrapper={(isActive, props) => (
      <IconButton
        {...buttonProps}
        {...props}
        className={classNames("ch-menu", buttonProps?.className)}
        icon={<Dots />}
        label={a11yMenuLabel}
      />
    )}
  >
    {menu}
  </PopOver>
);
