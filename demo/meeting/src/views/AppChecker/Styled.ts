// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-width: 85rem;
  padding: 2rem;
  margin: auto;

  @media (max-width: 760px) {
    border-right: unset;
    align-items: unset;
    justify-content: unset;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 65rem;
  height: auto;
  padding: 1rem 0 3rem 0;

  > * {
    flex-basis: auto;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 2.5rem 0 6rem 0;

    > * {
      flex-basis: 50%;
    }

    @media (max-height: 800px) {
      padding: 2rem 0 2rem;
    }
  }
`;
