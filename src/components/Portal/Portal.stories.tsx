import React from 'react';

import Portal from '.';
import Flex from '../Flex';

export default {
  title: 'Portal',
};

// Simple story for Portal element
export const _Portal = () => (
  <Flex layout="fill-space-centered">
    <div id='root-div'>Root Div</div>
    <Portal rootId='root-div'><div>Portal content</div></Portal>
  </Flex>
);

_Portal.story = {
  name: 'Portal',
};