// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, ReactNode } from 'react';
import { StyledInputWrapper } from './Styled';
import { Size } from './';

export interface InputWrapperProps {
  leadingIcon?: ReactNode;
  sizing?: Size;
  className?: string;
}

export const InputWrapper: FC<InputWrapperProps> = props => {
  const { leadingIcon, children } = props;
  return (
    <StyledInputWrapper {...props} data-testid="input-wrapper">
      {leadingIcon && <span className="icon">{leadingIcon}</span>}
      {children}
    </StyledInputWrapper>
  );
};

export default InputWrapper;
