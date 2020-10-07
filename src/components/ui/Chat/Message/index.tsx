// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes } from 'react';

import { BaseProps } from '../../Base';
import { StyledMessage, StyledMessageInfo, StyledMessageContent } from './Styled';
import PopOver from '../../PopOver';
import PopOverItem, { PopOverItemProps } from '../../PopOver/PopOverItem';
import { Dots } from '../../icons';

export type MessageVariant = 'outgoing' | 'incoming';

export interface MessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /* determines styling for outgoing and incoming messages. */
    variant: MessageVariant;
    /* the name of the user that sent the message. */
    name: string;
    /* The timestamp the message was created. */
    time: string;
    /* The text content of the message. */
    content: string;
    /* The options available in the more options button. */
    moreOptions?: PopOverItemProps[] | null;
    /* Adds the bubble caret to a message. */
    showCaret?: boolean;
}

const Message = (props: MessageProps) => {

    return (
        <StyledMessage {...props} data-testid='chat-message'>
            <StyledMessageContent {...props}>
                <div className='ch-sender-name'>{props.name}</div>
                <div>{props.content}</div>
                {props.showCaret &&   
                <svg viewBox="0 0 4 9">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(0.000000, -53.000000)" className='ch-chat-caret'>
                        <path d="M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" />
                      </g>
                    </g>
                </svg>}
            </StyledMessageContent>
            <StyledMessageInfo>
                <span>{props.time}</span>
                {(props.moreOptions && props.moreOptions?.length !== 0) && 
                <PopOver
                    a11yLabel="Open channel options"
                    placement="bottom-end"
                    renderButton={isOpen => (
                        <Dots width='2rem' height='2rem' className={`${isOpen ? 'isOpen' : ''} ch-more-options`} />
                    )}
                    children={props.moreOptions?.map((option: PopOverItemProps, index: number) => (
                        <PopOverItem {...option} key={index} />
                      ))}
                />}
            </StyledMessageInfo>
        </StyledMessage>
    )
}

export default Message;