// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { text, select, boolean, number } from '@storybook/addon-knobs';

import Flex from '../Flex';
import Roster from './';
import RosterGroup from './RosterGroup';
import RosterCell from './RosterCell';
import RosterHeader from './RosterHeader';
import RosterDocs from './Roster.mdx';
import IconButton from '../Button/IconButton';
import SignalStrength from '../icons/SignalStrength';
import Cog from '../icons/Cog';

export default {
  title: 'UI Components/Roster',
  parameters: {
    docs: {
      page: RosterDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Roster,
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
          onMobileToggleClick={() => alert('Open Navigation')}
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

export const _RosterGroup = () => {
  const title = text('title', 'Left');
  const badge = number('badge', 2);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterGroup title={title} badge={badge}>
          <RosterCell name="Michael Scarn" subtitle="FBI agent" />
          <RosterCell name="Prison Mike" subtitle="Inmate" />
          <RosterCell name="Date Mike" subtitle="Bachelor" />
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
        </RosterGroup>
      </Flex>
    </Flex>
  );
};

_RosterGroup.story = 'RosterGroup';

export const _RosterHeader = () => {
  const title = text('title', 'Present');
  const badge = number('badge', 4);
  const children = text('children', '');
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={title}
          badge={badge}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<Menu />}
        >
          {children}
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

_RosterHeader.story = 'RosterHeader';

export const _RosterHeaderWithNavigationIcon = () => {
  const title = text('title', 'Present');
  const badge = number('badge', 4);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={title}
          badge={badge}
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

_RosterHeaderWithNavigationIcon.story = 'RosterHeaderWithNavigationIcon';

export const _RosterHeaderWithCustomElements = () => {
  const title = text('title', 'Present');
  const badge = number('badge', 4);

  const [search, setSearch] = useState('');

  const handleSearch = e => setSearch(e.target.value);

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterHeader
          title={title}
          badge={badge}
          onClose={() => alert('Closing')}
          searchValue={search}
          onSearch={handleSearch}
          menu={<Menu />}
        >
          <IconButton label="test" icon={<Cog />}/>
          <IconButton label="test" icon={<SignalStrength />}/>
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

_RosterHeaderWithCustomElements.story = '_RosterHeaderWithCustomElements';


export const _RosterCell = () => {
  const name = text('name', 'Stanley Hudson');
  const subtitle = text('subtitle', 'Bagel savant');
  const muted = boolean('muted', false);
  const videoEnabled = boolean('videoEnabled', false);
  const sharingContent = boolean('sharingContent', false);
  const poorConnection = boolean('poorConnection', false);
  const runningLate = text('runningLate', '');
  const micPosition = select(
    'micPosition',
    {
      grouped: 'grouped',
      leading: 'leading',
    },
    'grouped'
  );

  return (
    <Flex container layout="fill-space-centered" css="height: 100vh;">
      <Flex css="width: 100%; max-width: 280px;">
        <RosterCell
          name={name}
          subtitle={subtitle}
          muted={muted}
          videoEnabled={videoEnabled}
          sharingContent={sharingContent}
          runningLate={runningLate}
          micPosition={micPosition}
          poorConnection={poorConnection}
          menu={<Menu />}
        />
      </Flex>
    </Flex>
  );
};

_RosterCell.story = 'RosterCell';
