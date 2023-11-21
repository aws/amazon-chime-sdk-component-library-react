// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import VideoGrid from './';
import VideoTile from '../VideoTile';

export default {
  title: 'UI Components/Video/VideoGrid',
  component: VideoGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export const _VideoGrid = (args) => {
  const tiles = new Array(args.size).fill(0).map((_, index) => {
    const isFeatured = args.layout === 'featured' && index === 0;
    return (
      <VideoTile
        style={{
          border: '1px solid grey',
          gridArea: isFeatured ? 'ft' : '',
        }}
        nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`}
        key={index}
      />
    );
  });

  return (
    <div style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}>
      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>
    </div>
  );
};

_VideoGrid.argTypes = {
  size: { control: 'number' },
  layout: { control: 'select', options: ['standard', 'featured'] },
};

_VideoGrid.args = {
  size: 4,
  layout: 'standard',
};

_VideoGrid.story = {
  name: 'VideoGrid',
};
