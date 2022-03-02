// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import DetailedChannelList from '../../../../../src/components/ui/Chat/DetailedChannelList';
import DetailedChannelItem from '../../../../../src/components/ui/Chat/DetailedChannelList/DetailedChannelItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('DetailedChannelList', () => {
  const defaultComponent = (
    <DetailedChannelList>
      <DetailedChannelItem name="Channel 1" id="abc" channelMessage="Hello" channelMessageTime="5:01pm" onClick={() => null} />
    </DetailedChannelList>
  );

  it('renders a DetailedChannelList', () => {
    const component = defaultComponent;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('detailed-channel-list');
    expect(el).toBeInTheDocument();
  });

  it('should render a DetailedChannelItem child component', () => {
    const component = defaultComponent;
    const { getByText } = renderWithTheme(lightTheme, component);
    const el = getByText('Channel 1');
    expect(el).toBeInTheDocument();
  });
});
