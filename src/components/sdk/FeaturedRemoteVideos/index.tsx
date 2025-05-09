// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, memo } from 'react';

import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useRosterState } from '../../../providers/RosterProvider';
import { useGridData } from '../../ui/VideoGrid';
import { BaseSdkProps } from '../Base';
import { RemoteVideo } from '../RemoteVideo';

interface Props
  extends BaseSdkProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'css'> {}

export const FeaturedRemoteVideos: FC<React.PropsWithChildren<Props>> = (
  props
) => {
  const gridData = useGridData();
  const { roster } = useRosterState();
  const { tileId: featuredTileId } = useFeaturedTileState();
  const { tiles: contentTiles } = useContentShareState();
  const { tiles, tileIdToAttendeeId } = useRemoteVideoTileState();

  return (
    <>
      {tiles.map((tileId) => {
        const hasContentShare = contentTiles.length > 0;
        const featured = !hasContentShare && featuredTileId === tileId;
        const styles = gridData && featured ? 'grid-area: ft;' : '';
        const classes = `${featured ? 'ch-featured-tile' : ''} ${
          props.className || ''
        }`;
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name = undefined }: { name?: string } = attendee;

        return (
          <RemoteVideo
            tileId={tileId}
            name={name}
            {...props}
            className={classes}
            key={tileId}
            css={styles}
          />
        );
      })}
    </>
  );
};

export default memo(FeaturedRemoteVideos);
