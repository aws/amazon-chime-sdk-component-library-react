// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import memoize from 'fast-memoize';

export interface DateOptions {
  weekday?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
  day?: 'numeric' | '2-digit';
}

const DEFAULT_DATE_OPTIONS: DateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatDateUnmemoized = (
  dateStr: string,
  locale?: string,
  dateOptions?: DateOptions,
  todayText?: string,
  yesterdayText?: string
) => {
  const options = dateOptions || DEFAULT_DATE_OPTIONS;
  const dateString = new Date(dateStr).toLocaleDateString(locale, options);

  // Get yesterday by subtracting 1 from the date, not by subtracting the number
  // of milliseconds in a typical day -- not all days are exactly 86400000ms.
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayString = yesterday.toLocaleDateString(locale, options);

  if (dateString === yesterdayString) {
    return yesterdayText || 'Yesterday';
  }
  if (dateString === new Date().toLocaleDateString(locale, options)) {
    return todayText || 'Today';
  }
  return dateString;
};

export const formatDate = memoize(formatDateUnmemoized);
