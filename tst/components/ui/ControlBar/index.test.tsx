// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ControlBar from '../../../../src/components/ui/ControlBar';
import lightTheme from '../../../../src/theme/light'
import { renderWithTheme } from '../../../test-helpers';
import ControlBarItem from '../../../../src/components/ui/ControlBar/ControlBarItem';
import { controlBarItemProps } from './ControlBarItem.test';

describe('ControlBar', () => {
  it('renders a ControlBar', () => {
    const component = <ControlBar layout='top' showLabels><p>Dummy Content</p></ControlBar>
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const el = getByTestId('control-bar');
    expect(el).toBeInTheDocument();
  });

  it('should pass showLabels prop to controlBarContext', async () => {
    const component = (
      <ControlBar layout='top' showLabels>
        <ControlBarItem {...controlBarItemProps} />
      </ControlBar>
    );
    const { findAllByText } = renderWithTheme(lightTheme, component);
    const el = findAllByText('test label');
    expect((await el).length).toEqual(2); // the label made by IconButton is visually hidden, so we have 2
  });
});