// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import RosterHeader from '../../../src/components/Roster/RosterHeader';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('RosterCell', () => {
  it('should render a title', () => {
    const component = <RosterHeader title="Present" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    expect(getByText('Present')).toBeInTheDocument();
  });

  it('should render a badge', () => {
    const component = <RosterHeader title="Present" badge={5} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    expect(getByText('5')).toBeInTheDocument();
  });
});
