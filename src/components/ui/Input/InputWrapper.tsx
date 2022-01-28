// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, ReactNode, Ref } from 'react';
import { BaseProps } from '../Base';

import { Size } from './';
import { StyledInputWrapper } from './Styled';

export interface InputWrapperProps extends BaseProps {
  leadingIcon?: ReactNode;
  sizing?: Size;
  children?: ReactNode | ReactNode[];
}

export const InputWrapper = forwardRef(
  (props: InputWrapperProps, ref: Ref<HTMLSpanElement>) => {
    const { leadingIcon, children, sizing, ...rest } = props;

    return (
      <StyledInputWrapper ref={ref} sizing={sizing} leadingIcon={leadingIcon} {...rest} data-testid="input-wrapper">
        {leadingIcon && <span className="ch-icon">{leadingIcon}</span>}
        {children}
      </StyledInputWrapper>
    );
  }
);

export default InputWrapper;
