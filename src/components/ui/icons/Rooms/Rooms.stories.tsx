// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Rooms from '.';
import RoomsIconDocs from './Rooms.mdx';

export default {
  title: 'Icons/Rooms',
  parameters: {
    docs: {
      page: RoomsIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Rooms
};

export const _Rooms = () => <Rooms width={text('width', '2rem')} />;
