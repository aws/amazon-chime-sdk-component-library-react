// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import Check from '../icons/Check';
import { StyledPopOverItem } from './Styled';

export type PopOverItemType = "a" | "button";

export interface PopOverItemProps {
  onClick?: () => void;
  checked?: boolean;
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  disabled?: boolean;
  href?: string;
  as?: PopOverItemType;
  border?: boolean;
}

export const PopOverItem: FC<PopOverItemProps> = props => {
  const { as = "button", children, ...rest } = props;

  let Tag = as;
  return (
    <StyledPopOverItem data-testid='popover-item'>
      {props.checked && <Check className="check" data-testid='popover-check' />}
      <Tag className="content" {...rest}>
        {children}
      </Tag>
    </StyledPopOverItem>
  );
};

export default PopOverItem;
