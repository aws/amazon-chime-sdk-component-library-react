// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from 'react';

export const ChannelListContext = createContext({
  setActiveChannelArn(arn: string) {},
  activeChannelArn: '',
});

export const useChannelListContext = () => {
  return useContext(ChannelListContext);
}

export default ChannelListContext;