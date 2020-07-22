// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';
import {
  Cell,
  Roster,
  RosterHeader,
  RosterGroup,
  useRosterState
} from 'amazon-chime-sdk-component-library-react';

import RosterAttendee from './RosterAttendee';
import { useNavigation } from '../providers/NavigationProvider';

const MeetingRoster = () => {
  const { roster } = useRosterState();
  const [filter, setFilter] = useState('');
  const { closeRoster, openNavbar } = useNavigation();

  let attendees = Object.values(roster);

  if (filter) {
    attendees = attendees.filter((attendee: any) =>
      attendee?.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const attendeeItems = attendees.map((attendee: any) => {
    const { id, name } = attendee || {};
    return <RosterAttendee key={id} attendeeId={id} name={name} />;
  });

  return (
    <Cell gridArea="roster">
      <Roster>
        <RosterHeader
          searchValue={filter}
          onSearch={handleSearch}
          onClose={closeRoster}
          title="Present"
          badge={attendees.length}
          onMobileToggleClick={openNavbar}
        />
        <RosterGroup>{attendeeItems}</RosterGroup>
      </Roster>
    </Cell>
  );
};

export default MeetingRoster;
