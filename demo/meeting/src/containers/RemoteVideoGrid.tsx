// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  useVideoTileState,
  VideoGrid,
  RemoteVideos
} from 'amazon-chime-sdk-component-library-react';

const RemoteVideoGrid: React.FC = () => {
  const { tiles } = useVideoTileState();

  return (
    <VideoGrid size={tiles.length}>
      <RemoteVideos />
    </VideoGrid>
  );
};

export default RemoteVideoGrid;
