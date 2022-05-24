// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, LabelHTMLAttributes, Ref } from 'react';

import { BaseProps } from '../Base';
import { StyledLabel } from './Styled';

export interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'css'>,
    BaseProps {}

export const Label = forwardRef(
  (props: LabelProps, ref: Ref<HTMLLabelElement>) => {
    const { className, tag, ...rest } = props;

    return (
      <StyledLabel
        as={tag}
        data-testid="label"
        className={className || ''}
        {...rest}
      >
        {props.children}
      </StyledLabel>
    );
  }
);

export default Label;
