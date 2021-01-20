// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Camera from './';
import CameraIconDocs from './Camera.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Camera',
  parameters: {
    docs: {
      page: CameraIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Camera,
};

export const _Camera = () => (
  <Flex layout="fill-space-centered">
    <Camera
      disabled={boolean('disabled', false)}
      width={text('width', '2rem')}
    />
  </Flex>
);
