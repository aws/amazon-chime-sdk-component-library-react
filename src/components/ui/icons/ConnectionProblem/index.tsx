// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const ConnectionProblem: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M6.113 13.03h3.5c.496 0 .898.403.898.898v4.91l6.398-7.808h-3.5c-.495 0-.898-.402-.898-.897V5.19l-6.398 7.84zm4.295 6.995c-.108 0-.215-.02-.32-.06-.35-.133-.577-.462-.577-.837V14.03H5.9c-.358 0-.673-.204-.82-.532-.147-.327-.09-.698.149-.966l6.7-8.213c.265-.296.65-.395 1.004-.258.35.133.577.462.577.837v5.132h3.604c.36 0 .676.205.823.533.148.328.09.7-.148.969l-6.7 8.176c-.184.208-.43.317-.682.317z" />
  </Svg>
);

ConnectionProblem.displayName = 'ConnectionProblem';

export default ConnectionProblem;
