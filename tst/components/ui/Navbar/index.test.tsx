// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import '@testing-library/jest-dom';

import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';
import Navbar from '../../../../src/components/ui/Navbar';

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
