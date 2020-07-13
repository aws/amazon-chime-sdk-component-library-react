// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { memo } from 'react';

import { useVideoTileState } from '../../../providers/VideoTileProvider';
import { useRoster } from '../../../providers/RosterProvider';
import { RemoteVideo } from '../RemoteVideo';

export const RemoteVideos = () => {
  const roster = useRoster();
  const { tiles, tileIdToAttendeeId } = useVideoTileState();

  return (
    <>
      {tiles.map(tileId => {
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name } = attendee;
        return <RemoteVideo key={tileId} tileId={tileId} name={name} />;
      })}
    </>
  );
};

export default memo(RemoteVideos);
