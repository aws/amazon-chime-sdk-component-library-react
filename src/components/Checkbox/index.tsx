import React from 'react';
import { StyledCheckbox } from './Styled';
import { Check } from '../icons';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, label, ...rest } = props;
  return (
    <StyledCheckbox {...props}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          {...rest}
        />
        <span className='checkmark-wrapper'>{checked && <span className="checkmark"><Check/></span>}</span>
        <span className="label-text">{label}</span>
      </label>
    </StyledCheckbox>
  );
}