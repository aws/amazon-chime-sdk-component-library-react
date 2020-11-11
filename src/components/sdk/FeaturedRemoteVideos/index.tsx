// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { memo, FC, HTMLAttributes } from 'react';

import { RemoteVideo } from '../RemoteVideo';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useRosterState } from '../../../providers/RosterProvider';
import { useGridData } from '../../ui/VideoGrid';
import { BaseSdkProps } from '../Base';

interface Props
  extends BaseSdkProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'css'> {}

export const FeaturedRemoteVideos: FC<Props> = (props) => {
  const gridData = useGridData();
  const { roster } = useRosterState();
  const { tileId: featuredTileId } = useFeaturedTileState();
  const { tileId: contentTileId } = useContentShareState();
  const { tiles, tileIdToAttendeeId } = useRemoteVideoTileState();

  return (
    <>
      {tiles.map((tileId) => {
        const featured = !contentTileId && featuredTileId === tileId;
        const styles = gridData && featured ? 'grid-area: ft;' : '';
        const classes = `${featured ? 'ch-featured-tile' : ''} ${
          props.className || ''
        }`;
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name }: any = attendee;

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
