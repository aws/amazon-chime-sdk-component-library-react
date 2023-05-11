// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { ContentTile } from './';

export default {
  title: 'UI Components/Video/ContentTile',
  component: ContentTile,
};

export const _ContentTile = (args) => {
  return (
    <div style={{ height: '30rem', width: '50rem', margin: '2rem auto' }}>
      <ContentTile {...args} />
    </div>
  );
};

_ContentTile.argTypes = {
  nameplate: { control: 'text' },
  objectFit: { table: { disable: true } },
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
};

_ContentTile.args = {
  nameplate: 'Content share',
};

_ContentTile.story = {
  name: 'ContentTile',
};
