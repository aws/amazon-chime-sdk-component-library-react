// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Document: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M16.042 18H7.959C7.43 18 7 17.57 7 17.042V6.959C7 6.431 7.43 6 7.959 6h5.461v2.131c0 .899.732 1.632 1.632 1.632H17v7.279c0 .528-.43.958-.958.958zm.63-9.293c.014.017.019.038.033.056h-1.653c-.348 0-.632-.284-.632-.632V6.2c.125.074.243.163.34.277l1.912 2.23zm.759-.65L15.52 5.826C15.069 5.301 14.416 5 13.725 5H7.959C6.878 5 6 5.879 6 6.959v10.083C6 18.122 6.878 19 7.959 19h8.083c1.08 0 1.958-.878 1.958-1.958V9.595c0-.564-.202-1.11-.569-1.538z" />
  </Svg>
);

Document.displayName = 'Document';

export default Document;
