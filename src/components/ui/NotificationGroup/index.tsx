// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  ActionType,
  useNotificationDispatch,
  useNotificationState,
} from '../../../providers/NotificationProvider';
import Notification from '../Notification';
import Portal from '../Portal';
import { StyledNotificationGroup } from './Styled';

export const NotificationGroup: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { notifications } = useNotificationState();
  const dispatch = useNotificationDispatch();

  return (
    <Portal rootId="notification-group-root">
      <StyledNotificationGroup data-testid="notification-group">
        {notifications.map(({ id, ...rest }): any => (
          <Notification
            key={id}
            {...rest}
            onClose={() => dispatch({ type: ActionType.REMOVE, payload: id })}
          />
        ))}
      </StyledNotificationGroup>
    </Portal>
  );
};

export default NotificationGroup;
