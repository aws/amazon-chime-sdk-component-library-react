// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import ControlBarButton from '../../../../src/components/ui/ControlBar/ControlBarButton';
import { Sound } from '../../../../src/components/ui/icons';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

export const controlBarItemProps = {
  icon: <Sound />,
  label: 'test label',
  onClick: () => null,
};

export const controlBarItemWithPopOverProps = {
  icon: <Sound />,
  label: 'test label',
  onClick: () => null,
  popOver: [
    {
      onClick: () => console.log('popover item clicked'),
      children: <span>option 1</span>,
    },
  ],
};

describe('ControlBarButton', () => {
  it('renders a ControlBarButton', () => {
    const component = <ControlBarButton {...controlBarItemProps} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('control-bar-item');
    expect(el).toBeInTheDocument();
  });

  it('should render a PopOver if multiple options are available', () => {
    const component = <ControlBarButton {...controlBarItemWithPopOverProps} />;
    const { getByTestId, getByText } = renderWithTheme(lightTheme, component);
    const button = getByTestId('control-bar-item-caret');
    fireEvent.click(button);
    const el = getByText('option 1');
    expect(el).toBeInTheDocument();
    fireEvent.click(button); // We will get a React warning if we don't return the UI to the initial state
  });

  it('should render a PopOver if children are present', () => {
    const component = (
      <ControlBarButton {...controlBarItemWithPopOverProps}>
        <p>Child element</p>
      </ControlBarButton>
    );

    const { getByTestId, getByText } = renderWithTheme(lightTheme, component);
    const button = getByTestId('control-bar-item-caret');
    fireEvent.click(button);
    const el = getByText('Child element');
    expect(el).toBeInTheDocument();
    fireEvent.click(button); // We will get a React warning if we don't return the UI to the initial state
  });
});
