// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Badge from '../../../../src/components/ui/Badge';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Badge', () => {
  it('should render a Badge with a number value and default status', () => {
    const component = <Badge value={100} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('badge');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('100');
  });

  it('should render a Badge with a string value and default status', () => {
    const component = <Badge value={'100+'} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('badge');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('100+');
  });

  it('should render a Badge with a number value and alert status', () => {
    const component = <Badge value={50} status={'alert'} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('badge');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('50');
  });
});
