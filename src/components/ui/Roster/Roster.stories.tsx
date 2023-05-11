// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../Flex';
import Roster from './';
import RosterGroup from './RosterGroup';
import RosterCell from './RosterCell';
import RosterHeader from './RosterHeader';
import IconButton from '../Button/IconButton';
import SignalStrength from '../icons/SignalStrength';
import Cog from '../icons/Cog';

export default {
  title: 'UI Components/Roster',
  component: Roster,
  parameters: {
    layout: 'fullscreen',
  },
};

const Menu = () => (
  <>
    <div style={{ padding: '.5rem 1rem', cursor: 'pointer' }}>Message user</div>
    <div style={{ padding: '.5rem 1rem', cursor: 'pointer' }}>Kick user</div>
  </>
);

const HeaderMenu = () => (
  <>
    <div style={{ padding: '.5rem 1rem', cursor: 'pointer' }}>
      Some menu action
    </div>
    <div style={{ padding: '.5rem 1rem', cursor: 'pointer' }}>
      Some other menu action
    </div>
  </>
);
const commonHiddenArgTypes = {
  tabIndex: { table: { disable: true } },
  onFocus: { table: { disable: true } },
  onBlur: { table: { disable: true } },
};

export const _Roster = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex
      container
      layout="fill-space"
      css="height: 100vh; background: #f6f9fc"
    >
      <Roster>
        <RosterHeader
          title="Present"
          badge={2}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<HeaderMenu />}
          a11yMenuLabel="Roster options"
        />
        <RosterGroup>
          <RosterCell
            name="Michael Scott"
            subtitle="Regional Manager"
            muted={false}
            videoEnabled={true}
            menu={<Menu />}
            a11yMenuLabel="Contact options"
          />
          <RosterCell
            name="Michael Scarn"
            subtitle="FBI agent"
            muted={true}
            videoEnabled={false}
            menu={<Menu />}
            a11yMenuLabel="Contact options"
          />
        </RosterGroup>

        <RosterGroup title="Left" badge={2}>
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
          <RosterCell name="Mike the Magic" subtitle="Magician" />
        </RosterGroup>
      </Roster>
    </Flex>
  );
};

_Roster.story = 'Roster';

export const _RosterGroup = (args) => {
  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterGroup title={args.title} badge={args.badge}>
          <RosterCell name="Michael Scarn" subtitle="FBI agent" />
          <RosterCell name="Prison Mike" subtitle="Inmate" />
          <RosterCell name="Date Mike" subtitle="Bachelor" />
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
        </RosterGroup>
      </Flex>
    </Flex>
  );
};

_RosterGroup.argTypes = {
  title: { control: 'text', table: { disable: false } },
  badge: { control: 'number' },
  ...commonHiddenArgTypes,
};

_RosterGroup.args = {
  title: 'Left',
  badge: 2,
};

_RosterGroup.story = 'RosterGroup';

export const _RosterHeader = (args) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={args.title}
          badge={args.badge}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<Menu />}
        />
        <RosterGroup>
          <RosterCell name="Michael Scarn" subtitle="FBI agent" />
          <RosterCell name="Prison Mike" subtitle="Inmate" />
          <RosterCell name="Date Mike" subtitle="Bachelor" />
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
        </RosterGroup>
      </Flex>
    </Flex>
  );
};

_RosterHeader.argTypes = {
  title: { control: 'text', table: { disable: false } },
  badge: { control: 'number' },
  ...commonHiddenArgTypes,
};

_RosterHeader.args = {
  title: 'Present',
  badge: 4,
};

_RosterHeader.story = 'RosterHeader';

export const _RosterHeaderWithNavigationIcon = (args) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={args.title}
          badge={args.badge}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<Menu />}
        />

        <RosterGroup>
          <RosterCell name="Michael Scarn" subtitle="FBI agent" />
          <RosterCell name="Prison Mike" subtitle="Inmate" />
          <RosterCell name="Date Mike" subtitle="Bachelor" />
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
        </RosterGroup>
      </Flex>
    </Flex>
  );
};

_RosterHeaderWithNavigationIcon.argTypes = {
  title: { control: 'text', table: { disable: false } },
  badge: { control: 'number' },
  ...commonHiddenArgTypes
};

_RosterHeaderWithNavigationIcon.args = {
  title: 'Present',
  badge: 4,
};

_RosterHeaderWithNavigationIcon.story = 'RosterHeaderWithNavigationIcon';

export const _RosterHeaderWithCustomElements = (args) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={args.title}
          badge={args.badge}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<Menu />}
        >
          <IconButton label="test" icon={<Cog />} />
          <IconButton label="test" icon={<SignalStrength />} />
        </RosterHeader>
        <RosterGroup>
          <RosterCell name="Michael Scarn" subtitle="FBI agent" />
          <RosterCell name="Prison Mike" subtitle="Inmate" />
          <RosterCell name="Date Mike" subtitle="Bachelor" />
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
        </RosterGroup>
      </Flex>
    </Flex>
  );
};

_RosterHeaderWithCustomElements.argTypes = {
  title: { control: 'text', table: { disable: false } },
  badge: { control: 'number' },
  ...commonHiddenArgTypes
};

_RosterHeaderWithCustomElements.args = {
  title: 'Present',
  badge: 4,
};

_RosterHeaderWithCustomElements.story = '_RosterHeaderWithCustomElements';

export const _RosterCell = (args) => {
  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterCell
          name={args.name}
          subtitle={args.subtitle}
          muted={args.muted}
          videoEnabled={args.videoEnabled}
          sharingContent={args.sharingContent}
          runningLate={args.runningLate}
          micPosition={args.micPosition}
          poorConnection={args.poorConnection}
          menu={<Menu />}
        />
      </Flex>
    </Flex>
  );
};

_RosterCell.argTypes = {
  name: { control: 'text' },
  subtitle: { control: 'text' },
  runningLate: { control: 'text' },
  muted: { control: 'boolean' },
  videoEnabled: { control: 'boolean' },
  sharingContent: { control: 'boolean' },
  poorConnection: { control: 'boolean' },
  micPosition: { control: 'select', options: ['grouped', 'leading'] },
  ...commonHiddenArgTypes
};

_RosterCell.args = {
  name: 'Stanley Hudson',
  subtitle: 'Bagel savant',
  runningLate: '',
  muted: false,
  videoEnabled: false,
  sharingContent: false,
  poorConnection: false,
  micPosition: 'grouped',
};

_RosterCell.story = 'RosterCell';
