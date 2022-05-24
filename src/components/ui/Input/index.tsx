// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  ChangeEvent,
  forwardRef,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseProps } from '../Base';
import { Clear } from '../icons';
import InputWrapper from './InputWrapper';
import { StyledClear, StyledInput } from './Styled';

export type Size = 'sm' | 'md';

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'value' | 'css'
    >,
    BaseProps {
  /** The callback fired when the state is changed. */
  onChange(event: ChangeEvent): void;
  /** The callback fired when the input value is cleared. */
  onClear?(): void;
  /** The icon in the input. */
  leadingIcon?: ReactNode;
  /** The size of the input. */
  sizing?: Size;
  /** The value of the input. */
  value: string;
  /** The id of the input. */
  id?: string;
  /** Whether or not the clear icon is shown, it defaults to `true`. */
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
    const [focused, setFocused] = useState(false);
    const focusedRef = useRef(false);
    const internalRef = useRef(null);
    const inputRef = (externalRef ||
      internalRef) as React.MutableRefObject<HTMLInputElement>;
    const clearRef = useRef<HTMLButtonElement>(null);

    const label = props['aria-label']
      ? `clear ${props['aria-label']}`
      : 'clear';

    const handleClear = () => {
      if (onClear) {
        onClear();
        return;
      }

      const input = inputRef.current;
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

    useEffect(() => {
      let blurring = false;

      const onFocus = (e: any) => {
        if (!focusedRef.current) {
          return;
        }

        if (e.target !== clearRef.current && e.target !== inputRef.current) {
          focusedRef.current = false;
          setFocused(false);
          return;
        }

        if (blurring) {
          blurring = false;
        }
      };

      const onFocusOut = (): void => {
        if (!focusedRef.current) {
          return;
        }

        blurring = true;
        setTimeout(() => {
          if (blurring) {
            focusedRef.current = false;
            setFocused(false);
          }

          blurring = false;
        }, 10);
      };

      document.addEventListener('focusin', onFocus);
      document.addEventListener('focusout', onFocusOut);

      return () => {
        document.removeEventListener('focusin', onFocus);
        document.removeEventListener('focusout', onFocusOut);
      };
    }, []);

    return (
      <InputWrapper
        leadingIcon={leadingIcon}
        sizing={sizing}
        className={`ch-input-wrapper ${className || ''}`}
      >
        <StyledInput
          {...rest}
          value={value}
          type={type || 'text'}
          ref={inputRef}
          className="ch-input"
          onChange={onChange}
          data-testid="input"
          onFocus={() => {
            focusedRef.current = true;
            setFocused(true);
          }}
        />
        {showClear && (
          <StyledClear
            type="button"
            active={!!(onClear || (focused && value.length))}
            tabIndex={-1}
            aria-label={label}
            onClick={handleClear}
            ref={clearRef}
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
