// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Radio } from '.';
import Flex from '../Flex';
import RadioDocs from './Radio.mdx';
import Add from '../icons/Add';

export default {
  title: 'UI Components/Form/Radio',
  parameters: {
    docs: {
      page: RadioDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Radio,
};

export const _Radio = () => (
  <Flex layout="fill-space-centered">
    <Radio
      value="bananas"
      label="Radio Input"
      checked={boolean('Checked', false)}
      onChange={(e: any) => console.log(e)}
    />
  </Flex>
);

export const _RadioIcon = () => (
  <Flex layout="fill-space-centered">
    <Radio
      value="Add"
      label="Radio Input"
      icon={<Add width="2rem" />}
      checked={boolean('Checked', false)}
      onChange={(e: any) => console.log(e)}
    />
  </Flex>
);

_Radio.story = {
  name: 'Radio',
};

_RadioIcon.story = {
  name: 'Radio with Icon',
};
