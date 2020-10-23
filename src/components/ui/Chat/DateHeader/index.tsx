// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../../Base';
import { formatDate, DateOptions } from '../../Utilities';
import Badge from '../../Badge';

export interface DateHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  date: string;
  key: string;
  locale?: string;
  dateOptions?: DateOptions;
}

export const DateHeader: FC<DateHeaderProps> = (props) => (
  <Badge
    data-testid="date-header"
    value={formatDate(props.date, props.locale, props.dateOptions)}
  />
);

export default DateHeader;
