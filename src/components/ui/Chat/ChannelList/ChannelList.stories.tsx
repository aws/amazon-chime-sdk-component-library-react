// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../../Flex';
import ChannelList from './';
import ChannelItem from './ChannelItem';
import PopOverItem from '../../PopOver/PopOverItem';
import ChannelListDocs from './ChannelList.mdx';

// export default {
//   title: 'UI Components/Chat',
//   parameters: {
//     docs: {
//       page: ChannelListDocs.parameters.docs.page().props.children.type
//     }
//   },
//   component: ChannelList
// };

export const _ChannelList = () => {
  const [activeChannelId, setActiveChannelId] = useState(null);

  return (
    <Flex layout="fill-space-centered">
        <ChannelList
          activeChannelId={activeChannelId}
          setActiveChannelId={setActiveChannelId}
        >
          <ChannelItem
            name='Channel 1'
            id='abc'
            actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />}
          />
          <ChannelItem
            name='Channel 2'
            id='dce'
            actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />}
          />
          <ChannelItem
            name='Channel 3'
            id='fgh'
            actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />}
          />
          <ChannelItem
            name='Channel 4'
            id='ijk'
            actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />}
          />
        </ChannelList>
    </Flex>
  )
};

_ChannelList.story = {
  name: 'ChannelList'
}; 