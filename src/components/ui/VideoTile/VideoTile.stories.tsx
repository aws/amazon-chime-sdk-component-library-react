// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { VideoTile } from './';
import { Flex } from '../Flex';

export default {
  title: 'UI Components/Video/VideoTile',
  component: VideoTile,
};

export const _VideoTile = (args) => {
  return (
    <Flex css="height: 100vh" layout="fill-space-centered">
      <div style={{ height: '15rem', width: '25rem', margin: '2rem auto' }}>
        <VideoTile nameplate={args.nameplate} />
      </div>
    </Flex>
  );
};

_VideoTile.argTypes = {
  nameplate: { control: 'text' },
  objectFit: { table: { disable: true } },
};

_VideoTile.args = {
  nameplate: 'Test name',
};

_VideoTile.story = {
  name: 'VideoTile',
};
