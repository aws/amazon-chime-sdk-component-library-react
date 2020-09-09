// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import { StyledTableCell } from './Styled';

export interface TableCellProps {
  textAlign?: "left" | "center" | "right" | "justify" | "char";
}

export const TableCell: FC<TableCellProps> = ({ textAlign, children, ...rest }) => {
  return (
    <StyledTableCell
      align={textAlign}
      {...rest}
    >
      {children}
    </StyledTableCell>
  );
}

export default TableCell;
