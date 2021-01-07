// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Flex from '../Flex';
import Checkbox from './';
import CheckboxDocs from './Checkbox.mdx';

export default {
  title: 'UI Components/Form/Checkbox',
  parameters: {
    docs: {
      page: CheckboxDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Checkbox,
};

export const _Checkbox = () => {
  return (
    <Flex layout="fill-space-centered">
      <Checkbox
        value="test"
        checked={boolean('checked', false)}
        onChange={() => console.log('change')}
        aria-label="checkbox label"
      />
    </Flex>
  );
};

_Checkbox.story = {
  name: 'Checkbox',
};
