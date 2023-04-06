// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { Dispatch, useContext, useReducer } from 'react';

import {
  Action,
  ActionType,
  initialState,
  NotificationType,
  reducer,
  Severity,
  StateType,
} from './state';

const StateContext = React.createContext<StateType>(initialState);
const DispatchContext = React.createContext<Dispatch<Action>>((): void => {});

export const NotificationProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useNotificationState = () => {
  const state = useContext(StateContext);
  return state;
};

export const useNotificationDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export { Severity, NotificationType, ActionType, Action };
