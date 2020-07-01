import React from 'react';
import { RosterCell } from 'amazon-chime-sdk-component-library-react';

import { useAttendeeStatus } from '../../../../src';

interface Props {
  attendeeId: string;
  name: string;
}

const RosterAttendee: React.FC<Props> = ({ attendeeId, name }) => {
  const { muted, videoEnabled, sharingContent } = useAttendeeStatus(attendeeId);

  return (
    <RosterCell
      name={name}
      muted={muted}
      videoEnabled={videoEnabled}
      sharingContent={sharingContent}
    />
  );
};

export default RosterAttendee;
