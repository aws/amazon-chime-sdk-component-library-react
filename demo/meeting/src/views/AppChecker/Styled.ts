// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledLayout = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2rem;
  margin: auto;
  min-height: 100%;

  > * {
    flex-basis: auto;
  }
`;
