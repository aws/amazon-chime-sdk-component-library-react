// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { StyledTable, StyledTableWrapper } from './Styled';

const Table: FC<{}> = ({ children }) => {
  return (
    <StyledTableWrapper>
      <StyledTable>{children}</StyledTable>
    </StyledTableWrapper>
  );
};

export { Table, TableCell, TableHead, TableRow }
