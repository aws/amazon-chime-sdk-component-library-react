import React from 'react'
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Flex } from './';

const Child = styled(Flex)`
  background-color: ${props => props.theme.colors.primary.lightest};
  margin-right: 1rem;
  border-radius: 4px;
`;

const Stack = styled(Flex)`
  padding: 1rem 20vw;
`;

const StackChild = styled.div`
  height: 20vh;
  margin-bottom: 1vh;
  background-color: ${props => props.theme.colors.primary.lightest};
`;

const Title = styled.h1`
  background-color: ${props => props.theme.colors.primary.lightest};
  color: ${props => props.theme.colors.primary.darkest};
  padding: 2rem;
  border-radius: 4px;
`;

storiesOf('Flex', module)
.add('fill space centered', () => {
  return (
    <Flex layout="fill-space-centered">
      <Title>I'm centered</Title>
    </Flex>
  );
})
.add('equal columns', () => {
  return (
    <Flex
      as="header"
      layout="equal-columns"
    >
      <Child as="article"/>
      <Child as="article"/>
      <Child as="article"/>
      <Child as="article"/>
    </Flex>
  );
})
.add('stack', () => {
  return (
    <Stack layout="stack">
      <StackChild as="article"/>
      <StackChild as="article"/>
      <StackChild as="article"/>
      <StackChild as="article"/>
    </Stack>
  );
})
;

