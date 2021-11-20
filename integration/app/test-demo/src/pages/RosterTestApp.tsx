import React from 'react';
import { LogLevel } from 'amazon-chime-sdk-js';
import {
  MeetingProvider,
  RosterAttendeeType,
  useAttendeeStatus,
  useRosterState,
} from 'amazon-chime-sdk-component-library-react';
import MeetingControls from '../containers/MeetingControls';
import MeetingForm from '../containers/MeetingForm';
import MeetingRoster from '../containers/MeetingRoster';

export const RosterTestApp: React.FC = () => {
  const config = {
    logLevel: LogLevel.INFO,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '70%', margin: 'auto' }}>
      <MeetingProvider {...config}>
        <h3 data-testid='app-name'>Roster Test</h3>
        <MeetingForm />
        <Meeting />
      </MeetingProvider>
    </div>
  )
};

const Meeting: React.FC = () => {
  return (
    <>
      <MeetingControls />
      <div style={{ marginTop: '2rem', height: '40rem', display: 'flex', flexDirection: 'row' }}>
        <MeetingRoster />
        <HookStates />
      </div>
    </>
  )
};

const HookStates: React.FC = () => {
  const { roster } = useRosterState();

  const states = Object.entries(roster).map(([attendeeId, attendee]) =>
    <AttendeeState key={attendeeId} attendeeId={attendeeId} attendee={attendee} />
  );

  return (<pre>{states}</pre>);
};

const AttendeeState: React.FC<{ attendeeId: string, attendee: RosterAttendeeType }> = ({ attendeeId, attendee }) => {
  const attendeeStatus = useAttendeeStatus(attendeeId);
  const state = {};

  state[attendeeId] = { ...attendee, ...attendeeStatus };

  return (
    <code
      style={{ display: 'block' }}
      data-testid={'code-' + attendeeId}>
      {JSON.stringify(state, null, 2)}
    </code>
  );
};
