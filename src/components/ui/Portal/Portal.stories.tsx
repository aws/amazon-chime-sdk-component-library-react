// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Portal from './';
import Flex from '../Flex';

export default {
  title: 'UI Components/Portal',
  component: Portal,
};

export const _Portal = (args) => (
  <Flex layout="equal-columns" style={{ width: '30rem' }}>
    <Portal rootId={args.rootId}>
      <div
        style={{
          backgroundColor: 'lightgray',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      >
        Portal content
      </div>
    </Portal>
    <div
      id="root-div-1"
      style={{
        border: '1px solid lightblue',
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      Root Div 1
    </div>
    <div
      id="root-div-2"
      style={{
        border: '1px solid lightgreen',
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      Root Div 2
    </div>
  </Flex>
);

_Portal.argTypes = {
  rootId: { control: 'select', options: ['root-div-1', 'root-div-2'] },
};

_Portal.args = {
  rootId: 'root-div-1',
};

_Portal.story = {
  name: 'Portal',
};
