// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { number } from '@storybook/addon-knobs';

import VideoGrid from './';

const Tile = () => (
  <div
    style={{
      padding: '1rem',
      border: '1px solid #212020',
      backgroundColor: '#424242',
      color: 'white',
    }}
  >
    Tile
  </div>
);

export default {
  title: 'UI Components/Video/VideoGrid',
};

export const _VideoGrid = () => {
  const size = number('Size', 3);
  const tiles = new Array(size).fill(0).map((x, index) => <Tile key={index} />);

  return (
    <div style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}>
      <VideoGrid size={size}>{tiles}</VideoGrid>
    </div>
  );
};

_VideoGrid.story = {
  name: 'VideoGrid',
};
