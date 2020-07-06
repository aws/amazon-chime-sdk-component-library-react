// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import {
  Roster,
  RosterHeader,
  RosterGroup
} from 'amazon-chime-sdk-component-library-react';
import { useRoster } from '../../../../src';

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

  const attendees = Object.values(roster).map(item => {
    const { id, name } = item;
    return <RosterAttendee key={id} attendeeId={id} name={name} />;
  });

  return (
    <StyledRoster>
      <Roster>
        <RosterHeader title="Present" badge={attendees.length} />
        <RosterGroup>{attendees}</RosterGroup>
      </Roster>
    </StyledRoster>
  );
};

export default MeetingRoster;
