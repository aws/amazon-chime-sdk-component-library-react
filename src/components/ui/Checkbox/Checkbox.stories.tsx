// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Flex from '../Flex';
import { Checkbox } from './';

export default {
  title: 'UI Components/Form/Checkbox',
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
}
