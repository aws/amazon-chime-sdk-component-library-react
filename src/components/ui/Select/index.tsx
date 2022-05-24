// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react';

import UpAndDownCaret from '../icons/UpAndDownCaret';
import { StyledSelectInput, StyledWrapper } from './Styled';

export type SelectOptions = {
  value: string | number;
  label: string;
};

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  /** Options */
  options: SelectOptions[];
  /** The callback fired when the option is changed. */
  onChange(event: ChangeEvent): void;
  /** The selected option */
  value: string;
}

const renderOptions = (options: SelectOptions[]) => {
  return options.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));
};

const upAndDownCaretStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0.2rem',
  width: '1.5rem',
  height: '1.5rem',
} as CSSProperties;

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => (
    <StyledWrapper>
      <StyledSelectInput
        className="ch-select"
        data-testid="select"
        ref={ref}
        {...props}
      >
        {renderOptions(props.options)}
      </StyledSelectInput>
      <UpAndDownCaret
        style={upAndDownCaretStyle}
        className="ch-select-icon"
        data-testid="select-icon"
      />
    </StyledWrapper>
  )
);

Select.displayName = 'Select';

export default Select;
