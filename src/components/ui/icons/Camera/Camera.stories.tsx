// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Camera from './';
import CameraIconDocs from './Camera.mdx';

export default {
  title: 'Icons/Camera',
  parameters: {
    docs: {
      page: CameraIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Camera
};

export const _Camera = () => (
  <Camera disabled={boolean('disabled', false)} width={text('width', '2rem')} />
);
