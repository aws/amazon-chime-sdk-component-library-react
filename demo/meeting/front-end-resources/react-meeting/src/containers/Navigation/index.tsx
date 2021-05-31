// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Navbar,
  NavbarHeader,
  NavbarItem,
  Attendees,
  Eye,
  Information
} from 'amazon-chime-sdk-component-library-react';

import { useNavigation } from '../../providers/NavigationProvider';
import { useAppState } from '../../providers/AppStateProvider';

const Navigation = () => {
  const { toggleRoster, toggleMetrics, closeNavbar } = useNavigation();
  const { theme, toggleTheme } = useAppState();

  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <NavbarItem
        icon={<Attendees />}
        onClick={toggleRoster}
        label="Attendees"
      />
      <NavbarItem
        icon={<Eye />}
        onClick={toggleTheme}
        label={theme === 'light' ? 'Dark mode' : 'Light mode'}
      />
      <NavbarItem
        icon={<Information />}
        onClick={toggleMetrics}
        label="Meeting metrics"
      />
    </Navbar>
  );
};

export default Navigation;
