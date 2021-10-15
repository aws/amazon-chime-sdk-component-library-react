// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import PopOverItem from '../../../../src/components/ui/PopOver/PopOverItem';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('', () => {
  it('should render a PopOver item', () => {
    const component = <PopOverItem />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover-item');

    expect(element).toBeInTheDocument();
  });

  it('should render as a "button" element with an button Aria role', () => {
    const component = <PopOverItem as="button" />;
    const { getByRole } = renderWithTheme(lightTheme, component);
    const element = getByRole('button');

    expect(element).toBeInTheDocument();
  });

  it('should render as an "a" element with an Anchor Aria role', () => {
    const component = <PopOverItem as="a" href="https://www.amazon.com" />;
    const { getByRole } = renderWithTheme(lightTheme, component);
    const element = getByRole('link');

    expect(element).toBeInTheDocument();
  });

  it('should render a check icon if checked', () => {
    const component = <PopOverItem checked />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const element = queryByTestId('popover-check');

    expect(element).toBeInTheDocument();
  });

  it('should not render a check icon if not checked', () => {
    const component = <PopOverItem />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const element = queryByTestId('popover-check');

    expect(element).not.toBeInTheDocument();
  });

  it('should render children', () => {
    const component = <PopOverItem children={<span>Children text</span>} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const element = getByText('Children text');

    expect(element).toBeInTheDocument();
  });
});
