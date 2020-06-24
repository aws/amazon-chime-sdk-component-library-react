import React from 'react';

import Button, { ButtonProps } from '../Button';

export interface ModalButtonProps extends ButtonProps {
  closesModal?: boolean;
}

export const ModalButton: React.SFC<ModalButtonProps> = ({ closesModal, ...otherProps }) => {
  return <Button {...otherProps} />;
};

export default ModalButton;
