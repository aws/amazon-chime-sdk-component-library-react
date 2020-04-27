import React, { ChangeEvent, forwardRef, Ref, InputHTMLAttributes,  } from 'react';

import { StyledSelectInput } from './Styled';

export interface SelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label: string;
  onChange(event: ChangeEvent): void;
  value: string;
}

const renderOptions = (options: string[]) => {
  return (
    options.map((option: string) => <option key={option} value={option}>{option}</option>)
  );
}

export const SelectInput = forwardRef((props: SelectInputProps, ref: Ref<HTMLSelectElement>) => (
  <StyledSelectInput
    aria-label={props.label}
    ref={ref}
    {...props}
  >
    {renderOptions(props.options)}
  </StyledSelectInput>
));

export default SelectInput;
