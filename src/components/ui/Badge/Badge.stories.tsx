// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Flex from '../Flex';
import { Badge } from './';
import mdx from './Badge.mdx';
import { Information, Lock, Pin } from '../icons';

export default {
  title: 'UI Components/Badge',
  parameters: {
    docs: {
      page: mdx.parameters.docs.page().props.children.type,
    },
  },
  component: Badge,
};

export const BasicBadge = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <span style={{ marginRight: '0.5rem' }}>Number of new messages</span>
        <Badge {...args} />
      </div>
    </Flex>
  );
};

BasicBadge.args = {
  value: '50+',
  status: 'default',
};

BasicBadge.argTypes = {
  value: { control: 'text' },
  status: { control: 'radio', options: ['default', 'alert'] },
};

BasicBadge.story = {
  name: 'Basic Badge',
};

export const IconBadge = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ marginLeft: '1rem', display: 'flex' }}>
        <span style={{ marginRight: '0.5rem' }}>Lock badge</span>
        <Badge {...args} />
      </div>
    </Flex>
  );
};

IconBadge.args = {
  value: <Lock />,
  status: 'default',
};

const icons = { lock: <Lock />, pin: <Pin />, information: <Information /> };

IconBadge.argTypes = {
  value: {
    options: Object.keys(icons),
    mapping: icons,
    control: {
      type: 'radio',
      labels: {
        lock: 'Lock',
        pin: 'Pin',
        information: 'Info',
      },
    },
  },
  status: { control: 'radio', options: ['default', 'alert'] },
};

IconBadge.story = {
  name: 'Icon Badge',
};
