// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Button } from './';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import IconButton from './IconButton';
import ButtonDocs from './Button.mdx';
import Flex from '../Flex';
import Badge from '../Badge';
import Caution from '../icons/Caution';
import SignalStrength from '../icons/SignalStrength';

export default {
  title: 'UI Components/Form/Buttons',
  parameters: {
    docs: {
      page: ButtonDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Button,
};

export const BasicButton = (args) => (
  <Flex layout="fill-space-centered">
    <Button {...args} />
  </Flex>
);

BasicButton.args = {
  label: 'Basic Button',
  disabled: false,
  selected: false,
};

BasicButton.argTypes = {
  disabled: { control: 'boolean' },
  selected: { table: { disable: true } },
  icon: { table: { disable: true } },
  variant: { table: { disable: true } },
  iconSize: { table: { disable: true } },
};

BasicButton.story = {
  name: 'Basic Button',
};

export const _PrimaryButton = (args) => (
  <Flex layout="fill-space-centered">
    <PrimaryButton {...args} />
  </Flex>
);

_PrimaryButton.args = {
  label: 'Primary Button',
  disabled: false,
  selected: false,
};

_PrimaryButton.argTypes = {
  disabled: { control: 'boolean' },
  selected: { control: 'boolean' },
  icon: { table: { disable: true } },
  iconSize: { table: { disable: true } },
  variant: { table: { disable: true } },
};

_PrimaryButton.story = {
  name: 'Primary button',
};

export const _SecondaryButton = (args) => (
  <Flex layout="fill-space-centered">
    <SecondaryButton {...args} />
  </Flex>
);

_SecondaryButton.args = {
  label: 'Secondary Button',
  disabled: false,
  selected: false,
};

_SecondaryButton.argTypes = {
  disabled: { control: 'boolean' },
  selected: { control: 'boolean' },
  icon: { table: { disable: true } },
  iconSize: { table: { disable: true } },
  variant: { table: { disable: true } },
};
_SecondaryButton.story = {
  name: 'Secondary button',
};

export const _IconButton = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <IconButton {...args} />
    </Flex>
  );
};

_IconButton.args = {
  label: 'Click Me',
  disabled: false,
  selected: false,
  icon: <SignalStrength />,
  iconSize: 'md',
  badge: 'noBadge',
};

const icons = {
  noBadge: undefined,
  basicBadge: <Badge value="7" />,
  iconBadge: <Caution width="1.5rem" />,
};

_IconButton.argTypes = {
  disabled: { control: 'boolean' },
  selected: { control: 'boolean' },
  icon: { table: { disable: true } },
  iconSize: { control: 'radio', options: ['sm', 'md', 'lg'] },
  variant: { table: { disable: true } },
  badge: {
    options: Object.keys(icons),
    mapping: icons,
    control: {
      type: 'radio',
      labels: {
        noBadge: 'No Badge',
        basicBadge: 'Basic Badge',
        iconBadge: 'Icon Badge',
      },
    },
  },
  label: { table: { disable: true } },
};

_IconButton.story = {
  name: 'Icon Button',
};
