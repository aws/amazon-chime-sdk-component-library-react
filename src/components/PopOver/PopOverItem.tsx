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
  text?: string;
  border?: boolean;
}

export const PopOverItem: FC<PopOverItemProps> = props => {
  const { as = "button", text, children, ...rest } = props;

  let Tag = as;
  return (
    <StyledPopOverItem>
      <Tag {...rest}>
        {props.checked && <Check className="check" />}
        <div className="content">
          {children}
          <span>{text}</span>
        </div>
      </Tag>
    </StyledPopOverItem>
  );
};

export default PopOverItem;
