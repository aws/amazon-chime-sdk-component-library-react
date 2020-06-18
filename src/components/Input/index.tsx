import React, { ChangeEvent, ReactNode, forwardRef, Ref } from 'react';
import InputWrapper from './InputWrapper';
import { StyledInput } from './Styled';

export type Size = 'sm' | 'md';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange(event: ChangeEvent): void;
  leadingIcon?: ReactNode;
  sizing?: Size;
  value: string;
}

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { className, leadingIcon, sizing, type, onChange,  ...rest } = props;

  return (
    <InputWrapper
      leadingIcon={leadingIcon}
      sizing={sizing}
      className="InputWrapper"
    >
      <StyledInput
        {...rest}
        type={type || "text"}
        ref={ref}
        className="Input"
        onChange={(e: ChangeEvent) => onChange(e)}
        data-testid='input'
      />
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
