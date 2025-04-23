// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { BaseProps } from '../../ui/Base';
import { Layout, VideoGrid } from '../../ui/VideoGrid';
import { ContentShare } from '../ContentShare';
import { FeaturedRemoteVideos } from '../FeaturedRemoteVideos';
import { LocalVideo } from '../LocalVideo';
import { RemoteVideos } from '../RemoteVideos';

const fluidStyles = `
  height: 100%;
  width: 100%;
`;

const staticStyles = `
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 20vw;
  max-height: 30vh;
  height: auto;

  video {
    position: static;
  }
`;

interface Props extends BaseProps {
  /** A component to render when there are no remote videos present */
  noRemoteVideoView?: React.ReactNode;
  /** The layout of the grid. */
  layout?: Layout;
}

export const VideoTileGrid: React.FC<React.PropsWithChildren<Props>> = ({
  noRemoteVideoView,
  layout = 'featured',
  ...rest
}) => {
  const { tileId: featureTileId } = useFeaturedTileState();
  const { tiles: remoteVideoTiles } = useRemoteVideoTileState();
  const { tiles: contentShareTiles } = useContentShareState();
  const { isVideoEnabled } = useLocalVideo();

  const hasContentShare = contentShareTiles.length > 0;
  // contentShareSize is counted as 1 in the grid size calculation, since only the most
  // recent content share tile is displayed in the featured area when multiple content shares exist
  const contentShareSize = hasContentShare ? 1 : 0;
  const remoteSize = remoteVideoTiles.length + contentShareSize;
  const gridSize =
    remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;

  const featured =
    (layout === 'featured' && !!featureTileId) || hasContentShare;

  return (
    <VideoGrid {...rest} size={gridSize} layout={featured ? 'featured' : null}>
      <ContentShare css="grid-area: ft;" />
      {layout === 'featured' ? <FeaturedRemoteVideos /> : <RemoteVideos />}
      <LocalVideo
        nameplate="Me"
        css={gridSize > 1 ? fluidStyles : staticStyles}
      />
      {remoteSize === 0 && noRemoteVideoView}
    </VideoGrid>
  );
};

export default VideoTileGrid;
