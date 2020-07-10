// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent, ReactNode, forwardRef, Ref, useRef } from 'react';

import InputWrapper from './InputWrapper';
import { StyledInput, StyledClear } from './Styled';
import { Clear } from '../icons';

export type Size = 'sm' | 'md';

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  onChange(event: ChangeEvent): void;
  onClear?(): void;
  leadingIcon?: ReactNode;
  sizing?: Size;
  value: string;
  id?: string;
  showClear?: boolean;
}

export const Input = forwardRef(
  (props: InputProps, externalRef: Ref<HTMLInputElement>) => {
    const {
      type,
      value,
      sizing,
      onClear,
      onChange,
      className,
      leadingIcon,
      showClear = true,
      ...rest
    } = props;

    const internalRef = useRef(null);
    const ref = (externalRef || internalRef) as React.MutableRefObject<
      HTMLInputElement
    >;

    const label = props['aria-label']
      ? `clear ${props['aria-label']}`
      : 'clear';

    const handleClear = () => {
      if (onClear) {
        onClear();
        return;
      }

      const input = ref.current;
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;

      if (nativeSetter && input) {
        nativeSetter.call(input, '');
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }

      input.focus();
    };

    return (
      <InputWrapper
        leadingIcon={leadingIcon}
        sizing={sizing}
        className={`InputWrapper ${className || ''}`}
      >
        <StyledInput
          {...rest}
          value={value}
          type={type || 'text'}
          ref={ref}
          className="Input"
          onChange={onChange}
          data-testid="input"
        />
        {showClear && (
          <StyledClear
            type="button"
            active={!!onClear}
            tabIndex={-1}
            aria-label={label}
            onClick={handleClear}
          >
            <Clear width="1.25rem" />
          </StyledClear>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
