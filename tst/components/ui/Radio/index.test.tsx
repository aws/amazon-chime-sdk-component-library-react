// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import Add from '../../../../src/components/ui/icons/Add';
import Radio from '../../../../src/components/ui/Radio';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

let mockFunction: any, value: string, label: string;

describe('Radio', () => {
  beforeEach(() => {
    label = 'test-label';
    value = 'test-value';
    mockFunction = jest.fn();
  });

  it('should render a Radio contains HiddenRadio component in the document', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');

    expect(hiddenRadio).toBeInTheDocument();
  });

  it('should render a Radio contains StyledRadio component in the document', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const styledRadio = getByTestId('styled-radio');

    expect(styledRadio).toBeInTheDocument();
  });

  it('should render a Radio with an attribute value', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');

    expect(hiddenRadio).toHaveAttribute('value', 'test-value');
  });

  it('should render a Radio with an attribute type=radio', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');

    expect(hiddenRadio).toHaveAttribute('type', 'radio');
  });

  it('should render a unchecked radio', () => {
    const component = (
      <Radio
        value={value}
        onChange={mockFunction}
        label={label}
        checked={false}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');

    expect(hiddenRadio).not.toHaveAttribute('checked');
  });

  it('should render a checked Radio', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} checked label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');

    expect(hiddenRadio).toHaveAttribute('checked');
  });

  it('should call onChange event handler once if selects the Radio', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const styledRadio = getByTestId('styled-radio');

    fireEvent.click(styledRadio);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should become focused if selects the Radio', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');
    const styledRadio = getByTestId('styled-radio');

    fireEvent.click(styledRadio);
    expect(hiddenRadio).toHaveFocus();
  });

  it('should become focused if unselects the Radio', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const hiddenRadio = getByTestId('hidden-radio');
    const styledRadio = getByTestId('styled-radio');

    fireEvent.click(styledRadio);
    expect(hiddenRadio).toHaveFocus();
  });

  it('should render a label component', () => {
    const component = (
      <Radio value={value} onChange={mockFunction} label={label} />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const radioLabel = getByText('test-label');

    expect(radioLabel).toBeInTheDocument();
  });

  it('should render an Icon component', () => {
    const component = (
      <Radio
        value={value}
        onChange={mockFunction}
        label={label}
        icon={<Add width="2rem" />}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const radioIcon = getByTestId('styled-radio-icon');

    expect(radioIcon).toBeInTheDocument();
  });
});
