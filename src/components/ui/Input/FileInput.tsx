// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { Ref, forwardRef } from 'react';

import { InputProps } from './';
import { StyledInput } from './Styled';

interface FileInputProps extends InputProps {
  id: string;
  optionText?: String;
}

export const FileInput = forwardRef(
  ({ id, optionText, ...rest }: FileInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <>
        <StyledInput
          id={id}
          type="file"
          ref={ref}
          className="ch-file-input"
          {...rest}
        />
        <label htmlFor={id}>{optionText}</label>
      </>
    );
  }
);

export default FileInput;
