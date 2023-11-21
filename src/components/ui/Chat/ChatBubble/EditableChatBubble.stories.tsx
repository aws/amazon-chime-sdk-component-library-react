// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../../Flex';
import EditableChatBubble from './EditableChatBubble';

export default {
  title: 'UI Components/Chat/EditableChatBubble',
  component: EditableChatBubble,
  parameters: {
    layout: 'fullscreen',
  },
};

export const _EditableChatBubble = (args) => {
  const containerStyles = `
    display: flex; 
    flex-direction: column;
    padding-top: 1rem;
  `;

  const bubbleStyles = `
    margin: 1rem;
  `;

  const save = (e: any, newContent: string) => {
    e.preventDefault();
    console.log('Save clicked with new text:', newContent);
  };

  const cancel = (e: any) => {
    e.preventDefault();
    console.log('cancel clicked');
  };

  return (
    <Flex layout="fill-space-centered" css={containerStyles}>
      <EditableChatBubble
        variant={args.variant}
        senderName={args.senderName}
        content="This messsage has typos that ned to be fixxed."
        showTail={args.showTail}
        showName={args.boolean}
        saveLabel={args.saveLabel}
        cancelLabel={args.cancelLabel}
        css={bubbleStyles}
        save={save}
        cancel={cancel}
      />
    </Flex>
  );
};

_EditableChatBubble.argTypes = {
  showTail: { control: 'boolean' },
  showName: { control: 'boolean' },
  variant: { control: 'select', options: ['incoming', 'outgoing'] },
  senderName: { control: 'text' },
  saveLabel: { control: 'text' },
  cancelLabel: { control: 'text' },
  content: { table: { disable: true } },
  save: { table: { disable: true } },
  cancel: { table: { disable: true } },
};

_EditableChatBubble.args = {
  showTail: false,
  showName: true,
  variant: 'outgoing',
  senderName: 'Michael Scott',
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
};

_EditableChatBubble.story = {
  name: 'EditableChatBubble',
};
