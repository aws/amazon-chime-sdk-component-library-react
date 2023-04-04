// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Clock: React.FC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 2.559c.276 0 .5.223.5.5V11.5h3c.276 0 .5.224.5.5s-.224.5-.5.5H12c-.276 0-.5-.224-.5-.5V8.059c0-.277.224-.5.5-.5z" />
  </Svg>
);

Clock.displayName = 'Clock';

export default Clock;
