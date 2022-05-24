// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import NavbarHeader from '../../../../src/components/ui/Navbar/NavbarHeader';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('NavbarHeader', () => {
  it('should render a title', () => {
    const component = <NavbarHeader title="Navigation" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    expect(getByText('Navigation')).toBeInTheDocument();
  });

  it('should render a close button when onClose is passed', () => {
    const component = <NavbarHeader title="Navigation" onClose={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    expect(getByLabelText('Close')).toBeInTheDocument();
  });

  it('should call onClose once if clicked on close button', () => {
    const component = <NavbarHeader title="Navigation" onClose={jest.fn()} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const closeButton = getByTestId('button');
    fireEvent.click(closeButton);
    expect(component.props.onClose).toHaveBeenCalledTimes(1);
  });
});
