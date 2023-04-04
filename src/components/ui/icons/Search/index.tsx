// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Search: React.FC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M11 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m7.852 2.145l-3.294-3.253C16.455 13.843 17 12.485 17 11c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.464 0 2.807-.528 3.849-1.403l3.299 3.258c.098.097.225.145.352.145.129 0 .258-.05.355-.148.195-.197.193-.514-.003-.707" />
  </Svg>
);

Search.displayName = 'Search';

export default Search;
