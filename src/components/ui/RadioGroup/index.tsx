// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';

import Radio from '../Radio';

export interface RadioProps {
  label: string;
  value: string;
  icon?: JSX.Element;
  inputProps?: InputHTMLAttributes<HTMLButtonElement>;
}

export interface RadioGroupProps {
  /** The callback fired when the state is changed. */
  onChange(event: ChangeEvent): void;
  /** Options of radio group. */
  options: RadioProps[];
  /** The selected option. */
  value: string;
}

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { options, value, onChange } = props;
  return (
    <>
      {options.map((option: any, index: number) => {
        return (
          <Radio
            value={option.value}
            key={`${option}-${index}`}
            label={option.label}
            checked={option.value === value}
            icon={option.icon}
            onChange={onChange}
            {...option.inputProps}
          />
        );
      })}
    </>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
