// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Portal from '../../../../src/components/ui/Portal';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Portal', () => {
  it('should render a Portal without rootId', () => {
    const component = (
      <Portal>
        <span>Portal content</span>
      </Portal>
    );
    renderWithTheme(lightTheme, component);
    const divs = document.querySelectorAll('div');

    expect(divs[1]).toContainHTML('<span>Portal content</span>');
  });

  it('should render a Portal with rootId', () => {
    const component = (
      <>
        <div id="root-div">Root Div</div>
        <Portal rootId="root-div">
          <div>Portal content</div>
        </Portal>
      </>
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const divElement = getByText('Root Div');

    expect(divElement).toContainHTML('Root Div<div>Portal content</div>');
  });
});
