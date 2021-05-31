// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledMetrics = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  min-width: 7.5rem;
  z-index: 5;

  .metric {
    white-space: nowrap;
    font-size: 0.75rem;
    margin-bottom: 0.375rem;

    &.title {
      font-weight: bold;
    }
  }
`;
