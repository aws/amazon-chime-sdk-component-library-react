// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import Badge from '../../../../src/components/ui/Badge';
import { Information } from '../../../../src/components/ui/icons';
import NavbarItem from '../../../../src/components/ui/Navbar/NavbarItem';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('NavbarItem', () => {
  it('should render a NavbarItem', () => {
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={() => console.log('Information clicked')}
        label="Bridge Information"
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const navbarItem = getByTestId('navbar-item');
    expect(navbarItem).toBeInTheDocument();
  });

  it('should render a label when passed and prop "showLabel" is true', () => {
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={() => console.log('Information clicked')}
        label="Bridge Information"
        showLabel
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const navbarItem = getByTestId('navbar-label');
    expect(navbarItem).toHaveTextContent('Bridge Information');
  });

  it('should render an iconButton', () => {
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={() => console.log('Information clicked')}
        label="Bridge Information"
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('should call onClick once if clicked on navbar label', () => {
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={jest.fn()}
        label="Bridge Information"
        showLabel
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const button = getByTestId('navbar-label');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(component.props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a PopOver component if there are children', () => {
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={jest.fn()}
        label="Bridge Information"
        showLabel
      >
        <p>Test Child</p>
      </NavbarItem>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const popOver = getByTestId('popover');
    expect(popOver).toBeInTheDocument();
  });

  it('should render an additional component via the "badge" prop', () => {
    const badge = <Badge value="11" />;
    const component = (
      <NavbarItem
        icon={<Information />}
        onClick={jest.fn()}
        label="Bridge Information"
        showLabel
        badge={badge}
      >
        <p>Test Child</p>
      </NavbarItem>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    expect(getByTestId('badge')).toBeInTheDocument();
  });
});
