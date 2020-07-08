// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledLayout = styled.main`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 18.5rem;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'content roster'
    'nav nav';

  .video-content {
    grid-area: content;
  }
`;
