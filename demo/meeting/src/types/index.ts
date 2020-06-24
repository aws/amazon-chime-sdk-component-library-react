export type RosterAttendeeType = {
  id: string;
  name: string;
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};
