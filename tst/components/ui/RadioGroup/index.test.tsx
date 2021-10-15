// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import RadioGroup from '../../../../src/components/ui/RadioGroup';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('RadioGroup', () => {
  let mockFunction: any;
  const value = 'bananas';
  const options = [
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

  it('should render a RadioGroup with 3 options', () => {
    const component = (
      <RadioGroup value={value} onChange={mockFunction} options={options} />
    );
    const { getAllByTestId } = renderWithTheme(lightTheme, component);
    const radios = getAllByTestId('styled-radio');

    expect(radios).toHaveLength(3);
  });

  it('should render a RadioGroup with 1st radio button checked only', () => {
    const component = (
      <RadioGroup value={value} onChange={mockFunction} options={options} />
    );
    const { getAllByTestId } = renderWithTheme(lightTheme, component);
    const radiobuttons = getAllByTestId('hidden-radio');

    expect(radiobuttons[0]).toHaveAttribute('checked');
    expect(radiobuttons[1]).not.toHaveAttribute('checked');
    expect(radiobuttons[2]).not.toHaveAttribute('checked');
  });

  it('should call onChange event handler once if switch radio', () => {
    const component = (
      <RadioGroup value={value} onChange={mockFunction} options={options} />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const radio = getByText('Oranges');

    fireEvent.click(radio);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should become focused if selects the Radio', () => {
    const component = (
      <RadioGroup value={value} onChange={mockFunction} options={options} />
    );
    const { getAllByTestId } = renderWithTheme(lightTheme, component);
    const styledRadios = getAllByTestId('styled-radio');
    const hiddenRadios = getAllByTestId('hidden-radio');

    fireEvent.click(styledRadios[1]);
    expect(hiddenRadios[1]).toHaveFocus();
  });
});
