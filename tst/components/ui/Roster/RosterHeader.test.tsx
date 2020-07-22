// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

import RosterHeader from '../../../../src/components/ui/Roster/RosterHeader';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

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

  it('should render a close button when onClose is passed', () => {
    const component = <RosterHeader title="Present" onClose={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    expect(getByLabelText('Close')).toBeInTheDocument();
  });

  it('should render a search button when onClose is passed', () => {
    const component = <RosterHeader title="Present" onSearch={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    expect(getByLabelText('Open search')).toBeInTheDocument();
  });

  it('should render a search button when search is pressed', () => {
    const component = <RosterHeader title="Present" onSearch={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    fireEvent(
      getByLabelText('Open search'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getByLabelText('Search')).toBeInTheDocument();
  });
});
