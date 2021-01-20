// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { ContentTile } from './';
import { Flex } from '../Flex';
import ContentTileDocs from './ContentTile.mdx';

export default {
  title: 'UI Components/Video/ContentTile',
  parameters: {
    docs: {
      page: ContentTileDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ContentTile,
};

export const _ContentTile = () => {
  return (
    <Flex css="height: 100vh" layout="fill-space-centered">
      <div style={{ height: '30rem', width: '50rem', margin: '2rem auto' }}>
        <ContentTile nameplate="Content share" />
      </div>
    </Flex>
  );
};

_ContentTile.story = {
  name: 'ContentTile',
};
