// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { StyledModalBody } from './Styled';

export const ModalBody: FC<{}> = ({ children }) => {
  return <StyledModalBody data-testid="modal-body">{children}</StyledModalBody>;
};

export default ModalBody;
