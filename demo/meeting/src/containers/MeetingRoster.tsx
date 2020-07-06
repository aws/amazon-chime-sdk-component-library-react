// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
  Roster,
  RosterHeader,
  RosterGroup,
  useRoster
} from 'amazon-chime-sdk-component-library-react';

import RosterAttendee from './RosterAttendee';

const StyledRoster = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 18.5rem;
`;

const MeetingRoster = () => {
  const roster = useRoster();
  const [filter, setFilter] = useState('');

  let attendees = Object.values(roster);

  if (filter) {
    attendees = attendees.filter(attendee =>
      attendee.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const attendeeItems = attendees.map(item => {
    const { id, name } = item;
    return <RosterAttendee key={id} attendeeId={id} name={name} />;
  });

  return (
    <StyledRoster>
      <Roster>
        <RosterHeader
          searchValue={filter}
          onSearch={handleSearch}
          onClose={() => alert('Closing')}
          title="Present"
          badge={attendees.length}
        />
        <RosterGroup>{attendeeItems}</RosterGroup>
      </Roster>
    </StyledRoster>
  );
};

export default MeetingRoster;
