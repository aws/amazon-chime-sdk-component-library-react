// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { number, select } from '@storybook/addon-knobs';

import VideoGrid from './';
import VideoTile from '../VideoTile';
import VideoGridDocs from './VideoGrid.mdx';

export default {
  title: 'UI Components/Video/VideoGrid',
  parameters: {
    docs: {
      page: VideoGridDocs.parameters.docs.page().props.children.type,
    },
  },
  component: VideoGrid,
};

export const _VideoGrid = () => {
  const size = number('size', 4);
  const layout = select('layout', ['standard', 'featured'], 'standard');
  const tiles = new Array(size).fill(0).map((_, index) => {
    const isFeatured = layout === 'featured' && index === 0;
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
      <VideoGrid layout={layout}>{tiles}</VideoGrid>
    </div>
  );
};

_VideoGrid.story = {
  name: 'VideoGrid',
};
