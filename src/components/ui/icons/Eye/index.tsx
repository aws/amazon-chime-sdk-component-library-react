// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Eye: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props}>
    <path d="M12.006 7c2.627 0 4.897 1.813 6.339 3.334.888.934.888 2.398 0 3.332-1.442 1.52-3.712 3.334-6.34 3.334-2.626 0-4.897-1.813-6.34-3.335-.887-.933-.887-2.396.002-3.331C7.107 8.814 9.379 7 12.006 7zm0 1c-2.392 0-4.544 1.893-5.614 3.023-.512.539-.512 1.415-.001 1.954 1.07 1.13 3.223 3.022 5.615 3.022 2.39 0 4.544-1.893 5.613-3.022.513-.539.513-1.415 0-1.954C16.55 9.893 14.398 8 12.007 8zm0 1c1.653 0 3 1.346 3 3s-1.347 3-3 3c-1.655 0-3-1.346-3-3s1.345-3 3-3zm0 1c-1.104 0-2 .897-2 2s.896 2 2 2c1.102 0 2-.897 2-2s-.898-2-2-2z" />
  </Svg>
);

export default Eye;
