// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Remove: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props}>
    <path d="M14.5 5C16.981 5 19 7.019 19 9.5v5c0 2.481-2.019 4.5-4.5 4.5h-5C7.019 19 5 16.981 5 14.5v-5C5 7.019 7.019 5 9.5 5zm0 1h-5C7.57 6 6 7.57 6 9.5v5C6 16.43 7.57 18 9.5 18h5c1.93 0 3.5-1.57 3.5-3.5v-5C18 7.57 16.43 6 14.5 6zM9.172 9.17c.195-.194.511-.194.707 0L12 11.293l2.121-2.121c.195-.195.512-.195.707 0 .195.195.195.512 0 .707L12.708 12l2.12 2.12c.195.197.195.513 0 .708-.098.098-.226.147-.354.147-.127 0-.255-.05-.353-.147l-2.12-2.121-2.122 2.12c-.098.099-.226.148-.354.148-.128 0-.256-.05-.353-.147-.196-.195-.196-.511 0-.707L11.293 12l-2.12-2.122c-.197-.195-.197-.512 0-.707z" />
  </Svg>
);

Remove.displayName = 'Remove';

export default Remove;
