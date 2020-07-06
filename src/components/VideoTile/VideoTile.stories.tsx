// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { VideoTile } from './';

export default {
  title: 'Video/VideoTile',
};

export const _VideoTile = () => {
  return (
    <div style={{ width: '45%', margin: '2rem auto' }}>
      <VideoTile bindVideoTile={() => {}} nameplate="Test name" />
    </div>
  );
};

_VideoTile.story = {
  name: 'VideoTile',
};
