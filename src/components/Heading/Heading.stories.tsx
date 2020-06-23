import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import Flex from '../Flex';
import Heading from './';

export default {
  title: 'Headings',
};

export const BasicHeading = () => (
  <Flex layout="fill-space-centered" style={{ "width": "auto" }}>
    <Heading
      css={text('css', 'color: palevioletred;')}
      level={select('level', {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }, 1)}
      tag={text('tag', 'p')}
    >
      Change my <code>level</code> or <code>as</code> prop
    </Heading>
  </Flex>
);

BasicHeading.story = {
  name: 'Basic heading',
};
