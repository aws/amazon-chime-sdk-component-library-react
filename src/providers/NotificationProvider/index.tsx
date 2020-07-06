// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useReducer, Dispatch, useContext } from 'react';
import { 
  StateType, 
  initialState, 
  reducer, 
  Action, 
  Severity, 
  NotificationType, 
  ActionType } from './state';

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
}

const useNotificationStateContext = () => {
  const state = useContext(StateContext);
  return state;
}

const useNotificationDispatchContext = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
}

export {
  NotificationProvider,
  useNotificationStateContext,
  useNotificationDispatchContext,
  Severity, 
  NotificationType,
  ActionType,
};