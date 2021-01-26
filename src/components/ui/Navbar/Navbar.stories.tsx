// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Navbar from '.';
import NavbarHeader from './NavbarHeader';
import NavbarItem from './NavbarItem';
import { Attendees, LeaveMeeting, Information } from '../icons';
import Flex from '../Flex';
import NavbarDocs from './Navbar.mdx';
import Share from '../icons/Share';
import Badge from '../Badge';
import Cog from '../icons/Cog';

import PopOverItem from '../PopOver/PopOverItem';
import PopOverSubMenu from '../PopOver/PopOverSubMenu';
import PopOverSeparator from '../PopOver/PopOverSeparator';
import PopOverHeader from '../PopOver/PopOverHeader';


export default {
  title: 'UI Components/Navbar',
  parameters: {
    docs: {
      page: NavbarDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Navbar,
};

export const _Navbar = () => {
  const handleOnClose = () => {
    console.log('On close');
  };

  return (
    <Navbar 
      flexDirection="column" 
      container
      responsive={boolean('Responsive (enable and resize to see responsive layout)', true)}
    >
      <NavbarHeader onClose={handleOnClose} title="is this thing on?" />
      <Flex css={`margin-top: 0rem;`}>
        <NavbarItem
          icon={<Share/>}
          onClick={() => alert('Do not Leave Meeting')}
          label="Bridge Info"
          showLabel={boolean('showLabel', true)}
        />
  
        <NavbarItem
          icon={<Attendees />}
          onClick={() => alert('Attendees')}
          label="Attendees"
          badge={<Badge value="7"/>}
          showLabel={boolean('showLabel', true)}
        />

        <NavbarItem
          icon={<Cog />}
          label="Settings"
          showLabel={boolean('showLabel', true)}
        >
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>Also test content</span>
          </PopOverItem>
          <PopOverSeparator />
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This is more test content</span>
          </PopOverItem>
          <PopOverSubMenu text="This is a submenu">
            <PopOverItem as="button" onClick={() => console.log('clicked')}>
              <span>This is also a submenu component</span>
            </PopOverItem>
            <PopOverItem as="button" onClick={() => console.log('clicked')}>
              <span>This is also a submenu component</span>
            </PopOverItem>
          </PopOverSubMenu>
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This has very long text</span>
          </PopOverItem>
        </NavbarItem>
      </Flex>
      <Flex marginTop="auto">
        <NavbarItem
          icon={<LeaveMeeting />}
          onClick={() => alert('Leave Meeting')}
          label="Leave Meeting"
          showLabel={boolean('showLabel', true)}
        />
      </Flex>
    </Navbar>
  );
};

_Navbar.story = {
  name: 'NavBar with options',
};
