// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';
import {
  Roster,
  RosterHeader,
  RosterGroup,
  useRosterState,
  PopOverItem,
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';

import { useNavigation } from '../providers/NavigationProvider';
import RosterAttendeeWrapper from '../components/RosterAttendeeWrapper';

const MeetingRoster = () => {
  const { roster } = useRosterState();
  const [filter, setFilter] = useState('');
  const { closeRoster } = useNavigation();
  const meetingManager = useMeetingManager();

  let attendees = Object.values(roster);

  if (filter) {
    attendees = attendees.filter((attendee: any) =>
      attendee?.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const attendeeItems = attendees.map((attendee: any) => {
    const { chimeAttendeeId } = attendee || {};
    return <RosterAttendeeWrapper key={chimeAttendeeId} attendeeId={chimeAttendeeId} />;
  });

  const sendMessage = async (topic: string, data: string) => {
    const DATA_MESSAGE_LIFETIME_MS = 30000;
  
    const payload = {
      data: data,
    };
  
    meetingManager.audioVideo &&
      meetingManager.audioVideo.realtimeSendDataMessage(topic, payload, DATA_MESSAGE_LIFETIME_MS);
  }

  return (
    <Roster className="roster">
      <RosterHeader
        searchValue={filter}
        onSearch={handleSearch}
        onClose={closeRoster}
        title="Present"
        badge={attendees.length}
        menu={
          <><PopOverItem
            children={<span>Mute All</span>}
            onClick={() => {
              sendMessage("RosterActions", "MUTEALL");
            } } />
            <PopOverItem
              children={<span>Unmute All</span>}
              onClick={() => {
                sendMessage("RosterActions", "UNMUTEALL");
              }} /></>
        }
      />
      <RosterGroup>{attendeeItems}</RosterGroup>
    </Roster>
  );
};

export default MeetingRoster;
