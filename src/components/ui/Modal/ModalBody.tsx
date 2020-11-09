// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
import { StyledModalBody } from './Styled';

interface ModalBodyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {}

export const ModalBody: FC<ModalBodyProps> = ({ children, ...rest }) => {
  return (
    <StyledModalBody data-testid="modal-body" {...rest}>
      {children}
    </StyledModalBody>
  );
};

export default ModalBody;
