// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import EditableChatBubble from './EditableChatBubble';

import EditableChatBubbleDocs from './EditableChatBubble.mdx';

export default {
  title: 'UI Components/Chat/EditableChatBubble',
  parameters: {
    docs: {
      page: EditableChatBubbleDocs.parameters.docs.page().props.children.type,
    },
  },
  component: EditableChatBubble,
};

export const _EditableChatBubble = () => {
  const showTail = boolean('showTail', false);
  const showName = boolean('showName', true);

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
        variant="outgoing"
        senderName="Michael Scott"
        content="This messsage has typos that ned to be fixxed."
        showTail={showTail}
        css={bubbleStyles}
        showName={showName}
        save={save}
        cancel={cancel}
      />
    </Flex>
  );
};

_EditableChatBubble.story = {
  name: 'EditableChatBubble',
};
