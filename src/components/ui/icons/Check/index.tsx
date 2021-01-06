// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Check: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M16.834 9.178c-.18-.21-.494-.238-.705-.061l-5.912 4.975-2.33-2.846c-.175-.214-.491-.245-.703-.07-.214.175-.246.49-.071.703l2.652 3.238.004.006c.037.044.085.073.132.1.015.01.026.025.04.032.068.03.138.046.21.046.056 0 .113-.01.166-.028.038-.013.07-.037.106-.06.015-.01.03-.014.045-.025v-.001l.006-.003 6.299-5.301c.21-.178.239-.493.06-.705" />
  </Svg>
);

Check.displayName = 'Check';

export default Check;
