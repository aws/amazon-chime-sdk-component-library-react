// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Label } from './';

export default {
  title: 'UI Components/Label',
  component: Label,
};

export const BasicLabel = () => {
  return <Label>Hello world</Label>;
};

BasicLabel.story = {
  name: 'Basic Label',
};
