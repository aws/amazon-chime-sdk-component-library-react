// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Add: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M14.5 5C16.981 5 19 7.019 19 9.5v5c0 2.481-2.019 4.5-4.5 4.5h-5C7.019 19 5 16.981 5 14.5v-5C5 7.019 7.019 5 9.5 5zm0 1h-5C7.57 6 6 7.57 6 9.5v5C6 16.43 7.57 18 9.5 18h5c1.93 0 3.5-1.57 3.5-3.5v-5C18 7.57 16.43 6 14.5 6zM12 8.467c.276 0 .5.223.5.5V11.5h2.533c.276 0 .5.224.5.5s-.224.5-.5.5H12.5v2.533c0 .277-.224.5-.5.5-.277 0-.5-.223-.5-.5V12.5H8.967c-.277 0-.5-.224-.5-.5s.223-.5.5-.5H11.5V8.967c0-.277.223-.5.5-.5z" />
  </Svg>
);

Add.displayName = 'Add';

export default Add;
