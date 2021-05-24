// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Navbar,
  NavbarHeader,
  NavbarItem,
  Attendees,
  Eye,
  Information,
  Flex,
  SignalStrength
} from 'amazon-chime-sdk-component-library-react';

import { useNavigation } from '../../providers/NavigationProvider';
import { useAppState } from '../../providers/AppStateProvider';
import LocalMediaStreamMetrics from '../LocalMediaStreamMetrics';

const Navigation = () => {
  const { toggleRoster, toggleMetrics, closeNavbar } = useNavigation();
  const { theme, toggleTheme } = useAppState();

  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <Flex
        css={`
          margin-top: 0rem;
        `}
      >
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
          label="Bandwidth metrics"
        />
      </Flex>
      <Flex marginTop="auto">
        <NavbarItem
          icon={<SignalStrength />}
          onClick={() => {}}
          label="Meeting metrics"
        >
          <LocalMediaStreamMetrics />
        </NavbarItem>
      </Flex>
    </Navbar>
  );
};

export default Navigation;
