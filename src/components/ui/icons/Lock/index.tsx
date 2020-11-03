// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Lock: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 5c2.206 0 4 1.696 4 3.78v.924c1.153.356 2 1.418 2 2.687v3.786C18 17.734 16.733 19 15.177 19H8.823C7.267 19 6 17.734 6 16.177V12.39c0-1.27.847-2.331 2-2.687V8.78C8 6.696 9.794 5 12 5zm3.177 5.568H8.823C7.818 10.568 7 11.386 7 12.39v3.786C7 17.182 7.818 18 8.823 18h6.354C16.182 18 17 17.182 17 16.177V12.39c0-1.005-.818-1.823-1.823-1.823zm-3.186 2.831c.276 0 .5.224.5.5v1.066c0 .277-.224.5-.5.5s-.5-.223-.5-.5V13.9c0-.276.224-.5.5-.5zM12 6c-1.654 0-3 1.248-3 2.78v.789h6V8.78C15 7.247 13.654 6 12 6z"/>
  </Svg>
);

Lock.displayName = 'Lock';

export default Lock;
