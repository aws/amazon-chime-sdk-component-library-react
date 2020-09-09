// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { StyledTableHead } from './Styled';

export interface TableHeadProps {
  textAlign?: Align;
}

export type Align = 'left' | 'center' | 'right' | 'justify' | 'char';

const TableHead: FC<TableHeadProps> = ({ textAlign = 'center', children }) => {
  return (
    <StyledTableHead
      align={textAlign}
    >
      {children}
    </StyledTableHead>
  );
}

export default TableHead;
