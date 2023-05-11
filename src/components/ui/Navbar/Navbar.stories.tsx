// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Navbar from '.';
import NavbarHeader from './NavbarHeader';
import NavbarItem from './NavbarItem';
import { Attendees, LeaveMeeting } from '../icons';
import Flex from '../Flex';
import Share from '../icons/Share';
import Badge from '../Badge';
import Cog from '../icons/Cog';

import PopOverItem from '../PopOver/PopOverItem';
import PopOverSubMenu from '../PopOver/PopOverSubMenu';
import PopOverSeparator from '../PopOver/PopOverSeparator';

export default {
  title: 'UI Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const _Navbar = ({ responsive, showLabel }) => {
  const handleOnClose = () => {
    console.log('On close');
  };

  return (
    <div style={{ height: '100vh' }}>
      <Navbar flexDirection="column" container responsive={responsive}>
        <NavbarHeader onClose={handleOnClose} title="is this thing on?" />
        <Flex
          css={`
            margin-top: 0rem;
          `}
        >
          <NavbarItem
            icon={<Share />}
            onClick={() => alert('Do not Leave Meeting')}
            label="Bridge Info"
            showLabel={showLabel}
          />

          <NavbarItem
            icon={<Attendees />}
            onClick={() => alert('Attendees')}
            label="Attendees"
            badge={<Badge value="7" />}
            showLabel={showLabel}
          />
          <NavbarItem
            icon={<Cog />}
            label="Settings"
            onClick={() => {}}
            showLabel={showLabel}
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
            showLabel={showLabel}
          />
        </Flex>
      </Navbar>
    </div>
  );
};

_Navbar.args = {
  showLabel: true,
  responsive: true,
};

_Navbar.argTypes = {
  showLabel: {
    control: 'boolean',
    description: 'Responsive (enable and resize to see responsive layout)',
  },
  responsive: { control: 'boolean' },
  alignItems: { table: { disable: true } },
  container: { table: { disable: true } },
  flex: { table: { disable: true } },
  flexDirection: { table: { disable: true } },
  flexWrap: { table: { disable: true } },
  flexBasis: { table: { disable: true } },
  flexGrow: { table: { disable: true } },
  flexShrink: { table: { disable: true } },
  justifyContent: { table: { disable: true } },
  layout: { table: { disable: true } },
  style: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  onFocus: { table: { disable: true } },
  onBlur: { table: { disable: true } },
};

_Navbar.story = {
  name: 'NavBar with options',
};
