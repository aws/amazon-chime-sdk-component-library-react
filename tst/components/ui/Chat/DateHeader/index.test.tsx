// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import DateHeader, { DateHeaderProps } from '../../../../../src/components/ui/Chat/DateHeader';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';
describe('DateHeader', () => {

  const defaultProps: DateHeaderProps = {
    date: new Date().toString(),
    key: '1'
  }

  it('should render a DateHaader component in the document', () => {
    const component = <DateHeader {...defaultProps} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('date-header');

    expect(el).toBeInTheDocument();
  });
});
