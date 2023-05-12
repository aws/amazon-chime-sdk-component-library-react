// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../../Flex';
import MessageAttachment from '.';

export default {
  title: 'UI Components/Chat/MessageAttachment',
  component: MessageAttachment,
};

export const _MessageAttachment = () => {
  return (
    <Flex layout="fill-space-centered">
      <MessageAttachment
        name="Monthly_report.txt"
        size="30.3KB"
        downloadUrl="https://download.com/url.txt"
      />
    </Flex>
  );
};

_MessageAttachment.story = {
  name: 'MessageAttachment',
};
