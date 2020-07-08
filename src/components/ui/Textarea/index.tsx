// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledTextarea } from './Styled';

export interface TextareaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  onChange(event: ChangeEvent): void;
  value: string;
  label: string;
}

export const Textarea: FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <StyledTextarea
      aria-label={label}
      className="Textarea"
      data-testid='textarea'
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

export default Textarea;
