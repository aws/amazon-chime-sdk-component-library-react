// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import IconButton from '../../../../src/components/ui/Button/IconButton';
import Meeting from '../../../../src/components/ui/icons/Meeting';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Icon Button', () => {

  it('should render an icon Button', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it('should render an icon Button with icon span visible', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} icon={<Meeting />} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const iconSpan = getByTestId('button-icon');

    expect(iconSpan).toBeInTheDocument();
  });

  it('should render an icon Button with label span visually hidden', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} icon={<Meeting />} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const labelSpan = getByTestId('button-label');

    expect(labelSpan).toHaveStyle({ height: '1px', width: '1px' });
  });

});