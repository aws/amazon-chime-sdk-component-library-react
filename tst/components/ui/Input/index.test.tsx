// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import Input from '../../../../src/components/ui/Input';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';
import Crown from '../../../../src/components/ui/icons/Crown';

describe('Input', () => {
  const value = 'input-value';
  let mockFunction: any;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render an Input', () => {
    const component = <Input value={value} onChange={mockFunction} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('input')).toBeInTheDocument();
  });

  it('should render an Input with value', () => {
    const component = <Input value={value} onChange={mockFunction} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveValue(value);
  });

  it('should render an Input with type = text', () => {
    const component = <Input value={value} onChange={mockFunction} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should call onChange event handler once if changes input', () => {
    const component = <Input value={value} onChange={mockFunction} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'input-value-updated' } });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should render an Input with placeholder', () => {
    const placeholder = 'this is a placeholder';
    const component = <Input value='' onChange={mockFunction} placeholder={placeholder} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('placeholder', placeholder);
  });

  it('should render an Input with icon', () => {
    const iconTestId = 'crown-icon';
    const component = <Input leadingIcon={<Crown data-testid={iconTestId} />} value={value} onChange={mockFunction} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId(iconTestId)).toBeInTheDocument();
  });

});