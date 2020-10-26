// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Attachment from '.';
import AttachmentIconDocs from './Attachment.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Attachment',
  parameters: {
    docs: {
      page: AttachmentIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Attachment
};

export const _Attachment = () => <Flex layout="fill-space-centered"><Attachment width={text('width', '2rem')} /></Flex>;
