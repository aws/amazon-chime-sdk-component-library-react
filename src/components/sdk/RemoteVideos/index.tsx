// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { memo } from 'react';

import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useRosterState } from '../../../providers/RosterProvider';
import { RemoteVideo } from '../RemoteVideo';
import { BaseSdkProps } from '../Base';

export const RemoteVideos: React.FC<BaseSdkProps> = (props) => {
  const { roster } = useRosterState();
  const { tiles, tileIdToAttendeeId } = useRemoteVideoTileState();

  return (
    <>
      {tiles.map((tileId) => {
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name }: any = attendee;
        return (
          <RemoteVideo {...props} key={tileId} tileId={tileId} name={name} />
        );
      })}
    </>
  );
};

export default memo(RemoteVideos);
