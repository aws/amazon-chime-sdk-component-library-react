
interface MeetingResponse {
  JoinInfo: {
    Attendee: string;
    Meeting: any;
  };
}

interface GetAttendeeResponse {
  name: string;
}

export async function fetchMeeting(
  meetingId: string,
  name: string,
  region: string
): Promise<MeetingResponse> {
  const params = {
    title: encodeURIComponent(meetingId),
    name: encodeURIComponent(name),
    region: encodeURIComponent(region),
  };

  const res = await fetch('/join?' + new URLSearchParams(params), {
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

  const res = await fetch('/attendee?' + new URLSearchParams(params), {
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

export const createGetAttendeeCallback = (meetingId: string) =>
  (chimeAttendeeId: string): Promise<GetAttendeeResponse> =>
    getAttendee(meetingId, chimeAttendeeId);
