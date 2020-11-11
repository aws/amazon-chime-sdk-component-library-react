// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import IconButton from '../Button/IconButton';
import Remove from '../icons/Remove';
import { useModalContext } from './ModalContext';
import { StyledModalHeader } from './Styled';
import { BaseProps } from '../Base';

export interface ModalHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The title of the header in the modal. */
  title: string;
  /** Whether or not the close icon is shown on the modal. */
  displayClose?: boolean;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  tag: Tag = 'div',
  displayClose = true,
  title,
  ...rest
}) => {
  const context = useModalContext();
  const handleClick = () => {
    return context && context.onClose();
  };

  return (
    <StyledModalHeader {...rest}>
      <Tag className="ch-title" id={context.labelID}>
        {title}
      </Tag>

      {displayClose && (
        <IconButton
          label="Close"
          icon={<Remove />}
          className="ch-close-button"
          onClick={handleClick}
        />
      )}
    </StyledModalHeader>
  );
};

export default ModalHeader;
