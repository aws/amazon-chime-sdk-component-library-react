// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  RosterAttendee,
  useAttendeeStatus
} from 'amazon-chime-sdk-component-library-react';
import VideoStreamMetrics from '../containers/VideoStreamMetrics';

interface Props {
  /** The Chime attendee ID */
  attendeeId: string;
}

const RosterAttendeeWrapper: React.FC<Props> = ({ attendeeId }) => {
  const { videoEnabled } = useAttendeeStatus(attendeeId);
  return (
    <RosterAttendee
      attendeeId={attendeeId}
      menu={
        videoEnabled ? <VideoStreamMetrics attendeeId={attendeeId} /> : null
      }
    />
  );
};

export default RosterAttendeeWrapper;
