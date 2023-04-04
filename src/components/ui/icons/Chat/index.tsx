// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Chat: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props} title="Chat">
    <path d="M8.497 6C7.12 6 6 7.12 6 8.497v9.413l1.022-.727c1.483-1.054 4.17-1.911 5.99-1.911h2.48c1.376 0 2.496-1.121 2.496-2.498V8.497C17.988 7.12 16.868 6 15.491 6H8.497zM5.905 19c-.14 0-.284-.034-.416-.102-.302-.156-.489-.464-.489-.804V8.497C5 6.569 6.568 5 8.497 5h6.994c1.93 0 3.497 1.569 3.497 3.497v4.277c0 1.929-1.568 3.498-3.497 3.498h-2.48c-1.616 0-4.093.791-5.409 1.727l-1.172.833c-.158.111-.34.168-.525.168z" />
  </Svg>
);

Chat.displayName = 'Chat';

export default Chat;
