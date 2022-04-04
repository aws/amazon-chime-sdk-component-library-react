// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { renderHook } from '@testing-library/react-hooks';
import { ConsoleLogger } from 'amazon-chime-sdk-js';
import React from 'react';

import useActiveSpeakersState from '../../../src/hooks/sdk/useActiveSpeakersState';
import { MeetingContext } from '../../../src/providers/MeetingProvider';
import MeetingManager from '../../../src/providers/MeetingProvider/MeetingManager';

jest.mock('../../../src/providers/MeetingProvider/MeetingManager');

describe('useActiveSpeakersState', () => {
  const mockMeetingManager = MeetingManager as jest.Mock;
  const subscribeToActiveSpeakerSpy = jest.fn();
  const unsubscribeToActiveSpeakerSpy = jest.fn();
  mockMeetingManager.mockImplementation(() => {
    return {
      subscribeToActiveSpeaker: subscribeToActiveSpeakerSpy,
      unsubscribeFromActiveSpeaker: unsubscribeToActiveSpeakerSpy,
    };
  });

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockMeetingManager.mockClear();
  });

  it('should use active speaker', () => {
    expect(mockMeetingManager).toHaveBeenCalledTimes(0);
    const logger = new ConsoleLogger('SDK');
    const { result, unmount } = renderHook(() => useActiveSpeakersState(), {
      wrapper: ({ children }) => (
        <MeetingContext.Provider
          value={ new MeetingManager(logger) }
        >
          {children}
        </MeetingContext.Provider>
      ),
    });
    expect(mockMeetingManager).toHaveBeenCalledTimes(1);
    expect(subscribeToActiveSpeakerSpy).toHaveBeenCalledTimes(1);
    expect(result.current).toStrictEqual([]);
    unmount();
    expect(unsubscribeToActiveSpeakerSpy).toHaveBeenCalledTimes(1);
  });
});
