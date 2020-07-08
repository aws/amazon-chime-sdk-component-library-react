// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import IconButton from '../Button/IconButton';
import Remove from '../icons/Remove';
import { useModalContext } from './ModalContext';
import { StyledModalHeader } from './Styled';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  displayClose?: boolean;
  as?: any;
}

export const ModalHeader:FC<ModalHeaderProps> = ({
  as: Tag = "div",
  displayClose = true,
  title,
}) => {

  const context = useModalContext();
  const handleClick = (() => {
    return context && context.onClose();
  });

  return (
    <StyledModalHeader>
      <Tag
        className="title"
        id={context.labelID}>
        {title}
      </Tag>

      {displayClose && (
        <IconButton
          label="Close"
          icon={<Remove/>}
          className="closeButton"
          onClick={handleClick}
        />
      )}
    </StyledModalHeader>
  );
};

export default ModalHeader;
