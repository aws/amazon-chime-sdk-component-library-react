// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Badge from './';
import { Lock } from '../icons';

export default {
  title: 'UI Components/Badge',
  component: Badge,
};

export const _Badge = (args) => {
  return (
    <>
      <span style={{ marginRight: '0.5rem' }}>Number of new messages</span>
      <Badge {...args} />
    </>
  );
};

_Badge.args = {
  value: 'text',
  status: 'default',
};

const options = {
  text: '50+',
  icon: <Lock />,
  iconWithWidth: <Lock width="2rem" />,
};

_Badge.argTypes = {
  value: {
    options: Object.keys(options),
    mapping: options,
    control: {
      type: 'radio',
    },
  },
  status: { control: 'radio', options: ['default', 'alert'] },
};

_Badge.story = {
  name: 'Badge',
};
