import React, { useContext } from 'react';
import styled from 'styled-components';

import { getRosterContext } from '../providers/RosterProvider';
import RosterItem from './RosterItem';
import useActiveSpeakerDetector from '../hooks/useActiveSpeakerDetector';

const StyledRoster = styled.div`
  border: 1px solid;
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  right: 1rem;
  top: 3.5rem;
`;

const MeetingRoster = () => {
  const roster = useContext(getRosterContext());
  const activeSpeakerAttendee = useActiveSpeakerDetector();
  const attendees = Object.values(roster).map(item => {
    const { id, name } = item;
    return (
      <RosterItem
        key={id}
        id={id}
        name={name}
        isActiveSpeaker={activeSpeakerAttendee === id}
      />
    );
  });
  return <StyledRoster>{attendees}</StyledRoster>;
};

export default MeetingRoster;
