// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Portal from '.';
import Flex from '../Flex';
import PortalDocs from './Portal.mdx';

export default {
  title: 'UI Components/Portal',
  parameters: {
    docs: {
      page: PortalDocs.parameters.docs.page().props.children.type
    }
  },
  component: Portal
};

// Simple story for Portal element
export const _Portal = () => (
  <Flex layout="fill-space-centered">
    <div id='root-div'>Root Div</div>
    <Portal rootId='root-div'><div>Portal content</div></Portal>
  </Flex>
);

_Portal.story = {
  name: 'Portal',
};