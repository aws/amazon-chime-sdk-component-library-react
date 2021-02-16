// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Dots } from '../icons';
import PopOver from '../PopOver';
import IconButton, { IconButtonProps } from '../Button/IconButton';
import classNames from 'classnames';
import { Tooltipable, WithTooltip } from '../WithTooltip';

const IconButtonWithToolTip = WithTooltip(IconButton);

interface PopOverMenuProps extends Tooltipable {
  menu: React.ReactNode;
  a11yMenuLabel?: string;
  buttonProps?: Partial<IconButtonProps>;
}

export const PopOverMenu = ({
  menu,
  a11yMenuLabel = '',
  buttonProps,
  ...rest
}: PopOverMenuProps) => {
  const ButtonComponent = !!rest['data-tooltip']
    ? IconButtonWithToolTip
    : IconButton;
  const buttonComponentProps = !!rest['data-tooltip-position']
    ? { tooltipPosition: rest['data-tooltip-position'] }
    : {};
  return (
    <PopOver
      className="ch-menu"
      a11yLabel={a11yMenuLabel}
      renderButtonWrapper={(isActive, props) => (
        <ButtonComponent
          {...buttonComponentProps}
          {...buttonProps}
          {...props}
          className={classNames('ch-menu', buttonProps?.className)}
          icon={<Dots />}
          label={a11yMenuLabel}
        />
      )}
    >
      {menu}
    </PopOver>
  );
};
