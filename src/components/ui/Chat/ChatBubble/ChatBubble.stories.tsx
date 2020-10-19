// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {useState, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import Flex from '../../Flex';
import ChatBubbleContainer, { Message } from './ChatBubbleContainer';
import EditableChatBubble from './EditableChatBubble';
import ChatBubble from './';
import { PopOverItem, Modal, ModalHeader, ModalBody, ModalButtonGroup, ModalButton } from '../../../../';
import { insertDateHeaders } from '../DateHeader/insertDateHeaders';
import ChatBubbleDocs from './ChatBubble.mdx';

export default {
  title: 'UI Components/Chat',
  parameters: {
    docs: {
      page: ChatBubbleDocs.parameters.docs.page().props.children.type
    }
  },
  component: ChatBubble
};


export const _ChatBubble = () => {
  const theme = useTheme();
  const bgd = theme.chatBubble.container.bgd;

  return (
    <Flex css={`background-color: ${bgd}; height: 100%; padding-top: 1rem;`}>
      <ChatBubbleContainer createdTimestamp={new Date().toString()}>
        <ChatBubble variant='outgoing' senderName='Me' content='This is a message' createdTimestamp={new Date().toString()} />
      </ChatBubbleContainer>
    </Flex>
  );
};

_ChatBubble.story = {
  name: 'ChatBubble'
};

export const ChatBubbleListWithEditAndRedact = () => {

  const createList = (batchSize: number) => {
    const list = [];
    for (let i = 1; i <= batchSize; i++) {
      const message: Message = {
        content: 'Message ' + i.toString(),
        createdTimestamp: '2020-10-05T21:51:26.569Z',
        redacted: false,
        lastUpdatedTimestamp: '2020-10-05T21:51:26.569Z',
        senderName: i%4 === 0 ? 'Alice' : 'Bob',
        senderId: i%4 === 0 ? 'abc': 'def'
      }
      list.push(message);
    }
    return list
  }

  const theme = useTheme();
  const bgd = theme.chatBubble.container.bgd;
  const memberId = 'abc';

  const messages = insertDateHeaders(createList(50));

  const messageList = messages.map((m: Message, i: number) => {
    if (!m.content) {
      return m
    }

    const [lastUpdatedTimestamp, setLastUpdatedTimestamp] = useState(undefined);

    const [editMode, setEditMode] = useState(false);
    const [redacted, setRedacted] = useState(false);
    const [text, setText] = useState(m.redacted ? '(Deleted)' : m.content);
    const [showDiscardModal, setShowDiscardModal] = useState(false);
    const [showRedactModal, setShowRedactModal] = useState(false);

    const moreOptions: ReactNode[] = [<PopOverItem key='1' children={<span>Edit</span>} onClick={() => setEditMode(true)} />, <PopOverItem key='2' children={<span>Delete</span>} onClick={() => setShowRedactModal(true)} />];

    const cancelEdit = (e: any) => {
      e.preventDefault();
      setShowDiscardModal(true)
    }

    const saveEdit = (e: any, newText: string) => {
      e.preventDefault();
      setText(newText);
      setLastUpdatedTimestamp(new Date().toString())
      setEditMode(false);
    }

    const redact = () => {
      setShowRedactModal(false);
      setRedacted(true)
      setText('(Deleted)')
      console.log('redacting. new text', text)
    }

    const discardModal = (
      <Modal onClose={() => setShowDiscardModal(false)}>
          <ModalHeader title='Discard Changes?'/>
          <ModalBody>
          <div>You cannot undo this action.</div>
          <ModalButtonGroup
            primaryButtons={[
              <ModalButton
                label="Discard"
                variant="primary"
                closesModal
                key='1'
                onClick={() => setEditMode(false)}
              />,
              <ModalButton label="Cancel" variant="secondary" closesModal key='2' />
            ]}
          />
          </ModalBody>
      </Modal>
    );

    const redactModal = (
      <Modal onClose={() => setShowRedactModal(false)}>
        <ModalHeader title='Delete Message?'/>
        <ModalBody>
          <div>You cannot undo this action.</div>
          <ModalButtonGroup
              primaryButtons={[
              <ModalButton
                  label="Delete"
                  variant="primary"
                  closesModal
                  onClick={redact}
                  key='1'
              />,
              <ModalButton label="Cancel" variant="secondary" closesModal key='2'/>
              ]}
          />
        </ModalBody>
      </Modal>
    )

    const prevMessageSender = messages[i - 1]?.senderId;
    const currMessageSender = m.senderId;
    const nextMessageSender = messages[i + 1]?.senderId;
    let showTail = true;
    if (
      currMessageSender && // it is a message
      nextMessageSender && // the item after is a message
      currMessageSender === nextMessageSender // the item after is from the same sender
    ) {
      showTail = false
    }
    let showName = true;
    if (
      currMessageSender && // it is a message
      prevMessageSender && // the item before is a message
      currMessageSender === prevMessageSender // the message before is from the same sender
    ) {
      showName = false
    };

    const variant = memberId === m.senderId ? 'outgoing' : 'incoming'
    
    return (
      <ChatBubbleContainer createdTimestamp={new Date().toString()} actions={moreOptions} key={'chatBubble'+i.toString()}>
        {showDiscardModal && discardModal}
        {showRedactModal && redactModal}
        {editMode && !redacted ?
        <EditableChatBubble variant={variant} senderName={m.senderName} content={text} save={saveEdit} cancel={cancelEdit} showName={showName} showTail={showTail} /> :
        <ChatBubble variant={variant} senderName={m.senderName} content={text} createdTimestamp={m.createdTimestamp} redacted={redacted} lastUpdatedTimestamp={lastUpdatedTimestamp} showName={showName} showTail={showTail} />}
      </ChatBubbleContainer>
    )
  });
  
  return (
    <Flex css={`overflow-y: scroll; display: flex; justify-content: center; width: 100%; height: 40rem; background-color: ${bgd}`}>
      <ul>{messageList}</ul>
    </Flex>
  );
};

ChatBubbleListWithEditAndRedact.story = {
  name: 'ChatBubbleListWithEditAndRedact'
};