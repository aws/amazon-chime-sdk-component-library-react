// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, ChangeEvent, useRef } from 'react';
import { StyledCheckbox, HiddenCheckbox } from './Styled';
import { Check } from '../icons';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  /** The callback fired when the state is changed. */
  onChange: (event?: ChangeEvent | string) => void;
  /** The value of the checkbox. */
  value: string;
  /** Whether or not the checkbox is checked. */
  checked?: boolean;
}
export interface StyledCheckboxProps {
  checked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked, onChange, value } = props;
  const checkboxNode = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    checkboxNode.current?.click(); // simulate click the native checkbox
    checkboxNode.current?.focus();
  };

  return (
    <>
      <HiddenCheckbox
        {...props}
        data-testid="hidden-checkbox"
        ref={checkboxNode}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <StyledCheckbox
        data-testid="styled-checkbox"
        checked={checked}
        className="ch-checkbox"
        onClick={handleChange}
      >
        {checked && <Check data-testid="check" />}
      </StyledCheckbox>
    </>
  );
};
Checkbox.displayName = 'Checkbox';

export default Checkbox;
