import React from 'react';

import { StyledRadioInput } from './Styled';


export interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label: string;
}
  
export const RadioInput: React.FC<RadioInputProps> = (props) => {
  const { checked, label, ...rest } = props;
  return (
    <StyledRadioInput {...props}>
    <label>
      <input
        type="radio"
        checked={checked}
        {...rest}
      />
      <span className='radio-wrapper'>{checked && <span className="radio-checkmark"></span>}</span>
      <span className="label-text">{label}</span>
    </label>
    </StyledRadioInput>
  );
}