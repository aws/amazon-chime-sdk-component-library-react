// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
  width: 100%;
  height: 0.625rem;
  background-color: #ecf0f1;
  border-radius: 0.25rem;
`;

const Progress = styled.div`
  height: 0.625rem;
  background-color: #18bc9c;
  border-radius: 0.25rem;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 33ms ease-in-out;
  will-change: transform;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActivityBar = React.forwardRef((props, ref: any) => (
  <Track>
    <Progress ref={ref} />
  </Track>
));

ActivityBar.displayName = 'ActivityBar';

export default ActivityBar;
