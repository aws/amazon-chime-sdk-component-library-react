// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const ScreenShare: React.FC<React.PropsWithChildren<SvgProps>> = ({
  title = 'Screen share',
  ...rest
}) => (
  <Svg {...rest} title={title}>
    <path d="M15.5 17c.276 0 .5.224.5.5s-.224.5-.5.5h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM18 6c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2zm0 1H6c-.552 0-1 .449-1 1v6c0 .551.448 1 1 1h12c.552 0 1-.449 1-1V8c0-.551-.448-1-1-1z" />
  </Svg>
);

ScreenShare.displayName = 'ScreenShare';

export default ScreenShare;
