// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Navbar from '../../../../src/components/ui/Navbar';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Navbar', () => {
  it('should render a NavBar', () => {
    const component = <Navbar />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    expect(getByTestId('navigation-bar')).toBeInTheDocument();
  });

  it('should render a NavBar with props', () => {
    const component = <Navbar children={<li>test</li>} className="testClass" />;
    const { getByTestId, container } = renderWithTheme(lightTheme, component);
    expect(container.getElementsByTagName('li').length).toBe(1);
    expect(container.getElementsByClassName('testClass')).toBeInTheDOM;
  });
});
