// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ChannelList from '../../../../../src/components/ui/Chat/ChannelList';
import ChannelItem from '../../../../../src/components/ui/Chat/ChannelList/ChannelItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChannelList', () => {
  const defaultComponent = (
    <ChannelList>
      <ChannelItem name="Channel 1" id="abc" onClick={() => null} />
    </ChannelList>
  );

  it('renders a ChannelList', () => {
    const component = defaultComponent;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('channel-list');
    expect(el).toBeInTheDocument();
  });

  it('should render a ChannelItem child component', () => {
    const component = defaultComponent;
    const { getByText } = renderWithTheme(lightTheme, component);
    const el = getByText('Channel 1');
    expect(el).toBeInTheDocument();
  });
});
