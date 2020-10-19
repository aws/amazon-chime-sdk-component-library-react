// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import memoize from 'fast-memoize';

export interface DateOptions {
  weekday?: string;
  year?: string;
  month?: string;
  day?: string;
}

const formatDateUnmemoized = (dateStr: string, locale?: string, dateOptions?: DateOptions, todayText?: string, yesterdayText?: string) => {
  const options = dateOptions ? dateOptions : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr).toLocaleDateString(locale, options)
  const today = new Date().toLocaleDateString(locale, options);
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString(locale, options)
  if (date === yesterday) {
    return yesterdayText || 'Yesterday'
  } else if (date === today) {
    return todayText || 'Today'
  }
  return (
    date
  )
};

export const formatDate = memoize(formatDateUnmemoized)
