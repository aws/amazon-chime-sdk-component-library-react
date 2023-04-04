// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';
import Caret from '../icons/Caret';
import PopOver from './';
import { StyledSubMenu } from './Styled';

export interface PopOverSubMenuProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>,
    BaseProps {
  children?: JSX.Element | JSX.Element[];
  /** The text shown in the item. */
  text: string;
}

export const PopOverSubMenu: FC<
  React.PropsWithChildren<PopOverSubMenuProps>
> = ({ text, children, ...rest }) => {
  const getButtonContents = (isOpen: boolean) => {
    return (
      <>
        {text}
        <Caret
          className="ch-caret"
          direction="right"
          data-testid="submenu-caret"
        />
      </>
    );
  };
  return (
    <StyledSubMenu>
      <PopOver
        renderButton={(isOpen) => getButtonContents(isOpen)}
        placement="right-start"
        isSubMenu
        a11yLabel={text}
        {...rest}
      >
        {children}
      </PopOver>
    </StyledSubMenu>
  );
};

export default PopOverSubMenu;
