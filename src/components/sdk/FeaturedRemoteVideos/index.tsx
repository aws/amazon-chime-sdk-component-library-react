// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { memo, FC, HTMLAttributes } from 'react';

import { RemoteVideo } from '../RemoteVideo';
import { useVideoTileState } from '../../../providers/VideoTileProvider';
import { useFeaturedTile } from '../../../providers/FeaturedVideoTileProvider';
import { useContentShare } from '../../../providers/ContentShareProvider';
import { useRoster } from '../../../providers/RosterProvider';
import { useGridData } from '../../ui/VideoGrid';
import { BaseProps } from '../../ui/Base';

interface Props
  extends BaseProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'css'> {}

export const FeaturedRemoteVideos: FC<Props> = props => {
  const gridData = useGridData();
  const roster = useRoster();
  const featuredTileId = useFeaturedTile();
  const { isSomeoneSharing } = useContentShare();
  const { tiles, tileIdToAttendeeId } = useVideoTileState();

  return (
    <>
      {tiles.map(tileId => {
        const featured = !isSomeoneSharing && featuredTileId === tileId;
        const styles = gridData && featured ? 'grid-area: ft;' : '';
        const classes = `${featured ? 'featured-tile' : ''} ${props.className ||
          ''}`;
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name } = attendee;

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
