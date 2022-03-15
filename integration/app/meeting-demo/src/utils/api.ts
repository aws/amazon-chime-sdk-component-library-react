// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import routes from '../constants/routes';

export const BASE_URL = routes.HOME;

export type MeetingFeatures = {
  Audio: {[key: string]: string};
}

export type CreateMeetingResponse = {
  MeetingFeatures: MeetingFeatures;
}

export type JoinMeetingInfo = {
  Meeting: CreateMeetingResponse;
  Attendee: string;
}

interface MeetingResponse {
  JoinInfo: JoinMeetingInfo;
}

interface GetAttendeeResponse {
  name: string;
}

export async function fetchMeeting(
  meetingId: string,
  name: string,
  region: string,
  echoReductionCapability = false
): Promise<MeetingResponse> {
  const params = {
    title: encodeURIComponent(meetingId),
    name: encodeURIComponent(name),
    region: encodeURIComponent(region),
    ns_es: String(echoReductionCapability),
  };

  const res = await fetch(BASE_URL + 'join?' + new URLSearchParams(params), {
    method: 'POST',
  });

  const data = await res.json();

  if (data.error) {
    throw new Error(`Server error: ${data.error}`);
  }

  return data;
}

export async function getAttendee(
  meetingId: string,
  chimeAttendeeId: string
): Promise<GetAttendeeResponse> {
  const params = {
    title: encodeURIComponent(meetingId),
    attendee: encodeURIComponent(chimeAttendeeId),
  };

  const res = await fetch(BASE_URL + 'attendee?' + new URLSearchParams(params), {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Invalid server response');
  }

  const data = await res.json();

  return {
    name: data.AttendeeInfo.Name,
  };
}

export async function endMeeting(meetingId: string): Promise<void> {
  const params = {
    title: encodeURIComponent(meetingId),
  };

  const res = await fetch(BASE_URL + 'end?' + new URLSearchParams(params), {
    method: 'POST',
  });

  if (!res.ok) {
    throw new Error('Server error ending meeting');
  }
}

export const createGetAttendeeCallback = (meetingId: string) =>
  (chimeAttendeeId: string): Promise<GetAttendeeResponse> =>
    getAttendee(meetingId, chimeAttendeeId);
