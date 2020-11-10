// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import Check from '../icons/Check';
import { StyledPopOverItem } from './Styled';

export type PopOverItemType = 'a' | 'button';

export interface PopOverItemProps {
  /** The callback fired when the item is clicked. */
  onClick?: () => void;
  /** Whether or not the item is checked. */
  checked?: boolean;
  /** The elements that populate the content of the item. */
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  /** Whether or not the item is disabled. */
  disabled?: boolean;
  /** Defines the href attribute if the item is rendered as an `a` tag. */
  href?: string;
  /** Defines which tag will the item be rendered as, it defaults to `button`. */
  as?: PopOverItemType;
  /** Whether or not the item has a border. */
  border?: boolean;
}

export const PopOverItem: FC<PopOverItemProps> = ({
  as = 'button',
  children,
  checked,
  ...rest
}) => {
  let Tag = as;
  return (
    <StyledPopOverItem data-testid="popover-item">
      {checked && <Check className="ch-check" data-testid="popover-check" />}
      <Tag className="ch-content" {...rest}>
        {children}
      </Tag>
    </StyledPopOverItem>
  );
};

export default PopOverItem;
