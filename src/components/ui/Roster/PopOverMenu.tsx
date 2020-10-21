// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Dots } from '../icons';
import PopOver from '../PopOver';
import IconButton from '../Button/IconButton';

interface PopOverMenuProps {
  menu: React.ReactNode;
  a11yMenuLabel?: string;
}

export const PopOverMenu = ({ menu, a11yMenuLabel = '' }: PopOverMenuProps) => (
  <PopOver
    className="ch-menu"
    a11yLabel={a11yMenuLabel}
    renderButtonWrapper={(isActive, props) => (
      <IconButton
        {...props}
        className="ch-menu"
        icon={<Dots />}
        label={a11yMenuLabel}
      />
    )}
  >
    {menu}
  </PopOver>
);
