// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, forwardRef, Ref, ChangeEvent } from 'react';

import useUniqueId from '../../../hooks/useUniqueId';
import { StyledFormField } from './Styled';
import Label from '../Label';
import { InputProps } from '../Input';
import { SelectProps } from '../Select';
import { TextareaProps } from '../Textarea';
import { CheckboxProps } from '../Checkbox';
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';
import { BaseProps } from '../Base';

export type FieldType =
  | FC<InputProps>
  | FC<SelectProps>
  | FC<TextareaProps>
  | FC<CheckboxProps>
  | FC<RadioGroupProps>
  | FC<RadioProps>;

export interface FieldProps {
  /** The callback fired when the state is changed. */
  onChange(event: ChangeEvent): void;
  /** The label of the field. */
  label: string;
  /** The type of the field. */
  field: FieldType;
  /** The informational text in the field. */
  infoText?: string;
  /** Whether or not the error text is shown. */
  error?: boolean;
  /** The error text in the field. */
  errorText?: string;
  /** Additional props for field component. */
  fieldProps?: any;
  /** The value of the field. */
  value: string;
  /** Whether or not the field is checked. */
  checked?: boolean;
  /** Options for some fields, e.g. radio group or select. */
  options?: string[] | object[];
}

export interface LayoutProps {
  /** Specify the layout of the field, it defaults to `stack`. */
  layout?: 'stack' | 'horizontal' | 'input-only';
  error?: boolean;
}

export interface FormFieldProps extends FieldProps, LayoutProps, BaseProps {}
export interface FieldWrapperProps extends BaseProps, LayoutProps {}

export const FormField = forwardRef(
  (props: FormFieldProps, ref: Ref<HTMLElement>) => {
    const {
      field: Field,
      label,
      layout = 'stack',
      errorText,
      fieldProps,
      infoText,
      error,
      onChange,
      value,
      checked,
      options,
      className,
      ...rest
    } = props;

    const displayName = Field.displayName?.toLowerCase() || '';
    const labelId = useUniqueId();
    const descriptionId = useUniqueId();
    let helpText = (error && errorText) || infoText;

    const renderLabel = () => {
      if (layout === 'input-only' && displayName !== 'checkbox') {
        return null;
      }

      if (displayName !== 'radiogroup') {
        return (
          <Label htmlFor={labelId} className={`ch-${displayName}-label`}>
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
        className={`ch-form-field-${displayName} ${className || ''}`}
        data-testid="form-field"
        {...rest}
      >
        {renderLabel()}
        {displayName === 'radiogroup' ? (
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
        ) : (
          <Field
            options={options}
            aria-label={(layout === 'input-only' && label) || null}
            aria-describedby={helpText && descriptionId}
            aria-invalid={error}
            ref={ref}
            id={labelId}
            onChange={onChange}
            value={value}
            checked={checked}
            {...fieldProps}
          />
        )}
        {helpText && (
          <span className="ch-help-text" id={descriptionId}>
            {helpText}
          </span>
        )}
      </StyledFormField>
    );
  }
);

export default FormField;
