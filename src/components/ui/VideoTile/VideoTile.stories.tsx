// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { VideoTile } from './';
import { Flex } from '../Flex';
import VideoTileDocs from './VideoTile.mdx';

export default {
  title: 'UI Components/Video/VideoTile',
  parameters: {
    docs: {
      page: VideoTileDocs.parameters.docs.page().props.children.type,
    },
  },
  component: VideoTile,
};

export const _VideoTile = () => {
  return (
    <Flex css="height: 100vh" layout="fill-space-centered">
      <div style={{ height: '15rem', width: '25rem', margin: '2rem auto' }}>
        <VideoTile nameplate="Test name" />
      </div>
    </Flex>
  );
};

_VideoTile.story = {
  name: 'VideoTile',
};
