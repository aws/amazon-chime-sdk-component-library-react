import React from 'react';
import styled from 'styled-components';

import useAttendeeRealtimeAudio from '../hooks/useAttendeeRealtimeAudio';

const StyledRosterItem = styled.div`
  display: flex;

  .attendee-name {
    flex-grow: 1;
  }

  .active-speaker-status {
    width: 3rem;
  }

  p {
    margin: 1rem;
  }
`;

type Props = {
  id: string;
  name: string;
  isActiveSpeaker: boolean;
};

// TODO (Once SDK components are onboarded):
// 1. Add badge for showing mute and active speaker statuses
// 2. Add volume indicator for volume and signal strength
const RosterItem = (props: Props) => {
  const { id, name, isActiveSpeaker } = props;
  const { volume, muted, signalStrength } = useAttendeeRealtimeAudio(id);
  return (
    <StyledRosterItem>
      <p className="attendee-name">{name}</p>
      <p>{muted ? 'muted' : 'not muted'}</p>
      <p className="active-speaker-status">
        {isActiveSpeaker ? 'speaking' : ''}
      </p>
      <p>{volume}</p>
      <p>{signalStrength}</p>
    </StyledRosterItem>
  );
};

export default RosterItem;
