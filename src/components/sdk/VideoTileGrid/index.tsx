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
}

export const VideoTileGrid: React.FC<Props> = ({
  noRemoteVideoView,
  ...rest
}) => {
  const { tileId: featureTileId } = useFeaturedTileState();
  const { tiles } = useRemoteVideoTileState();
  const { isSomeoneSharing } = useContentShareState();
  const { isVideoEnabled } = useLocalVideo();
  const featured = !!featureTileId || isSomeoneSharing;
  const remoteSize = tiles.length + (isSomeoneSharing ? 1 : 0);
  const gridSize =
    remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;

  return (
    <VideoGrid {...rest} size={gridSize} layout={featured ? 'featured' : null}>
      <FeaturedRemoteVideos />
      <ContentShare css="grid-area: ft;" />
      <LocalVideo
        nameplate="Me"
        css={gridSize > 1 ? fluidStyles : staticStyles}
      />
      {remoteSize === 0 && noRemoteVideoView}
    </VideoGrid>
  );
};

export default VideoTileGrid;
