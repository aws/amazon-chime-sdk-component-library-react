import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledTextarea } from './Styled';

export interface TextareaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  onChange(event: ChangeEvent): void;
  value: string;
  label: string;
}

export const Textarea: FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <StyledTextarea
      aria-label={label}
      className="Textarea"
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

export default Textarea;
