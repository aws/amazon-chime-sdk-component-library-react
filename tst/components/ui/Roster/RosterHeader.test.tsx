// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React, { ChangeEvent } from 'react';

import IconBUtton from '../../../../src/components/ui/Button/IconButton';
import Presenter from '../../../../src/components/ui/icons/Presenter';
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

  it('should render a search button when onSearch is passed', () => {
    const component = <RosterHeader title="Present" onSearch={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    expect(getByLabelText('Open search')).toBeInTheDocument();
  });

  it('should call onSearch with "" when the search is closed', () => {
    const mockOnSearch = jest.fn();
    const component = <RosterHeader title="Present" onSearch={mockOnSearch} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    fireEvent(
      getByLabelText('Open search'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(getByLabelText('Search')).toBeInTheDocument();
    fireEvent(
      getByLabelText('clear Search'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(mockOnSearch).toBeCalled();
  });

  it('should render a search button when search is pressed', () => {
    const component = <RosterHeader title="Present" onSearch={() => {}} />;
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    fireEvent(
      getByLabelText('Open search'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(getByLabelText('Search')).toBeInTheDocument();
  });
  it('should render children if they are available', () => {
    const component = (
      <RosterHeader title="Present" onSearch={() => {}}>
        <IconBUtton label="presenter" icon={<Presenter />} />
      </RosterHeader>
    );
    const { getByLabelText } = renderWithTheme(lightTheme, component);

    expect(getByLabelText('presenter')).toBeInTheDocument();
  });
});
