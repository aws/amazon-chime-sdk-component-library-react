// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useMeetingManager,
  useNotificationDispatch,
  Severity,
  ActionType,
} from 'amazon-chime-sdk-component-library-react';

import routes from '../constants/routes';

const NoMeetingRedirect: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useNotificationDispatch();
  const meetingManager = useMeetingManager();

  const payload: { severity: Severity; message: string, autoClose: boolean } = {
    severity: Severity.INFO,
    message: 'No meeting found, please enter a valid meeting Id',
    autoClose: true,
  };

  useEffect(() => {
    if (!meetingManager.meetingSession) {
      dispatch({
        type: ActionType.ADD,
        payload: payload,
      });
      history.push(routes.HOME);
    }
  }, []);

  return <>{children}</>;
};

export default NoMeetingRedirect;
