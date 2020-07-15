// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';
import { Information } from '../../../../src/components/ui/icons';
import NavbarItem from '../../../../src/components/ui/Navbar/NavbarItem';

describe('NavbarItem', () => {
  it('should render a NavbarItem', () => {
    const component = <NavbarItem
      icon={<Information />}
      onClick={() => console.log('Information clicked')}
      label="Bridge Information"
    />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const navbarItem = getByTestId('navbar-item');
    expect(navbarItem).toBeInTheDocument();
  });

  it('should render a label when passed', () => {
    const component = <NavbarItem
      icon={<Information />}
      onClick={() => console.log('Information clicked')}
      label="Bridge Information"
    />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const navbarItem = getByTestId('navbar-label');
    expect(navbarItem).toHaveTextContent('Bridge Information');
  });

  it('should render a icon button', () => {
    const component = <NavbarItem
      icon={<Information />}
      onClick={() => console.log('Information clicked')}
      label="Bridge Information"
    />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    expect(getByTestId('control-bar-item')).toBeInTheDocument();
  });

  it('should call onClick once if clicked on navbar label', () => {
    const component = <NavbarItem
      icon={<Information />}
      onClick={jest.fn()}
      label="Bridge Information"
    />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const button = getByTestId('navbar-label');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(component.props.onClick).toHaveBeenCalledTimes(1);
  });
});