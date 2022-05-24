// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import Select from '../../../../src/components/ui/Select';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

let mockFunction: any;

describe('Select', () => {
  const value = 'bananas';
  const selectOptions = [
    {
      value: 'bananas',
      label: 'Bananas',
    },
    {
      value: 'oranges',
      label: 'Oranges',
    },
    {
      value: 'grapefruit',
      label: 'Grapefruit',
    },
  ];

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render a Select', () => {
    const component = (
      <Select value={value} onChange={mockFunction} options={selectOptions} />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('select')).toBeInTheDocument();
  });

  it('should render a Select with a display value', () => {
    const component = (
      <Select value={value} onChange={mockFunction} options={selectOptions} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('select');

    expect(element).toHaveDisplayValue('Bananas');
  });

  it('should call onChange event handler once if selects one option', () => {
    const component = (
      <Select value={value} onChange={mockFunction} options={selectOptions} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'oranges' } });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
