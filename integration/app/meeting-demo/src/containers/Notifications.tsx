// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  useNotificationState,
  NotificationGroup,
} from 'amazon-chime-sdk-component-library-react';

const Notifications = () => {
  const { notifications } = useNotificationState();

  return notifications.length ? <NotificationGroup /> : null;
};

export default Notifications;
