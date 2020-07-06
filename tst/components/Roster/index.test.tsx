// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import RosterCell from '../../../src/components/Roster/RosterCell';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('RosterCell', () => {
  it('should render a name', () => {
    const component = <RosterCell name="James" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    expect(getByText('James')).toBeInTheDocument();
  });

  it('should render a subtitle', () => {
    const component = <RosterCell name="James" subtitle="Moderator" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    expect(getByText('Moderator')).toBeInTheDocument();
  });

  it('should show microphone if not muted', () => {
    const component = <RosterCell name="James" muted={false} />;
    const { getByTitle } = renderWithTheme(lightTheme, component);
    expect(getByTitle('Microphone')).toBeInTheDocument();
  });

  it('should show disabled microphone if muted', () => {
    const component = <RosterCell name="James" muted />;
    const { getByTitle } = renderWithTheme(lightTheme, component);
    expect(getByTitle('Disabled microphone')).toBeInTheDocument();
  });

  it('should show screen share icon if user is content sharing and video sharing', () => {
    const component = <RosterCell name="James" videoEnabled sharingContent />;
    const { getByTitle } = renderWithTheme(lightTheme, component);
    expect(getByTitle('Screen share')).toBeInTheDocument();
  });

  it('should show tardy message in place of icons', () => {
    const component = (
      <RosterCell name="James" videoEnabled runningLate="2 minutes" />
    );
    const { getByText, queryByTitle } = renderWithTheme(lightTheme, component);
    expect(getByText('2 minutes')).toBeInTheDocument();
    expect(queryByTitle('Microphone')).toBeNull();
  });
});
