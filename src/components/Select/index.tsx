import React, { ChangeEvent, forwardRef, Ref, InputHTMLAttributes,  } from 'react';

import { StyledSelectInput } from './Styled';

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: string[];
  onChange(event: ChangeEvent): void;
  value: string;
}

const renderOptions = (options: string[]) => {
  return (
    options.map((option: string) => <option key={option} value={option}>{option}</option>)
  );
}

export const Select = forwardRef((props: SelectProps, ref: Ref<HTMLSelectElement>) => (
  <StyledSelectInput
    className="Select"
    ref={ref}
    {...props}
  >
    {renderOptions(props.options)}
  </StyledSelectInput>
));


Select.displayName = 'Select';

export default Select;
