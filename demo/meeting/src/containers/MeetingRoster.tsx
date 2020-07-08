// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';
import {
  Roster,
  RosterHeader,
  RosterGroup,
  Cell,
  useRoster
} from 'amazon-chime-sdk-component-library-react';

import RosterAttendee from './RosterAttendee';

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
    <Cell gridArea="roster">
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
    </Cell>
  );
};

export default MeetingRoster;
