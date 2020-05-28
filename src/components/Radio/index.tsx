import React, { FC, InputHTMLAttributes, useRef } from 'react';

import Label from '../Label';
import useUniqueId from '../../hooks/useUniqueId';
import { StyledRadio, HiddenRadio, StyledRadioWrapper } from './Styled';

export interface RadioProps {
  checked?: boolean;
  label: string;
  value: string;
  onChange: (event: any) => void;
  radioProps?: InputHTMLAttributes<HTMLButtonElement>;
}

export const Radio: FC<RadioProps> = (props) => {
  const { value, checked, label, onChange, ...rest } = props;
  const radioNode = useRef<HTMLInputElement>(null);
  const labelId = useUniqueId();

  const handleChange = () => {
    radioNode.current?.click(); // simulate click the native checkbox
    radioNode.current?.focus();
  }

  return (
    <StyledRadioWrapper className="Radio-wrapper">
      <HiddenRadio
        checked={checked}
        id={labelId}
        onChange={onChange}
        type="radio"
        value={value}
        ref={radioNode}
        {...rest}
      />
      <StyledRadio
        checked={checked}
        className="Radio"
        onClick={handleChange}
      />
      <Label
        htmlFor={labelId}
        className="Radio-label">
        {label}
      </Label>
    </StyledRadioWrapper>
  );
}

Radio.displayName = 'Radio';

export default Radio;
