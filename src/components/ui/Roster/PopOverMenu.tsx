// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classNames from 'classnames';
import React, { useMemo } from 'react';

import IconButton, { IconButtonProps } from '../Button/IconButton';
import { Dots } from '../icons';
import PopOver from '../PopOver';
import { Tooltipable, WithTooltip } from '../WithTooltip';

interface PopOverMenuProps extends Tooltipable {
  menu: React.ReactNode;
  a11yMenuLabel?: string;
  buttonProps?: Partial<IconButtonProps>;
}

export const PopOverMenu = ({
  menu,
  buttonProps,
  tooltipContainerId,
  a11yMenuLabel = '',
  ...rest
}: PopOverMenuProps) => {
  const IconButtonWithToolTip = useMemo(
    () => WithTooltip(IconButton, tooltipContainerId),
    [tooltipContainerId]
  );

  const ButtonComponent = rest['data-tooltip']
    ? IconButtonWithToolTip
    : IconButton;
  const buttonComponentProps = rest['data-tooltip-position']
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
          {...rest}
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
