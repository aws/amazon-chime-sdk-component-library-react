// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import VideoTile from '../../../../src/components/ui/VideoTile';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('VideoTile', () => {
  it('should render a VideoTile', () => {
    const component = <VideoTile nameplate="test-nameplate" />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('video-tile')).toBeInTheDocument();
  });

  it('should render a VideoTile with name plate header', () => {
    const component = <VideoTile nameplate="test-nameplate" />;
    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText('test-nameplate')).toBeInTheDocument();
  });
});
