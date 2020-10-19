// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../../Flex';
import DateHeader from './';
import DateHeaderDocs from './DateHeader.mdx';

// export default {
//   title: 'UI Components/Chat/DateHeader',
//   parameters: {
//     docs: {
//       page: DateHeaderDocs.parameters.docs.page().props.children.type
//     }
//   },
//   component: DateHeader
// };


export const _DateHeader = () => {

  return (
    <Flex>
      <DateHeader date='2020-10-05T21:51:26.569Z' key='1' locale={undefined} />
    </Flex>
  );
};

_DateHeader.story = {
  name: 'DateHeader'
};