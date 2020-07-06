// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent, forwardRef, Ref, InputHTMLAttributes,  } from 'react';

import { StyledSelectInput } from './Styled';

export type SelectOptions = {
  value: string | number;
  label: string;
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
  onChange(event: ChangeEvent): void;
  value: string;
}

const renderOptions = (options: SelectOptions[]) => {
  return (
    options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)
  );
}

export const Select = forwardRef((props: SelectProps, ref: Ref<HTMLSelectElement>) => (
  <StyledSelectInput
    className="Select"
    data-testid='select'
    ref={ref}
    {...props}
  >
    {renderOptions(props.options)}
  </StyledSelectInput>
));


Select.displayName = 'Select';

export default Select;
