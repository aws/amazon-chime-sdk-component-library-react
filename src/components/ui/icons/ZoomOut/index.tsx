// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const ZoomOut: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <g fill="none" fillRule="evenodd">
      <g>
        <path d="M0 0H24V24H0z" />
        <path
          fill="currentColor"
          d="M11 5c3.309 0 6 2.691 6 6 0 1.485-.545 2.843-1.442 3.892l3.294 3.253c.196.193.198.51.003.707-.097.098-.226.148-.355.148-.127 0-.254-.048-.352-.145l-3.299-3.258C13.807 16.472 12.464 17 11 17c-3.309 0-6-2.691-6-6s2.691-6 6-6zm0 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm2.5 4.5c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z"
        />
      </g>
    </g>
  </Svg>
);

ZoomOut.displayName = 'ZoomOut';

export default ZoomOut;
