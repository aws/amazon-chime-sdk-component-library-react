import React from 'react';

import { StyledName } from './Styled';

export interface RosterNameProps {
  name: string;
  subtitle?: string;
}

const RosterName = ({ name, subtitle }: RosterNameProps) => (
  <StyledName>
    <div className="name">{name}</div>
    {subtitle && <div className="subtitle">{subtitle}</div>}
  </StyledName>
);

export default RosterName;
