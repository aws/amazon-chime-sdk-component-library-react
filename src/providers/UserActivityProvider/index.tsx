// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, FC, useContext, useMemo, useRef } from 'react';

import useFocusIn from '../../hooks/useFocusIn';
import useMouseMove from '../../hooks/useMouseMove';

interface UserActivityState {
  isUserActive: boolean | null;
}

export const UserActivityContext = createContext<UserActivityState | null>(
  null
);

const UserActivityProvider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const ref = useRef<any>(null);
  const { isFocused } = useFocusIn(ref);
  const { isMouseMoving } = useMouseMove(ref);
  const isUserActive = isFocused || isMouseMoving;
  const value = useMemo(
    () => ({
      isUserActive,
    }),
    [isUserActive]
  );

  return (
    <div ref={ref}>
      <UserActivityContext.Provider value={value}>
        {children}
      </UserActivityContext.Provider>
    </div>
  );
};

function useUserActivityState(): UserActivityState {
  const state = useContext(UserActivityContext);

  if (!state) {
    throw new Error(
      'useUserActivityState must be used within an UserActivityContextProvider'
    );
  }

  return state;
}

export { UserActivityProvider, useUserActivityState };
