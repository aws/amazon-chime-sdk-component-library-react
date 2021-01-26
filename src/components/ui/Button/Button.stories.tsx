// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { Button } from './';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import IconButton from './IconButton';
import Meeting from '../icons/Meeting';
import ButtonDocs from './Button.mdx';
import Flex from '../Flex';
import Badge from '../Badge';
import Cog from '../icons/Cog';
import Chat from '../icons/Chat';
import Caution from '../icons/Caution';
import SignalStrength from '../icons/SignalStrength'

export default {
  title: 'UI Components/Form/Buttons',
  parameters: {
    docs: {
      page: ButtonDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Button,
};

export const BasicButton = () => (
  <Flex layout="fill-space-centered">
    <Button label="Basic button" />
  </Flex>
);

BasicButton.story = {
  name: 'Basic button',
};

export const _PrimaryButton = () => (
  <Flex layout="fill-space-centered">
    <PrimaryButton label="Primary" disabled={boolean('Disabled', false)} />
  </Flex>
);

_PrimaryButton.story = {
  name: 'Primary button',
};

export const _SecondaryButton = () => (
  <Flex layout="fill-space-centered">
    <SecondaryButton
      label="This is a secondary button"
      disabled={boolean('Disabled', false)}
    />
  </Flex>
);

_SecondaryButton.story = {
  name: 'Secondary button',
};

export const _IconButton = () => {
  return (
    <Flex layout="fill-space-centered">
      <IconButton
        selected={boolean('Selected', false)}
        label="click me"
        icon={<SignalStrength />}
        iconSize={select('iconSize', ['sm', 'md', 'lg'], 'sm')}
        disabled={boolean('Disabled', false)}
      />
    </Flex>
  );
};

_IconButton.story = {
  name: 'Icon button',
};

export const _IconButtoWithBadge = () => {
  return (
    <Flex layout="fill-space-centered">
      <IconButton
        selected={boolean('Selected', false)}
        label="click me"
        icon={<SignalStrength />}
        iconSize={select('iconSize', ['sm', 'md', 'lg'], 'sm')}
        badge={<Badge value="7"/>}
      />
    </Flex>
  );
};

_IconButtoWithBadge.story = {
  name: 'Icon button with badge',
};

export const _IconButtoWithBadgeIcon = () => {
  return (
    <Flex layout="fill-space-centered">
      <IconButton
        selected={boolean('Selected', false)}
        label="click me"
        icon={<SignalStrength />}
        iconSize={select('iconSize', ['sm', 'md', 'lg'], 'sm')}
        badge={<Caution width="1.5rem" css={`top: 0; right: 0;`} />}
      />
    </Flex>
  );
};

_IconButtoWithBadgeIcon.story = {
  name: 'Icon button with badge icon',
};
