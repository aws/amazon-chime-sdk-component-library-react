// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { v4 as uuidv4 } from 'uuid';

export enum Severity {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
}

export interface NotificationType {
  id?: string;
  severity?: Severity;
  message?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  replaceAll?: boolean;
}

export interface StateType {
  notifications: NotificationType[];
}

export enum ActionType {
  ADD,
  REMOVE,
  REMOVE_ALL,
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export const initialState: StateType = {
  notifications: [],
};

export const reducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.ADD: {
      const notification = { id: uuidv4(), ...payload };
      const notifications = notification?.replaceAll
        ? [notification]
        : [...state.notifications, notification];
      return {
        ...state,
        notifications,
      };
    }
    case ActionType.REMOVE: {
      const notifications = state.notifications.filter(
        (notification) => notification?.id !== payload
      );
      return {
        ...state,
        notifications,
      };
    }
    case ActionType.REMOVE_ALL: {
      return {
        ...state,
        notifications: [],
      };
    }
    default:
      throw new Error('Incorrect type in NotificationProvider');
  }
};
