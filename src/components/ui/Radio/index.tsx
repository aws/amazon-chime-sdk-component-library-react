// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, InputHTMLAttributes, useRef } from 'react';

import useUniqueId from '../../../hooks/useUniqueId';
import Label from '../Label';
import {
  HiddenRadio,
  StyledRadioIcon,
  StyledRadioLabel,
  StyledRadioWrapper,
} from './Styled';

export interface RadioProps {
  /** Whether or not the radio is selected. */
  checked?: boolean;
  /** The icon for the radio. */
  icon?: JSX.Element;
  /** The label of the radio. */
  label: string;
  /** The value of the radio. */
  value: string;
  /** The callback fired when the state is changed. */
  onChange: (event: any) => void;
  /** Other props of the radio. */
  radioProps?: InputHTMLAttributes<HTMLButtonElement>;
  /* Unique identifier to target element */
  testId?: string;
}

export const Radio: FC<React.PropsWithChildren<RadioProps>> = (props) => {
  const { value, checked, label, icon, onChange, testId, ...rest } = props;
  const radioNode = useRef<HTMLInputElement>(null);
  const labelId = useUniqueId();

  const handleChange = () => {
    radioNode.current?.click(); // simulate click the native checkbox
    radioNode.current?.focus();
  };

  return (
    <StyledRadioWrapper className="ch-radio-wrapper" data-testid={testId}>
      <HiddenRadio
        checked={checked}
        id={labelId}
        onChange={onChange}
        type="radio"
        value={value}
        ref={radioNode}
        data-testid="hidden-radio"
        aria-label={label}
        {...rest}
      />

      {icon ? (
        <>
          <StyledRadioIcon
            checked={checked}
            className="ch-radio"
            onClick={handleChange}
            data-testid="styled-radio-icon"
          >
            <span className="ch-icon">{icon}</span>
          </StyledRadioIcon>
        </>
      ) : (
        <>
          <StyledRadioLabel
            checked={checked}
            className="ch-radio"
            onClick={handleChange}
            data-testid="styled-radio"
          />
          <Label htmlFor={labelId} className="ch-radio-label">
            {label}
          </Label>
        </>
      )}
    </StyledRadioWrapper>
  );
};

Radio.displayName = 'Radio';

export default Radio;
