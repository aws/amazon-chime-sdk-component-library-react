// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

interface Props {
  col1Label?: string;
  col1child?: React.ReactElement<any>;
  col2Label?: string;
  col2child?: React.ReactElement<any>;
}

const RowItem: React.FC<Props> = ({ col1Label, col1child, col2Label, col2child }) => {
  const item = (
    <div style={{display: "flex"}}>
      <div style={{flex: "50%"}}>
        <p>{col1Label}</p>
        {col1child}
      </div>
      <div style={{flex: "50%", paddingLeft: "3rem"}}>
        <p>{col2Label}</p>
        {col2child}
      </div>
    </div>
  );
  return item;
}

export default RowItem;
