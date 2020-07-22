// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useContext, ReactNode } from 'react';

export type NavigationContextType = {
  showNavbar: boolean;
  showRoster: boolean;
  toggleRoster: () => void;
  toggleNavbar: () => void;
  openRoster: () => void;
  closeRoster: () => void;
  openNavbar: () => void;
  closeNavbar: () => void;
};

type Props = {
  children: ReactNode;
};

const NavigationContext = React.createContext<NavigationContextType | null>(
  null
);

const NavigationProvider = ({ children }: Props) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showRoster, setShowRoster] = useState(true);

  const toggleRoster = (): void => {
    setShowRoster(!showRoster);
  };

  const toggleNavbar = (): void => {
    setShowNavbar(!showNavbar);
  };

  const openNavbar = (): void => {
    setShowNavbar(true);
  };

  const closeNavbar = (): void => {
    setShowNavbar(false);
  };

  const openRoster = (): void => {
    setShowRoster(true);
  };

  const closeRoster = (): void => {
    setShowRoster(false);
  };

  const providerValue = {
    showNavbar,
    showRoster,
    toggleRoster,
    toggleNavbar,
    openRoster,
    closeRoster,
    openNavbar,
    closeNavbar,
  };
  return (
    <NavigationContext.Provider value={providerValue}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw Error('Use useNavigation in NavigationProvider');
  }
  return context;
};

export { NavigationProvider, useNavigation };
