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
      level={select('level', {1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" }, "h1")}
      as={text('as', 'p')}
    >Change my <code>level</code> or <code>as</code> prop
    </Heading>
  </Flex>
);

BasicHeading.story = {
  name: 'Basic heading',
};
