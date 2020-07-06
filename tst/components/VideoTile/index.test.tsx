// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import VideoTile from '../../../src/components/VideoTile';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('VideoTile', () => {

  let mockFunction: any, nameplate: string;
  beforeEach(() => {
    nameplate = 'test-nameplate';
    mockFunction = jest.fn();
  });

  it('should render a VideoTile', () => {
    const component = <VideoTile nameplate={nameplate} bindVideoTile={mockFunction} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('video-tile')).toBeInTheDocument();
  });

  it('should call bindVideoTile once when rendering', () => {
    const component = <VideoTile nameplate={nameplate} bindVideoTile={mockFunction} />;
    renderWithTheme(lightTheme, component);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should render a VideoTile with name plate header', () => {
    const component = <VideoTile nameplate={nameplate} bindVideoTile={mockFunction} />;
    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText('test-nameplate')).toBeInTheDocument();
  });
});