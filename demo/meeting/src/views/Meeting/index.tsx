// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { StyledLayout, StyledVideoTileGrid } from './Styled';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { NavigationProvider } from '../../providers/NavigationProvider';

const MeetingView = () => (
  <StyledLayout>
    <NavigationProvider>
      <NavigationControl />
    </NavigationProvider>
    <StyledVideoTileGrid />
  </StyledLayout>
);

export default MeetingView;
