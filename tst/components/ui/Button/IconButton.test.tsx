// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Badge from '../../../../src/components/ui/Badge';
import IconButton from '../../../../src/components/ui/Button/IconButton';
import Meeting from '../../../../src/components/ui/icons/Meeting';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Icon Button', () => {
  it('should render an icon Button', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it('should render an icon Button with icon span visible', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} icon={<Meeting />} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const iconSpan = getByTestId('button-icon');

    expect(iconSpan).toBeInTheDocument();
  });

  it('should render an icon Button with label span visually hidden', () => {
    const labelText = 'Icon Button';
    const component = <IconButton label={labelText} icon={<Meeting />} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const labelSpan = getByTestId('button-label');

    expect(labelSpan).toHaveStyle({ height: '1px', width: '1px' });
  });

  it('should render the value of the "badge" prop if that value exists', () => {
    const badgeContent = <Badge className="test-badge" value={'test'} />;
    const labelText = 'Icon Button';
    const component = (
      <IconButton label={labelText} badge={badgeContent} icon={<Meeting />} />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const el = getByText('test');
    expect(el).toBeInTheDocument();
  });
});
