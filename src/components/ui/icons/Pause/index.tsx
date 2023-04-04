// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Pause: React.FC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm-2 3.663c.827 0 1.5.673 1.5 1.5v3.673c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-3.673c0-.827.673-1.5 1.5-1.5zm4 0c.827 0 1.5.673 1.5 1.5v3.673c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-3.673c0-.827.673-1.5 1.5-1.5zm-4 1c-.275 0-.5.225-.5.5v3.673c0 .275.225.5.5.5s.5-.225.5-.5v-3.673c0-.275-.225-.5-.5-.5zm4 0c-.275 0-.5.225-.5.5v3.673c0 .275.225.5.5.5s.5-.225.5-.5v-3.673c0-.275-.225-.5-.5-.5z" />
  </Svg>
);

Pause.displayName = 'Pause';

export default Pause;
