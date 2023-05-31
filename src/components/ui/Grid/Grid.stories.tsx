// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../Flex';
import Grid from './';
import Cell from './Cell';

export default {
  title: 'UI Components/Grid',
  component: Grid,
  excludeStories: ['Child'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Child: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <Flex
    layout="fill-space-centered"
    style={{ backgroundColor: '#232222', color: 'white' }}
  >
    {children}
  </Flex>
);

export const BasicGrid = (args) => {
  const children = new Array(args.size)
    .fill(0)
    .map((x, i) => <Child key={i}>Child</Child>);

  return (
    <div style={{ height: '100vh' }}>
      <Grid {...args}>{children}</Grid>
    </div>
  );
};

BasicGrid.argTypes = {
  size: { control: 'number' },
  responsive: { control: 'boolean' },
  gridGap: { control: 'text' },
  gridAutoFlow: { control: 'text' },
  gridTemplateRows: { control: 'text' },
  gridTemplateColumns: { control: 'text' },
};

BasicGrid.args = {
  size: 4,
  responsive: true,
  gridGap: '.5rem',
  gridAutoFlow: '',
  gridTemplateRows: '',
  gridTemplateColumns: 'repeat(2, 1fr) 4fr',
};

BasicGrid.story = 'Basic Grid';

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
          md: `"other main sidebar"
              "other main sidebar"
              "other main sidebar"`,
          lg: `"other other sidebar"
              "main main sidebar"
              "main main sidebar"`,
          xl: `"other main sidebar"
              "other main sidebar"
              "other main sidebar"`,
        }}
      >
        <Child>Other</Child>
        <Child>Other</Child>
        <Cell gridArea={{ md: 'main' }}>
          <Child>Main</Child>
        </Cell>
        <Cell gridArea={{ md: 'sidebar' }}>
          <Child>SideBar</Child>
        </Cell>
      </Grid>
    </div>
  );
};

NamedGrid.story = {
  name: 'Named Areas Grid',
};
