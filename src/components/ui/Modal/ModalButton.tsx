// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Button, { ButtonProps } from '../Button';

export interface ModalButtonProps extends ButtonProps {
  /** Whether or not modal button(s) should have the ability to close the modal. By default, you can only close the modal by clicking the close icon button in the modal. */
  closesModal?: boolean;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  closesModal,
  ...rest
}) => {
  return <Button {...rest} />;
};

export default ModalButton;
