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

const NotificationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useNotificationState = () => {
  const state = useContext(StateContext);
  return state;
};

const useNotificationDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export {
  NotificationProvider,
  useNotificationState,
  useNotificationDispatch,
  Severity,
  NotificationType,
  ActionType,
  Action,
};
