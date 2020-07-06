// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';

import Flex from '../Flex';
import { Grid } from './';
import { Cell } from './Cell';

export default {
  title: 'Grid',
};

const Child = () => (
  <Flex
    layout="fill-space-centered"
    style={{ backgroundColor: '#232222', color: 'white' }}
  >
    Child
  </Flex>
);

export const BasicGrid = () => {
  const childCount = number('Grid items count', 5);
  const children = new Array(childCount)
    .fill(0)
    .map((x, i) => <Child key={i} />);

  const props = {
    responsive: boolean('responsive', true),
    gridGap: text('gridGap', '.5rem'),
    gridAutoFlow: text('gridAutoFlow', ''),
    gridTemplateRows: text('gridTemplateRows', ''),
    gridTemplateColumns: text('gridTemplateColumns', 'repeat(2, 1fr) 4fr'),
  };

  return (
    <div style={{ height: '100vh' }}>
      <Grid {...props}>{children}</Grid>
    </div>
  );
};

export const NamedGrid = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Grid
        gridGap={['.25rem', '.5rem']}
        gridTemplateColumns={{
          xs: '1fr',
          md: '1fr 1fr 4rem',
          lg: '1fr 1fr 7rem',
        }}
        gridTemplateAreas={{
          md: `"other main sidebar" "other main sidebar" "other main sidebar"`,
          lg: `"other other sidebar" "main main sidebar" "main main sidebar"`,
          xl: `"other main sidebar" "other main sidebar" "other main sidebar"`,
        }}
      >
        <Child />
        <Child />
        <Cell gridArea={{ md: 'main' }}>
          <Child />
        </Cell>
        <Cell gridArea={{ md: 'sidebar' }}>
          <Child />
        </Cell>
      </Grid>
    </div>
  );
};

NamedGrid.story = {
  name: 'Named grid areas',
};
