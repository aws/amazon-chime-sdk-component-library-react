// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Document from '.';

export default {
  title: 'UI Components/Icons/Document',
  component: Document,
};

export const _Document = (args) => <Document {...args} />;

_Document.argTypes = {
  width: { control: 'text' },
};

_Document.args = {
  width: '2rem',
};

_Document.story = {
  name: 'Document',
};
