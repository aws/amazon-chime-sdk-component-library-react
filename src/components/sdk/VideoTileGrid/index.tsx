// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useVideoTileState } from '../../../providers/VideoTileProvider';
import { useContentShare } from '../../../providers/ContentShareProvider';
import { useFeaturedTile } from '../../../providers/FeaturedVideoTileProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { ContentShare } from '../ContentShare';
import { LocalVideo } from '../LocalVideo';
import { FeaturedRemoteVideos } from '../FeaturedRemoteVideos';
import { VideoGrid } from '../../ui/VideoGrid';

const fluidStyles = `
  height: 100%;
  width: 100%;
`;

const staticStyles = `
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 18vw;
  height: auto;

  video {
    position: static;
  }
`;

export const VideoTileGrid: React.FC = () => {
  const featuredTile = useFeaturedTile();
  const { tiles } = useVideoTileState();
  const { isSomeoneSharing } = useContentShare();
  const { isVideoEnabled } = useLocalVideo();
  const featured = !!featuredTile || isSomeoneSharing;
  const remoteSize = tiles.length + (isSomeoneSharing ? 1 : 0);
  const gridSize =
    remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;

  return (
    <VideoGrid size={gridSize} layout={featured ? 'featured' : null}>
      <FeaturedRemoteVideos />
      <ContentShare css="grid-area: ft;" />
      <LocalVideo
        nameplate="Me"
        css={gridSize > 1 ? fluidStyles : staticStyles}
      />
    </VideoGrid>
  );
};

export default VideoTileGrid;
