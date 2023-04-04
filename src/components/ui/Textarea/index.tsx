// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent, FC, InputHTMLAttributes, Ref } from 'react';

import { StyledTextarea } from './Styled';

export interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  /** The callback fired when the text is changed. */
  onChange(event: ChangeEvent): void;
  /** The value of the textarea. */
  value: string;
  /** The label for availability. */
  label: string;
}

export const Textarea: FC<React.PropsWithChildren<TextareaProps>> = React.forwardRef(
  ({ label, ...props }, ref: Ref<HTMLTextAreaElement>) => {
    return (
      <StyledTextarea
        aria-label={label}
        className="ch-textarea"
        data-testid="textarea"
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
