import React from 'react';

import { StyledRoster } from './Styled';
import { BaseProps } from '../Base';

export const Roster: React.FC<BaseProps> = ({ children, ...rest }) => {
  return <StyledRoster {...rest}>{children}</StyledRoster>;
};

export default Roster;
