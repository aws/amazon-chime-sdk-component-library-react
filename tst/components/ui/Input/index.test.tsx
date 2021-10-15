// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

import Crown from '../../../../src/components/ui/icons/Crown';
import Input from '../../../../src/components/ui/Input';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Input', () => {
  const value = 'input-value';
  let mockFunction: any;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render an Input', () => {
    const component = <Input value={value} onChange={mockFunction} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('input')).toBeInTheDocument();
  });

  it('should render an Input with value', () => {
    const component = <Input value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveValue(value);
  });

  it('should render an Input with type = text', () => {
    const component = <Input value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should call onChange event handler once if changes input', () => {
    const component = <Input value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    userEvent.type(input, 'hello');
    expect(mockFunction).toHaveBeenCalledTimes(5);
  });

  it('should not render a clear button when showClear is false', () => {
    const component = (
      <Input value={value} onChange={mockFunction} showClear={false} />
    );
    const { queryByLabelText } = renderWithTheme(lightTheme, component);

    expect(queryByLabelText('clear')).toBeNull();
  });

  it('should clear input when clear button is pressed', () => {
    const Consumer = () => {
      const [val, setVal] = useState('');
      const onChange = (e: any) => {
        setVal(e.target.value);
      };

      return <Input value={val} onChange={onChange} />;
    };

    const { getByLabelText, getByTestId, debug } = renderWithTheme(
      lightTheme,
      <Consumer />
    );

    const input = getByTestId('input');
    const btn = getByLabelText('clear');

    userEvent.type(input, 'hello world');
    userEvent.click(btn);
    expect(input).toHaveValue('');
  });

  it('should call onClear when clear button is pressed', () => {
    const component = (
      <Input value={value} onClear={mockFunction} onChange={() => {}} />
    );
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    const btn = getByLabelText('clear');

    userEvent.click(btn);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should render an Input with placeholder', () => {
    const placeholder = 'this is a placeholder';
    const component = (
      <Input value="" onChange={mockFunction} placeholder={placeholder} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('placeholder', placeholder);
  });

  it('should render an Input with icon', () => {
    const iconTestId = 'crown-icon';
    const component = (
      <Input
        leadingIcon={<Crown data-testid={iconTestId} />}
        value={value}
        onChange={mockFunction}
      />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId(iconTestId)).toBeInTheDocument();
  });
});
