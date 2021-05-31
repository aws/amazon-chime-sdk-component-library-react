// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledList = styled.dl`
  font-size: 1rem;

  dt {
    display: inline-block;
    margin-bottom: 0.75rem;
    margin-right: 0.5rem;

    &::after {
      content: ':';
    }
  }

  dd {
    display: inline-block;
    font-weight: 600;
  }
`;
