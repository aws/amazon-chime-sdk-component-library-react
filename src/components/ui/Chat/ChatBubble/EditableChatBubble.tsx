// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

import { BaseProps } from '../../Base';
import PrimaryButton from '../../Button/PrimaryButton';
import SecondaryButton from '../../Button/SecondaryButton';
import Input from '../../Input';
import { MessageVariant } from './ChatBubbleContainer';
import { StyledChatBubble } from './Styled';

export interface EditableChatBubbleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** Determines styling for outgoing and incoming messages. */
  variant: MessageVariant;
  /** The name of the user that sent the message. */
  senderName: string;
  /** The text content of the message. */
  content: string;
  /** Determines if the name should be shown or not. */
  showName?: boolean;
  /** Adds the bubble tail style to a message. */
  showTail?: boolean;
  /** A callback function to edit the message's content. */
  save: (e: any, newContent: string) => void;
  /** The button label for saving an edit. */
  saveLabel?: string;
  /** A callback function that changes the UI to allow the user to edit the content of the message */
  cancel: (e: any) => void;
  /** The button label for canceling an edit. */
  cancelLabel?: string;
}

export const EditableChatBubble: FC<
  React.PropsWithChildren<EditableChatBubbleProps>
> = (props) => {
  const {
    showName = true,
    variant,
    senderName,
    content,
    showTail,
    cancel,
    cancelLabel = 'Cancel',
    save,
    saveLabel = 'Save',
    ...rest
  } = props;

  const [text, setText] = useState(content);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const handleChange = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <StyledChatBubble
      variant={variant}
      editable
      {...rest}
      data-testid="editable-chat-bubble"
    >
      {showName && <div className="ch-sender-name">{senderName}</div>}
      <form data-testid="form" onSubmit={(e) => save(e, text)}>
        <Input
          onChange={handleChange}
          value={text}
          showClear={false}
          ref={inputEl}
        />
        <div className="ch-edit-buttons">
          <PrimaryButton
            label={saveLabel}
            data-testid="save-button"
            onClick={(e) => save(e, text)}
          />
          <SecondaryButton
            label={cancelLabel}
            onClick={cancel}
            data-testid="cancel-button"
          />
        </div>
      </form>
      {showTail && (
        <svg viewBox="0 0 4 9" data-testid="tail">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(0, -53)" className="ch-chat-bubble-tail">
              <path d="M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" />
            </g>
          </g>
        </svg>
      )}
    </StyledChatBubble>
  );
};

export default EditableChatBubble;
