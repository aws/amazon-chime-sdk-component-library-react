// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  ReactNode
} from 'react';

export type NavigationContextType = {
  showNavbar: boolean;
  showRoster: boolean;
  showMetrics: boolean;
  toggleRoster: () => void;
  toggleNavbar: () => void;
  openRoster: () => void;
  closeRoster: () => void;
  openNavbar: () => void;
  closeNavbar: () => void;
  toggleMetrics: () => void;
};

type Props = {
  children: ReactNode;
};

const NavigationContext = React.createContext<NavigationContextType | null>(
  null
);

const isDesktop = () => window.innerWidth > 768;

const NavigationProvider = ({ children }: Props) => {
  const [showNavbar, setShowNavbar] = useState(() => isDesktop());
  const [showRoster, setShowRoster] = useState(() => isDesktop());
  const [showMetrics, setShowMetrics] = useState(false);
  const isDesktopView = useRef(isDesktop());

  useEffect(() => {
    const handler = () => {
      const isResizeDesktop = isDesktop();
      if (isDesktopView.current === isResizeDesktop) {
        return;
      }

      isDesktopView.current = isResizeDesktop;

      if (!isResizeDesktop) {
        setShowNavbar(false);
        setShowRoster(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const toggleRoster = (): void => {
    setShowRoster(!showRoster);
  };

  const toggleNavbar = (): void => {
    setShowNavbar(!showNavbar);
  };

  const toggleMetrics = () => {
    setShowMetrics(currentState => !currentState);
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
    showMetrics,
    toggleRoster,
    toggleNavbar,
    toggleMetrics,
    openRoster,
    closeRoster,
    openNavbar,
    closeNavbar
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
