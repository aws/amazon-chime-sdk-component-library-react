// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Clear: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props} title="Clear">
    <path d="M12 5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zM9.172 9.17c-.196.196-.196.513 0 .708L11.293 12l-2.12 2.12c-.197.197-.197.513 0 .708.096.098.224.147.352.147.128 0 .256-.05.354-.147L12 12.707l2.121 2.12c.098.099.226.148.353.148.128 0 .256-.05.354-.147.195-.195.195-.511 0-.707L12.708 12l2.12-2.122c.195-.195.195-.512 0-.707-.195-.195-.512-.195-.707 0l-2.12 2.12-2.122-2.12c-.196-.195-.512-.195-.707 0z" />
  </Svg>
);

Clear.displayName = 'Clear';

export default Clear;
