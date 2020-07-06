// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MeetingSessionStatus,
  MeetingSessionStatusCode,
  VideoTileState
} from 'amazon-chime-sdk-js';
import { useMeetingManager } from '../../../../src';

import routes from '../constants/routes';

export enum MeetingStatus {
  Loading,
  Succeeded,
  Failed,
  Ended
}

type MeetingContext = {
  meetingStatus: MeetingStatus;
  updateMeetingStatus: (s: MeetingStatus) => void;
};

type Props = {
  children: ReactNode;
  joinMuted?: boolean;
  joinWithVideo?: boolean;
};

const MeetingStatusContext = createContext<MeetingContext>({
  meetingStatus: MeetingStatus.Loading,
  updateMeetingStatus: (s: MeetingStatus) => {}
});

export function getMeetingStatusContext() {
  return MeetingStatusContext;
}

export default function MeetingStatusProvider(props: Props) {
  const meetingManager = useMeetingManager();
  const [meetingStatus, setMeetingStatus] = useState(MeetingStatus.Loading);
  const meetingId = meetingManager?.meetingId;
  const { children } = props;
  const history = useHistory();

  useEffect(() => {
    const audioVideoDidStart = () => {
      console.log('Observer audioVideoDidStart');
    };

    const videoTileDidUpdate = (tileState: VideoTileState) => {
      console.log('Observer videoTileDidUpdate', tileState);
      if (!tileState.boundAttendeeId) {
        return;
      }
      if (tileState?.boundAttendeeId && tileState?.tileId) {
        setMeetingStatus(MeetingStatus.Succeeded);
      }
    };

    const videoTileWasRemoved = (tileId: number) => {
      console.log('Observer videoTileWasRemoved', tileId);
      setMeetingStatus(MeetingStatus.Succeeded);
    };

    const audioVideoDidStop = (sessionStatus: MeetingSessionStatus) => {
      console.log('Observer audioVideoDidStop');
      const sessionStatusCode = sessionStatus.statusCode();
      if (sessionStatusCode === MeetingSessionStatusCode.Left) {
        /*
          - You called meetingSession.audioVideo.stop().
          - When closing a browser window or page, Chime SDK attempts to leave the session.
        */
        console.log('You left the session');
        setMeetingStatus(MeetingStatus.Ended);
      } else if (
        sessionStatusCode === MeetingSessionStatusCode.AudioCallEnded
      ) {
        console.log('The session has ended');
        history.push(`${routes.HOME}`);
        setMeetingStatus(MeetingStatus.Ended);
      } else {
        console.log(
          'Observer audioVideoDidStop, Stopped with a session status code: ',
          sessionStatusCode
        );
      }
    };

    const observers: any = {
      videoTileDidUpdate,
      audioVideoDidStart,
      videoTileWasRemoved,
      audioVideoDidStop
    };
    setMeetingStatus(MeetingStatus.Succeeded);

    if (!meetingManager || !meetingManager.audioVideo) {
      return;
    }
    meetingManager.addObserver(observers);

    return () => {
      setMeetingStatus(MeetingStatus.Ended);
      meetingManager.removeObserver(observers);
    };
  }, [meetingId]);

  const updateMeetingStatus = (status: MeetingStatus): void => {
    setMeetingStatus(status);
  };

  const value = {
    meetingStatus,
    updateMeetingStatus
  };

  return (
    <MeetingStatusContext.Provider value={value}>
      {children}
    </MeetingStatusContext.Provider>
  );
}
