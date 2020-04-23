import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Video/VideoGrid', module).add('VideoGrid', () => {
  const size = number('Size', 3);
  const tiles = new Array(size).fill(0).map((x, index) => <Tile key={index} />);

  return (
    <div style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}>
      <VideoGrid>{tiles}</VideoGrid>
    </div>
  );
});
