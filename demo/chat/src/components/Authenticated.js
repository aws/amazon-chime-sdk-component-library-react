/* eslint-disable react/prop-types */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useNotificationDispatch } from 'amazon-chime-sdk-component-library-react';
import routes from '../constants/routes';
import { useAuthContext } from '../providers/AuthProvider';

const Authenticated = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const notificationDispatch = useNotificationDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      //Cleanup notifications
      notificationDispatch({
        type: 2, // REMOVE_ALL
        payload: {}
      });
      history.push(routes.CHAT);
    } else {
      history.push(routes.SIGNIN);
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default Authenticated;
