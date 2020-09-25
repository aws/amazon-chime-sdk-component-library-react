// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ChannelList from '../../../../../src/components/ui/Chat/ChannelList';
import ChannelItem from '../../../../../src/components/ui/Chat/ChannelList/ChannelItem';
import lightTheme from '../../../../../src/theme/light'
import { renderWithTheme } from '../../../../test-helpers';

describe('ChannelItem', () => {

  it('renders a ChannelItem', () => {
    const component = <ChannelItem name='Channel 1' arn='abc' />;
    const { getByText } = renderWithTheme(lightTheme, component)
    const el = getByText('Channel 1');
    expect(el).toBeInTheDocument();
  });

  it('should render a more options button if more options are provided and the channel is active is the list', () => {
    const component = (
      <ChannelList activeChannelArn='abc' setActiveChannelArn={() => null}>
        <ChannelItem name='Channel 1' arn='abc' moreOptions={[{ children: <span>Option 1</span>, onClick: () => null }]} />
      </ChannelList>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const el = getByTestId('more-channel-options');
    expect(el).toBeInTheDocument();
  });

  it('should not render a more options button if more options are not provided', () => {
    const component = (
        <ChannelList activeChannelArn='abc' setActiveChannelArn={() => null}>
          <ChannelItem name='Channel 1' arn='abc' />
        </ChannelList>
      );    const { queryByTestId } = renderWithTheme(lightTheme, component)
    const el = queryByTestId('more-channel-options');
    expect(el).not.toBeInTheDocument();
  });

  it('should not render a more options button if the channel is not active', () => {
    const component = (
        <ChannelList activeChannelArn='cde' setActiveChannelArn={() => null}>
          <ChannelItem name='Channel 1' arn='abc' moreOptions={[{ children: <span>Option 1</span>, onClick: () => null }]} />
        </ChannelList>
      );    const { queryByTestId } = renderWithTheme(lightTheme, component)
    const el = queryByTestId('more-channel-options');
    expect(el).not.toBeInTheDocument();
  });
});