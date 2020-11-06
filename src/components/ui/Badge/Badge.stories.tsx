// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select } from '@storybook/addon-knobs';
import Flex from '../Flex';
import { Badge } from './';
import mdx from './Badge.mdx';
import { Lock } from '../icons';

export default {
  title: 'UI Components/Badge',
  parameters: {
    docs: {
      page: mdx.parameters.docs.page().props.children.type,
    },
  },
  component: Badge,
};

export const BasicBadge = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ 'alignItems': 'center', 'display': 'flex'}}>
        <span style={{ 'marginRight': '0.5rem' }}>Number of new messages</span>
        <Badge
          value="50+"
          status={select('status', { default: 'default', alert: 'alert', }, 'default')}
        />
      </div>
      <div style={{ 'marginLeft': '1rem', 'display': 'flex' }}>
        <span style={{ 'marginRight': '0.5rem' }}>Lock badge</span>
        <Badge
          value={<Lock />}
        />
      </div>
    </Flex>
  );
}

BasicBadge.story = {
  name: 'Basic Badge',
};


