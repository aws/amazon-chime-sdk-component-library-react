// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import { Flex } from './';
import FlexDocs from './Flex.mdx';

const Child = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  height: 90vh;
  margin: 1rem;
  border-radius: 4px;
`;

export const Block = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  height: 5vh;
  margin: 1rem;
  border-radius: 4px;
`;

const Stack = styled(Flex)`
  padding: 1rem 20vw;
`;

const StackChild = styled.div`
  height: 20vh;
  margin-bottom: 1vh;
  background-color: ${(props) => props.theme.colors.primary.lightest};
`;

export const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary.lightest};
  color: ${(props) => props.theme.colors.primary.darkest};
  padding: 2rem;
  border-radius: 4px;
`;

export default {
  title: 'UI Components/Flex',
  parameters: {
    docs: {
      page: FlexDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Flex,
  excludeStories: ['Block', 'Title'],
};

export const FillSpaceCentered = () => {
  return (
    <Flex layout="fill-space-centered">
      <Title>I'm centered</Title>
    </Flex>
  );
};

FillSpaceCentered.story = {
  name: 'fill space centered',
};

export const EqualColumns = () => {
  return (
    <Flex tag="header" layout="equal-columns">
      <Child tag="article" />
      <Child tag="article" />
      <Child tag="article" />
      <Child tag="article" />
    </Flex>
  );
};

EqualColumns.story = {
  name: 'equal columns',
};

export const _Stack = () => {
  return (
    <Stack layout="stack">
      <StackChild as="article" />
      <StackChild as="article" />
      <StackChild as="article" />
      <StackChild as="article" />
    </Stack>
  );
};

_Stack.story = {
  name: 'stack',
};
