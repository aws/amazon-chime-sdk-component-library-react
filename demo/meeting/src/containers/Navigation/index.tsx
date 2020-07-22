// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Cell,
  Navbar,
  NavbarHeader,
  Flex,
  NavbarItem,
  Attendees,
} from 'amazon-chime-sdk-component-library-react';
import { useNavigation } from '../../providers/NavigationProvider';

const Navigation = () => {
  const { toggleRoster, closeNavbar } = useNavigation();
  return (
    <Cell gridArea="nav">
      <Navbar flexDirection="column" container>
        <NavbarHeader onClose={closeNavbar} />
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
    </Cell>
  );
};

export default Navigation;
