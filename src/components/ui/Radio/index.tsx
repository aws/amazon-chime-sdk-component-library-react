// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, InputHTMLAttributes, useRef } from 'react';

import Label from '../Label';
import useUniqueId from '../../../hooks/useUniqueId';
import { StyledRadio, HiddenRadio, StyledRadioWrapper } from './Styled';

export interface RadioProps {
  /** If true, the radio is selected. */
  checked?: boolean;
  /** The label of the radio. */
  label: string;
  /** The value of the radio. */
  value: string;
  /** Callback fired when the state is changed. */
  onChange: (event: any) => void;
  /** Other props of the radio. */
  radioProps?: InputHTMLAttributes<HTMLButtonElement>;
}

export const Radio: FC<RadioProps> = props => {
  const { value, checked, label, onChange, ...rest } = props;
  const radioNode = useRef<HTMLInputElement>(null);
  const labelId = useUniqueId();

  const handleChange = () => {
    radioNode.current?.click(); // simulate click the native checkbox
    radioNode.current?.focus();
  };

  return (
    <StyledRadioWrapper className="ch-radio-wrapper">
      <HiddenRadio
        checked={checked}
        id={labelId}
        onChange={onChange}
        type="radio"
        value={value}
        ref={radioNode}
        data-testid="hidden-radio"
        {...rest}
      />
      <StyledRadio
        checked={checked}
        className="ch-radio"
        onClick={handleChange}
        data-testid="styled-radio"
      />
      <Label htmlFor={labelId} className="ch-radio-label">
        {label}
      </Label>
    </StyledRadioWrapper>
  );
};

Radio.displayName = 'Radio';

export default Radio;
