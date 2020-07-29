// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import PopOver from './';
import { StyledSubMenu } from './Styled';
import Caret from '../icons/Caret';

export interface PopOverItemProps {
  children?: JSX.Element | JSX.Element[];
  text: string;
}

export const PopOverSubMenu: FC<PopOverItemProps> = ({ text, children }) => {
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
        renderButton={isOpen => getButtonContents(isOpen)}
        placement="right-start"
        isSubMenu
        a11yLabel={text}
      >
        {children}
      </PopOver>
    </StyledSubMenu>
  );
};

export default PopOverSubMenu;
