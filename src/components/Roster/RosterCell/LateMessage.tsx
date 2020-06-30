import React from 'react';

import { Clock } from '../../icons';
import { StyledLateMessage } from './Styled';

const LateMessage: React.FC = ({ children }) => (
  <StyledLateMessage>
    <Clock />
    {children}
  </StyledLateMessage>
);

export default LateMessage;
