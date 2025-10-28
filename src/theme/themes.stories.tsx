// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from './';
import { Button } from '../components/ui/Button';
import PrimaryButton from '../components/ui/Button/PrimaryButton';
import SecondaryButton from '../components/ui/Button/SecondaryButton';
import Meeting from '../components/ui/icons/Meeting';
import { Roster } from '../components/ui/Roster';
import RosterGroup from '../components/ui/Roster/RosterGroup';
import RosterHeader from '../components/ui/Roster/RosterHeader';
import RosterCell from '../components/ui/Roster/RosterCell';
import Flex from '../components/ui/Flex';

const meta: Meta = {
  title: 'Themes',
  parameters: {
    docs: {
      page: null,
    },
  },
};

export default meta;

type Story = StoryObj;

export const LightThemeButtons: Story = {
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Flex container alignItems="center" justifyContent="space-around">
        <Button label="Basic button" />
        <PrimaryButton label="Primary" icon={<Meeting />} />
        <SecondaryButton label="This is a secondary button" />
      </Flex>
    </ThemeProvider>
  ),
  name: 'Light Theme - Buttons',
};

export const DarkThemeButtons: Story = {
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Flex container alignItems="center" justifyContent="space-around">
        <Button label="Basic button" />
        <PrimaryButton label="Primary" icon={<Meeting />} />
        <SecondaryButton label="This is a secondary button" />
      </Flex>
    </ThemeProvider>
  ),
  name: 'Dark Theme - Buttons',
};

export const LightThemeRoster: Story = {
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Roster>
        <RosterHeader
          title="Present"
          badge={2}
          onClose={() => {}}
          searchValue="Michael"
          onSearch={() => {}}
        />
        <RosterGroup>
          <RosterCell
            name="Michael Scott"
            subtitle="Regional Manager"
            muted={false}
            videoEnabled={true}
          />
          <RosterCell
            name="Michael Scarn"
            subtitle="FBI agent"
            muted={true}
            videoEnabled={false}
          />
        </RosterGroup>
        <RosterGroup title="Left" badge={2}>
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
          <RosterCell name="Mike the Magic" subtitle="Magician" />
        </RosterGroup>
      </Roster>
    </ThemeProvider>
  ),
  name: 'Light Theme - Roster',
};

export const DarkThemeRoster: Story = {
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Roster>
        <RosterHeader
          title="Present"
          badge={2}
          onClose={() => {}}
          searchValue="Michael"
          onSearch={() => {}}
        />
        <RosterGroup>
          <RosterCell
            name="Michael Scott"
            subtitle="Regional Manager"
            muted={false}
            videoEnabled={true}
          />
          <RosterCell
            name="Michael Scarn"
            subtitle="FBI agent"
            muted={true}
            videoEnabled={false}
          />
        </RosterGroup>
        <RosterGroup title="Left" badge={2}>
          <RosterCell name="Dwight" subtitle="Assistant regional manager" />
          <RosterCell name="Mike the Magic" subtitle="Magician" />
        </RosterGroup>
      </Roster>
    </ThemeProvider>
  ),
  name: 'Dark Theme - Roster',
};
