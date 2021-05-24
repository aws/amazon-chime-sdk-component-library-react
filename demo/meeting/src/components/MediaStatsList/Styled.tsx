// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledList = styled.dl`
  font-size: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  width: 28.125rem;
`;

export const StyledItemMetricName = styled.dt`
  line-height: 1.5rem;
  margin-left: 1.5rem;
  width: 30%;
`;

export const StyledItemMetricValue = styled.dd`
  line-height: 1.5rem;
  width: 30%;
  margin-left: 0;
`;

export const StyledMediaMetricsWrapper = styled.div`
  header {
    border-bottom: none;
  }

  .ch-title {
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0 1.5rem;
  }

  .ch-popover-menu {
    max-width: 30rem;
  }
`;