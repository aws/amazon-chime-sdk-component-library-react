// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {LogLevel} from "amazon-chime-sdk-js";
import React from 'react';
import {renderHook} from '@testing-library/react-hooks'
import useActiveSpeakersState from '../../../src/hooks/sdk/useActiveSpeakersState';
import MeetingManager from '../../../src/providers/MeetingProvider/MeetingManager';
import {MeetingContext} from '../../../src/providers/MeetingProvider';

jest.mock('../../../src/providers/MeetingProvider/MeetingManager');

describe('Icon Button', () => {
  const mockMeetingManager = MeetingManager as jest.Mock;
  const subscribeToActiveSpeakerSpy = jest.fn();
  const unsubscribeToActiveSpeakerSpy = jest.fn();
  mockMeetingManager.mockImplementation(() => {
    return {
      subscribeToActiveSpeaker: subscribeToActiveSpeakerSpy,
      unsubscribeFromActiveSpeaker: unsubscribeToActiveSpeakerSpy
    };
  });

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockMeetingManager.mockClear();
  });

  it('should use active speaker', () => {
    expect(mockMeetingManager).toHaveBeenCalledTimes(0);
    const { result, unmount } = renderHook(() => useActiveSpeakersState(), {
      wrapper: ({ children }) => <MeetingContext.Provider value={new MeetingManager({ logLevel: LogLevel.OFF})}>{children}</MeetingContext.Provider>
    })
    expect(mockMeetingManager).toHaveBeenCalledTimes(1);
    expect(subscribeToActiveSpeakerSpy).toHaveBeenCalledTimes(1);
    expect(result.current).toStrictEqual([]);
    unmount();
    expect(unsubscribeToActiveSpeakerSpy).toHaveBeenCalledTimes(1);
  })
});


