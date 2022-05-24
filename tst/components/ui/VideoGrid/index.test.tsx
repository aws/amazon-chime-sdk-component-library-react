// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import VideoGrid from '../../../../src/components/ui/VideoGrid';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('VideoGrid', () => {
  let mockFunction: any, nameplate: string;
  beforeEach(() => {
    nameplate = 'test-nameplate';
    mockFunction = jest.fn();
  });

  it('should render VideoGrid', () => {
    const component = <VideoGrid size={1} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('video-grid')).toBeInTheDocument();
  });

  it('should render VideoGrid with size = 3', () => {
    const tiles = [1, 2, 3].map((item) => (
      <div key={item}>{`content-${item}`}</div>
    ));

    const component = <VideoGrid size={3}>{tiles}</VideoGrid>;
    const { getAllByText } = renderWithTheme(lightTheme, component);
    const result = getAllByText(/content-\d/);

    expect(result).toHaveLength(3);
  });

  it('should render VideoGrid with matched content', () => {
    const tiles = [1, 2].map((item) => (
      <div key={item}>{`content-${item}`}</div>
    ));

    const component = <VideoGrid size={2}>{tiles}</VideoGrid>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const videoGrid = getByTestId('video-grid');

    expect(videoGrid).toHaveTextContent('content-1');
    expect(videoGrid).toHaveTextContent('content-2');
  });
});
