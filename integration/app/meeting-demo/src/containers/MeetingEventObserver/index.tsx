// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { useMeetingEvent } from 'amazon-chime-sdk-component-library-react';

const MeetingEventObserver = () => {
  const meetingEvent = useMeetingEvent();
  console.log('Received meeting event in MeetingEventObserver', meetingEvent);
  return null;
};

export default MeetingEventObserver;
