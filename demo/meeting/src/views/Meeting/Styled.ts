// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { VideoTileGrid } from 'amazon-chime-sdk-component-library-react';

export const StyledLayout = styled.main`
  height: 100vh;
  width: 100%;

  display: grid;
  .video-content {
    grid-area: content;
  }

  grid-template-columns: auto auto 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'nav roster content'
    'meetingcontrols meetingcontrols meetingcontrols';
`;

export const StyledVideoTileGrid = styled(VideoTileGrid)`
  grid-area: content;
`;
