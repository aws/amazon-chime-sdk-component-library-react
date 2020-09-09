// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { TableHeadProps } from './TableHead';
import { TableCellProps } from './TableCell';

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-collapse: collapse;
`;

export const StyledTableHead = styled.th<TableHeadProps>`
  padding: 0.75rem;
  text-align: ${props => props.align};
  border-top: 1px solid ${props => props.theme.modal.border};
  border-bottom: 1px solid ${props => props.theme.modal.border};
  font-weight: bold;
  vertical-align: middle;
`;

export const StyledTableCell = styled.td<TableCellProps>`
  padding: 0.75rem;
  text-align: ${props => props.align};
  border-bottom: 1px solid ${props => props.theme.modal.border};
  vertical-align: middle;
`;
