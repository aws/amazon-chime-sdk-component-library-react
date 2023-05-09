// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '..';
import { Title, Stack, StackChild, Child } from './common';

const commonHiddenArgTypes = {
  alignItems: { table: { disable: true } },
  container: { table: { disable: true } },
  flexWrap: { table: { disable: true } },
  flexDirection: { table: { disable: true } },
  flexBasis: { table: { disable: true } },
  flexShrink: { table: { disable: true } },
  flexGrowth: { table: { disable: true } },
  justifyContent: { table: { disable: true } },
  style: { table: { disable: true } },
  flex: { table: { disable: true } },
  flexGrow: { table: { disable: true } },
  layout: { table: { disable: true } },
};

const meta: Meta<typeof Flex> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'UI Components/Flex',
  component: Flex,
};

type Story = StoryObj<typeof Flex>;

export const FillSpaceCentered: Story = {
  args: { layout: 'fill-space-centered' },
  argTypes: { ...commonHiddenArgTypes },
  render: (args) => {
    return (
      <Flex {...args}>
        <Title>I'm centered</Title>
      </Flex>
    );
  },
};

export const EqualColumns: Story = {
  args: { layout: 'equal-columns' },
  argTypes: { ...commonHiddenArgTypes },
  render: (args) => {
    return (
      <Flex {...args}>
        <Child tag="article" />
        <Child tag="article" />
        <Child tag="article" />
        <Child tag="article" />
      </Flex>
    );
  },
};

export const StackStory: Story = {
  argTypes: { ...commonHiddenArgTypes },
  render: (args) => {
    return (
      <Stack layout="stack">
        <StackChild as="article" />
        <StackChild as="article" />
        <StackChild as="article" />
        <StackChild as="article" />
      </Stack>
    );
  },
};

StackStory.storyName = 'Stack'

export default meta;
