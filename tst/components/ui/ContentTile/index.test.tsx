// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import ContentTile from '../../../../src/components/ui/ContentTile';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('ContentTile', () => {
  it('should render a basic ContentTile', () => {
    const component = <ContentTile nameplate="Test nameplate" />;
    const { getByTestId, getByText } = renderWithTheme(lightTheme, component);
    const el = getByTestId('video-tile');
    expect(el).toBeInTheDocument();
    expect(getByText('Test nameplate')).toBeInTheDocument();
  });
});
