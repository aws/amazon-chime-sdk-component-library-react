// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import FormField from '../../../../src/components/ui/FormField';
import Input from '../../../../src/components/ui/Input';
import RadioGroup from '../../../../src/components/ui/RadioGroup';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('FormField', () => {
  let mockFunction: any;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render a basic Input FormField', () => {
    const label = 'First Name';
    const component = (
      <FormField label={label} field={Input} value="" onChange={mockFunction} />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('input')).toBeInTheDocument();
  });

  it('should render a basic Input FormField with label', () => {
    const label = 'First Name';
    const component = (
      <FormField label={label} field={Input} value="" onChange={mockFunction} />
    );
    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText(label)).toBeInTheDocument();
  });

  it('should render a basic Input FormField with infoText', () => {
    const label = 'First Name';
    const infoText = 'informational text';
    const component = (
      <FormField
        label={label}
        field={Input}
        value=""
        infoText={infoText}
        onChange={mockFunction}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const formField = getByTestId('form-field');

    expect(formField).toHaveTextContent(infoText);
  });

  it('should render a basic Input FormField with error', () => {
    const label = 'First Name';
    const errorText = 'some error text';
    const component = (
      <FormField
        label={label}
        field={Input}
        value=""
        error
        errorText={errorText}
        onChange={mockFunction}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const formField = getByTestId('form-field');

    expect(formField).toHaveTextContent(errorText);
  });

  it('should render a basic Input FormField with layout = input-only', () => {
    const label = 'First Name';
    const layout = 'input-only';
    const component = (
      <FormField
        label={label}
        field={Input}
        value=""
        layout={layout}
        onChange={mockFunction}
      />
    );
    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText(label)).not.toBeInTheDocument();
  });

  it('should render a RadioGroup FormField', () => {
    const options = [
      {
        value: 'react',
        label: 'React',
      },
      {
        value: 'angular',
        label: 'Angular',
      },
    ];
    const label = 'test RadioGroup label';
    const infoText = 'informational text';
    const component = (
      <FormField
        label={label}
        options={options}
        field={RadioGroup}
        value=""
        onChange={mockFunction}
        infoText={infoText}
      />
    );
    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText(label)).toBeInTheDocument();
  });
});
