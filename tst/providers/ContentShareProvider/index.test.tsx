// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { renderHook, act } from '@testing-library/react';
import {
  ContentShareProvider,
  useContentShareControls,
} from '../../../src/providers/ContentShareProvider';

// Mock audioVideo object
const mockAudioVideo = {
    startContentShareFromScreenCapture: jest.fn(),
    startContentShare: jest.fn(),
    stopContentShare: jest.fn(),
    addObserver: jest.fn(),
    removeObserver: jest.fn(),
    addContentShareObserver: jest.fn(),
    removeContentShareObserver: jest.fn()
 };
 // Mock the module containing useAudioVideo hook
jest.mock('../../../src/providers/AudioVideoProvider', () => ({
    useAudioVideo: () => mockAudioVideo
}));

describe('toggleContentShare', () => {
  it('Should call startContentShareFromScreenCapture', async () => {
    const { result } = renderHook(() => useContentShareControls(), {
      wrapper: ({ children }) => (
        <ContentShareProvider>{children}</ContentShareProvider>
      ),
    });
    await act(async () => {
      await result.current.toggleContentShare();
    });
    expect(mockAudioVideo.startContentShareFromScreenCapture).toHaveBeenCalledTimes(1);
  });

  it('Can catch error from startContentShareFromScreenCapture', async () => {
    mockAudioVideo.startContentShareFromScreenCapture = jest.fn(() => Promise.reject(new Error('startContentShare error')));
    const { result } = renderHook(() => useContentShareControls(), {
      wrapper: ({ children }) => (
        <ContentShareProvider>{children}</ContentShareProvider>
      ),
    });
    await expect(async () => { 
      await act(async () => {
        await result.current.toggleContentShare();
    });
    }).rejects.toThrow('startContentShare error');
    // expect(() => {
    //     result.current.toggleContentShare();
    //   }).toThrow('startContentShare error');
  });
});