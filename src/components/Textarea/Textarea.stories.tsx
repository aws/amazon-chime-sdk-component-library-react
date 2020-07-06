// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import Textarea from './';

const Wrapper = styled.div`
  width: 30rem;
  margin: 10vh auto;
`;

export default {
  title: 'Form/Textarea',
};

export const _Textarea = () => (
  <Wrapper>
    <Textarea
      placeholder="text goes here"
      label="my test label"
      value={text("value", "some sample text")}
      onChange={() => console.log('changed')}
    />
  </Wrapper>
);
