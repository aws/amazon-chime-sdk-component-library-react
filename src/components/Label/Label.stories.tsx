// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Flex from '../Flex';
import { Label } from './';

export default {
  title: 'Label',
};

export const BasicLabel = () => {
  return (
    <Flex layout="fill-space-centered">
      <Label>Hello world</Label>
    </Flex>
  );
};

BasicLabel.story = {
  name: 'Basic Label',
};
