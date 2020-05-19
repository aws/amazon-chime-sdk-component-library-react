import React, { FC } from 'react';
import { StyledModalBody } from './Styled';

export const ModalBody:FC<{}> = ({ children }) => {
  return (
    <StyledModalBody>
      {children}
    </StyledModalBody>
  );
};

export default ModalBody;
