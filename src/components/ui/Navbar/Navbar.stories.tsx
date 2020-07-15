// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Navbar from '.';
import NavbarHeader from './NavbarHeader';
import NavbarItem from './NavbarItem';
import { Attendees, LeaveMeeting, Information } from '../icons';
import Flex from '../Flex';

export default {
  title: 'UI Components/Navbar',
};

export const _Navbar = () => {

  const handleOnClose = () => {
    console.log('On close');
  }

  return (
    <Navbar flexDirection="column" container>
      <NavbarHeader onClose={handleOnClose}/>
      <Flex>
        <NavbarItem
          icon={<Information />}
          onClick={() => alert('Information')}
          label="Bridge Information"
        />
        <NavbarItem
          icon={<Attendees />}
          onClick={() => alert('Attendees')}
          label="Attendees"
        />
      </Flex>
      <Flex marginTop='auto'>
        <NavbarItem
          icon={<LeaveMeeting />}
          onClick={() => alert('Leave Meeting')}
          label="Leave Meeting"
        />
      </Flex>
    </Navbar>
  );
};
