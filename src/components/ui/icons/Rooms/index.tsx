// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Rooms: React.FC<SvgProps> = (props) => (
  <Svg {...props} title="Rooms">
    <path d="M15.962 6.99C17.637 6.99 19 8.353 19 10.028v3.623c0 1.675-1.363 3.038-3.038 3.038h-2.1c-1.356 0-3.433.663-4.537 1.448l-.994.706c-.146.103-.316.156-.487.156-.133 0-.266-.03-.389-.095-.28-.145-.455-.432-.455-.748v-8.128C7 8.353 8.363 6.99 10.038 6.99h5.924zm0 1h-5.924C8.914 7.99 8 8.904 8 10.028v7.824l.746-.529c1.266-.9 3.561-1.634 5.115-1.634h2.101c1.124 0 2.038-.914 2.038-2.038v-3.623c0-1.124-.914-2.038-2.038-2.038zM13.243 5c.277 0 .5.224.5.5s-.223.5-.5.5H8.497C7.12 6 6 7.12 6 8.497v6.627c0 .276-.224.5-.5.5s-.5-.224-.5-.5V8.497C5 6.568 6.568 5 8.497 5h4.746z" />
  </Svg>
);

Rooms.displayName = 'Rooms';

export default Rooms;
