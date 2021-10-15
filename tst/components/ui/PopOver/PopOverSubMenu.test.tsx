// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import PopOverItem from '../../../../src/components/ui/PopOver/PopOverItem';
import PopOverSubMenu from '../../../../src/components/ui/PopOver/PopOverSubMenu';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('PopOver submenu', () => {
  it('should render a popover submenu component', () => {
    const component = <PopOverSubMenu text="submenu" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const element = getByText('submenu');

    expect(element).toBeInTheDocument();
  });

  it('should open a submenu of options when clicked', () => {
    const component = (
      <PopOverSubMenu
        text="submenu"
        children={<PopOverItem children={<span>Option 1</span>} />}
      />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const submenu = getByText('submenu');
    fireEvent.click(submenu);
    const option1 = getByText('Option 1');

    expect(option1).toBeInTheDocument();
    fireEvent.click(submenu);
  });

  it('should close the new popover when clicked twice', () => {
    const component = (
      <PopOverSubMenu
        text="submenu"
        children={<PopOverItem children={<span>Option 1</span>} />}
      />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const submenu = getByText('submenu');
    fireEvent.click(submenu);
    const option1 = getByText('Option 1');
    fireEvent.click(submenu);

    expect(option1).not.toBeInTheDocument();
  });

  it('should render a caret', () => {
    const component = <PopOverSubMenu text="submenu" />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const caret = getByTestId('submenu-caret');

    expect(caret).toBeInTheDocument();
  });
});
