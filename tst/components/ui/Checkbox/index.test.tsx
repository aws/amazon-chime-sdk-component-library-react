// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import Checkbox from '../../../../src/components/ui/Checkbox';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

let mockFunction: any, value: string;

describe('Checkbox', () => {
  beforeEach(() => {
    value = 'test-value';
    mockFunction = jest.fn();
  });

  it('should render a Checkbox contains HiddenCheckbox component in the document', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenCheckbox = getByTestId('hidden-checkbox');

    expect(hiddenCheckbox).toBeInTheDocument();
  });

  it('should render a Checkbox contains StyledCheckbox component in the document', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const styledCheckbox = getByTestId('styled-checkbox');

    expect(styledCheckbox).toBeInTheDocument();
  });

  it('should render a Checkbox with an attribute value', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenCheckbox = getByTestId('hidden-checkbox');

    expect(hiddenCheckbox).toHaveAttribute('value', 'test-value');
  });

  it('should render a Checkbox with an attribute type=checkbox', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenCheckbox = getByTestId('hidden-checkbox');

    expect(hiddenCheckbox).toHaveAttribute('type', 'checkbox');
  });

  it('should render a unchecked Checkbox', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('check')).not.toBeInTheDocument();
  });

  it('should render a checked Checkbox', () => {
    const component = (
      <Checkbox value={value} onChange={mockFunction} checked />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('check')).toBeInTheDocument();
  });

  it('should call onChange event handler once if ticks the checkbox', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const styledCheckbox = getByTestId('styled-checkbox');

    fireEvent.click(styledCheckbox);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should become focused if ticks the checkbox', () => {
    const component = <Checkbox value={value} onChange={mockFunction} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenCheckbox = getByTestId('hidden-checkbox');
    const styledCheckbox = getByTestId('styled-checkbox');

    fireEvent.click(styledCheckbox);
    expect(hiddenCheckbox).toHaveFocus();
  });

  it('should become focused if unticks the checkbox', () => {
    const component = (
      <Checkbox value={value} onChange={mockFunction} checked />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenCheckbox = getByTestId('hidden-checkbox');
    const styledCheckbox = getByTestId('styled-checkbox');

    fireEvent.click(styledCheckbox);
    expect(hiddenCheckbox).toHaveFocus();
  });

  it('should become unchecked if unticks the checkbox', () => {
    const component = (
      <Checkbox value={value} onChange={mockFunction} checked />
    );
    const { getByTestId, queryByTestId } = renderWithTheme(
      lightTheme,
      component
    );
    const styledCheckbox = getByTestId('styled-checkbox');

    fireEvent.click(styledCheckbox);
    expect(queryByTestId('check')).toBeInTheDocument();
  });
});
