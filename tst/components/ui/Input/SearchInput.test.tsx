// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import SearchInput from '../../../../src/components/ui/Input/SearchInput';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('SearchInput', () => {
  let mockFunction: any;
  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('should render an SearchInput', () => {
    const component = <SearchInput value={''} onChange={mockFunction} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('input')).toBeInTheDocument();
  });

  it('should render an SearchInput with type = search', () => {
    const component = (
      <SearchInput value={''} onChange={mockFunction} sizing={'sm'} />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('type', 'search');
  });

  it('should render an SearchInput with icon', () => {
    const component = <SearchInput value={''} onChange={mockFunction} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('search-icon')).toBeInTheDocument();
  });
});
