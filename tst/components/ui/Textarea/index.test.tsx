// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import React from 'react';

import Textarea from '../../../../src/components/ui/Textarea';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Textarea', () => {
  const value = 'test-value';
  const label = 'test-label';
  let mockFunction: any;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render a Textarea', () => {
    const component = (
      <Textarea value={value} onChange={mockFunction} label={label} />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('textarea')).toBeInTheDocument();
  });

  it('should render a Textarea with aria label = test-label', () => {
    const component = (
      <Textarea value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const textarea = getByTestId('textarea');

    expect(textarea).toHaveAttribute('aria-label', label);
  });

  it('should render a Textarea with value = test-value', () => {
    const component = (
      <Textarea value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const textarea = getByTestId('textarea');

    expect(textarea).toHaveDisplayValue(value);
  });

  it('should call onChange event handler when input', () => {
    const component = (
      <Textarea value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const textarea = getByTestId('textarea');

    userEvent.type(textarea, 'updated content');
    expect(mockFunction).toHaveBeenCalledTimes(15);
  });
});
