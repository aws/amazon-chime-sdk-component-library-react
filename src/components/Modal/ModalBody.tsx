import React, { FC } from 'react';
import { StyledModalBody } from './Styled';

export const ModalBody:FC<{}> = ({ children }) => {
  return (
    <StyledModalBody data-testid='modalBody'>
      {children}
    </StyledModalBody>
  );
};

export default ModalBody;
