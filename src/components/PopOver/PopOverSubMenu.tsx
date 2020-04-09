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
        <Caret className="caret" direction="right"/>
      </>
    );
  }
  return (
    <StyledSubMenu>
      <PopOver
        renderButton={(isOpen) => getButtonContents(isOpen)}
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
