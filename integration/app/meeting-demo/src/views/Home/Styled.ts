// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import styled from 'styled-components';

export const StyledLayout = styled.main`
  display: block;
  min-height: 100%;
  margin: auto;

  @media (min-width: 600px) and (min-height: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;
