// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import ChannelList from '../../../../../src/components/ui/Chat/ChannelList';
import ChannelItem from '../../../../../src/components/ui/Chat/ChannelList/ChannelItem';
import { PopOverItem } from '../../../../../src/components/ui/PopOver/PopOverItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChannelItem', () => {
  it('renders a ChannelItem', () => {
    const component = <ChannelItem name="Channel 1" onClick={() => null} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const el = getByText('Channel 1');
    expect(el).toBeInTheDocument();
  });

  it('renders a detailed ChannelItem if both lastChannelMessage and lastChannelMessageTimeStamp are set ', () => {
      const component =
          <ChannelItem
              name="Channel 1"
              lastChannelMessage =  'Alice: Hello!'
              lastChannelMessageTimestamp = "5:01 pm"
              onClick={() => null} />;
      const { getByText } = renderWithTheme(lightTheme, component);
      const el = getByText('Alice: Hello!');
      expect(el).toBeInTheDocument();
      const el2 = getByText('5:01 pm');
      expect(el2).toBeInTheDocument();
  });

  it('renders a detailed ChannelItem when only lastChannelMessageTimeStamp is set ', () => {
    const component =
        <ChannelItem
            name="Channel 1"
            lastChannelMessageTimestamp = "5:01 pm"
            onClick={() => null} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const el2 = getByText('5:01 pm');
    expect(el2).toBeInTheDocument();
  });

  it('renders a detailed ChannelItem when only lastChannelMessage is set ', () => {
    const component =
        <ChannelItem
            name="Channel 1"
            lastChannelMessage =  'Alice: Hello!'
            onClick={() => null} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const el = getByText('Alice: Hello!');
    expect(el).toBeInTheDocument();
  });

  it('should render a channel actions button if more options are provided and the channel is active is the list', () => {
    const component = (
      <ChannelList>
        <ChannelItem
          name="Channel 1"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => null}
          isSelected
        />
      </ChannelList>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('channel-actions');
    expect(el).toBeInTheDocument();
  });

  it('should not render a channel actions button if more options are not provided', () => {
    const component = (
      <ChannelList>
        <ChannelItem name="Channel 1" onClick={() => null} />
      </ChannelList>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const el = queryByTestId('channel-actions');
    expect(el).not.toBeInTheDocument();
  });

  it('should not render a more options button if the channel is not active', () => {
    const component = (
      <ChannelList>
        <ChannelItem
          name="Channel 1"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => null}
        />
      </ChannelList>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const el = queryByTestId('channel-actions');
    expect(el).not.toBeInTheDocument();
  });

  it('should render a badge if unread messages are present', () => {
    const component = (
      <ChannelList>
        <ChannelItem
          unread
          unreadBadgeLabel="New"
          name="Channel 1"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => null}
        />
      </ChannelList>
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const badge = getByText('New');
    expect(badge).toBeInTheDocument();
  });
});
