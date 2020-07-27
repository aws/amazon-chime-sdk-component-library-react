// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Attendees from '.';
import AttendeesIconDocs from './Attendees.mdx';

export default {
  title: 'Icons/Attendees',
  parameters: {
    docs: {
      page: AttendeesIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Attendees
};

export const _Attendees = () => <Attendees width={text('width', '2rem')} />;
