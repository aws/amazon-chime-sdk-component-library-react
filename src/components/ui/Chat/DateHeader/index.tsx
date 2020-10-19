// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { StyledDateHeader } from './Styled';
import { BaseProps } from '../../Base';
import { formatDate, DateOptions } from '../../Utilities';

export interface DateHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
  date: string;
  key: string;
  locale?: string;
  dateOptions?: DateOptions;
}

export const DateHeader: FC<DateHeaderProps> = (props) => (
  <StyledDateHeader data-testid='date-header'>{formatDate(props.date, props.locale, props.dateOptions)}</StyledDateHeader>
);

export default DateHeader;