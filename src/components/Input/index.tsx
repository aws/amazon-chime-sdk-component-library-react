import React, { FC, ChangeEvent, ReactNode } from 'react';
import InputWrapper from './InputWrapper';
import { StyledInput } from './Styled';

export type Size = 'sm' | 'md';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange(event: ChangeEvent): void;
  leadingIcon?: ReactNode;
  sizing?: Size;
  value: string;
}

export const Input: FC<InputProps> = (props) => {
  const { leadingIcon, sizing,  ...rest } = props;

  return (
    <InputWrapper leadingIcon={leadingIcon} sizing={sizing}>
      <StyledInput {...rest} />
    </InputWrapper>
  );
}

export default Input;
