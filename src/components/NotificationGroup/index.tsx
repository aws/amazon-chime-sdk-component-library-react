// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Notification from '../Notification';
import Portal from '../Portal';
import { useNotificationStateContext, useNotificationDispatchContext, ActionType } from '../../providers/NotificationProvider';
import { StyledNotificationGroup } from './Styled';

export const NotificationGroup: React.FC = () => {
  const { notifications } = useNotificationStateContext();
  const dispatch = useNotificationDispatchContext();

  return (
    <Portal rootId='notification-group-root'>
      <StyledNotificationGroup data-testid='notification-group'>
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