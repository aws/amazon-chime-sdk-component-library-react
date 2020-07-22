// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Navbar,
  NavbarHeader,
  Flex,
  NavbarItem,
  Attendees
} from 'amazon-chime-sdk-component-library-react';
import { useNavigation } from '../../providers/NavigationProvider';

const Navigation = () => {
  const { toggleRoster, closeNavbar } = useNavigation();
  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <Flex>
        {toggleRoster && (
          <NavbarItem
            icon={<Attendees />}
            onClick={toggleRoster}
            label="Attendees"
          />
        )}
      </Flex>
    </Navbar>
  );
};

export default Navigation;
