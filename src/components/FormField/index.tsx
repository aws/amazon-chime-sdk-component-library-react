import React, { FC, forwardRef, Ref, ChangeEvent } from 'react';

import useUniqueId from '../../hooks/useUniqueId';
import { StyledFormField } from './Styled';
import Label from '../Label';
import { InputProps } from '../Input';
import { SelectProps } from '../Select';
import { TextareaProps } from '../Textarea';
import { CheckboxProps } from '../Checkbox';
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';

export type FieldType =
    FC<InputProps>
  | FC<SelectProps>
  | FC<TextareaProps>
  | FC<CheckboxProps>
  | FC<RadioGroupProps>
  | FC<RadioProps>;

export interface FieldProps {
  onChange(event: ChangeEvent): void;
  label: string;
  field: FieldType;
  infoText?: string;
  error?: boolean;
  errorText?: string;
  fieldProps?: any;
  value: string;
  checked?: boolean;
  options?: string[] | object[];
}

export interface LayoutProps {
  layout?: | "stack" | "horizontal" | "input-only";
  error?: boolean;
}

export interface FormFieldProps extends FieldProps, LayoutProps {}

export const FormField = forwardRef((props: FormFieldProps, ref: Ref<HTMLElement>) => {
  const {
    field: Field,
    label,
    layout = "stack",
    errorText,
    fieldProps,
    infoText,
    error,
    onChange,
    value,
    checked,
    options,
  } = props;

  const { displayName } = Field;
  const labelId = useUniqueId();
  const descriptionId = useUniqueId();
  let helpText = (error && errorText) || infoText;

  const renderLabel = () => {
    if (layout === 'input-only' && displayName !== 'Checkbox') {
      return null;
    }

    if (Field.displayName !== 'RadioGroup') {
      return (
        <Label htmlFor={labelId} className={`${displayName}-label`}>
          {label}
        </Label>
      );
    }
    return false;
  };

  return (
    <StyledFormField
      layout={layout}
      error={error}
      className={`FormField-${Field.displayName}`}
    >
      {renderLabel()}
      {
        Field.displayName === 'RadioGroup'
        ?
        <fieldset
          aria-describedby={helpText && descriptionId}
          aria-invalid={error}
        >
          {label && <legend>{label}</legend>}
          <Field
            options={options}
            ref={ref}
            id={labelId}
            onChange={onChange}
            value={value}
            {...fieldProps}
          />
        </fieldset>
        :
        <Field
          options={options}
          aria-label={layout === "input-only" && label || null}
          aria-describedby={helpText && descriptionId}
          aria-invalid={error}
          ref={ref}
          id={labelId}
          onChange={onChange}
          value={value}
          checked={checked}
          {...fieldProps}
        />
      }
      {helpText && <span className="helpText" id={descriptionId}>{helpText}</span>}
    </StyledFormField>
  )
});

export default FormField;
