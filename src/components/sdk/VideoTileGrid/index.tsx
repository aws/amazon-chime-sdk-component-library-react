// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { ContentShare } from '../ContentShare';
import { LocalVideo } from '../LocalVideo';
import { FeaturedRemoteVideos } from '../FeaturedRemoteVideos';
import { VideoGrid } from '../../ui/VideoGrid';
import { BaseProps } from '../../ui/Base';

const fluidStyles = `
  height: 100%;
  width: 100%;
`;

const staticStyles = `
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 18vw;
  min-width: 200px;
  height: auto;

  video {
    position: static;
  }
`;

export const VideoTileGrid: React.FC<BaseProps> = props => {
  const { tileId: featureTileId } = useFeaturedTileState();
  const { tiles } = useRemoteVideoTileState();
  const { isSomeoneSharing } = useContentShareState();
  const { isVideoEnabled } = useLocalVideo();
  const featured = !!featureTileId || isSomeoneSharing;
  const remoteSize = tiles.length + (isSomeoneSharing ? 1 : 0);
  const gridSize =
    remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;

  return (
    <VideoGrid {...props} size={gridSize} layout={featured ? 'featured' : null}>
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
