// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, ReactNode, Ref } from 'react';
import { StyledInputWrapper } from './Styled';
import { Size } from './';

export interface InputWrapperProps {
  leadingIcon?: ReactNode;
  sizing?: Size;
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const InputWrapper = forwardRef(
  (props: InputWrapperProps, ref: Ref<HTMLSpanElement>) => {
    const { leadingIcon, children } = props;

    return (
      <StyledInputWrapper ref={ref} {...props} data-testid="input-wrapper">
        {leadingIcon && <span className="ch-icon">{leadingIcon}</span>}
        {children}
      </StyledInputWrapper>
    );
  }
);

export default InputWrapper;
