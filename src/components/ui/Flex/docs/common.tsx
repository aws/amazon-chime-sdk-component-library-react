// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import Flex from '..';

export const Child = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  color: ${(props) => props.theme.colors.primary.darkest};
  margin: 1vh;
  border-radius: 4px;
  height: 20vh;
  width: 20vw;
`;

export const Block = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  height: 5vh;
  margin: 1rem;
  border-radius: 4px;
`;

export const Stack = styled(Flex)`
  padding: 1rem 20vw;
`;

export const StackChild = styled.div`
  height: 20vh;
  width: 20vw;
  margin: 1vh;
  background-color: ${(props) => props.theme.colors.primary.lightest};
`;

export const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  color: ${(props) => props.theme.colors.primary.darkest};
  padding: 2rem;
  border-radius: 4px;
`;
