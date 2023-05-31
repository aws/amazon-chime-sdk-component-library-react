// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Textarea from './';

const Wrapper = styled.div`
  width: 30rem;
  margin: 10vh auto;
`;

export default {
  title: 'UI Components/Form/Textarea',
  component: Textarea,
};

export const _Textarea = (args) => (
  <Wrapper>
    <Textarea
      placeholder={args.placeholder}
      label="my test label"
      value={args.value}
      onChange={() => console.log('changed')}
    />
  </Wrapper>
);

_Textarea.argTypes = {
  placeholder: { control: 'text' },
  value: { control: 'text' },
  onChange: { table: { disable: true } },
  label: { table: { disable: true } },
};

_Textarea.args = {
  placeholder: 'Enter your input',
};

_Textarea.story = 'Textarea';
