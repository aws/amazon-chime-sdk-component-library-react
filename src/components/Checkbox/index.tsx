import React, { FC, ChangeEvent, useRef } from 'react';
import { StyledCheckbox, HiddenCheckbox } from './Styled';
import { Check } from '../icons';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange' | 'value'>  {
  onChange: (event?: ChangeEvent | string) => void;
  value: string;
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
  }

  return (
    <>
      <HiddenCheckbox
        {...props}
        data-testid="hiddenCheckbox"
        ref={checkboxNode}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <StyledCheckbox
        data-testid="styledCheckbox"
        checked={checked}
        className="Checkbox"
        onClick={handleChange}
      >
        {checked && <Check data-testid="check" />}
      </StyledCheckbox>
    </>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
