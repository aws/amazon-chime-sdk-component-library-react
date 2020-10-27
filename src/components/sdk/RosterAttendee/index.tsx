// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import RosterCell, { RosterCellProps } from '../../ui/Roster/RosterCell';
import MicrophoneActivity from '../MicrophoneActivity';
import { useRosterState } from '../../../providers/RosterProvider';
import useAttendeeStatus from '../../../hooks/sdk/useAttendeeStatus';

export interface RosterAttendeeProps extends Omit<RosterCellProps, 'name'> {
  /** The ID of a Chime meeting attendee. */
  attendeeId: string;
}

export const RosterAttendee: React.FC<RosterAttendeeProps> = ({ attendeeId, ...rest }) => {
  const { muted, videoEnabled, sharingContent } = useAttendeeStatus(attendeeId);
  const { roster } = useRosterState();
  const attendeeName = roster[attendeeId]?.name || '';

  return (
    <RosterCell
      name={attendeeName}
      muted={muted}
      videoEnabled={videoEnabled}
      sharingContent={sharingContent}
      {...rest}
      microphone={<MicrophoneActivity attendeeId={attendeeId} />}
    />
  );
};

export default RosterAttendee;
