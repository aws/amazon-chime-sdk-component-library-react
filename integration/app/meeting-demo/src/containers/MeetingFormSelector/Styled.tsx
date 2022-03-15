// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) and (min-height: 600px) {
    min-height: 35.75rem;
    max-width: 30rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
      0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const StyledDiv = styled.div`
  border-bottom: 0.125rem solid #e6e6e6;
  padding: 2rem;
  flex: 1;

  @media (min-width: 600px) and (min-height: 600px) {
    padding: 3rem 3rem 2rem;
  }
`;
