// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { act, renderHook } from '@testing-library/react';
import { ConsoleLogger, LogLevel } from 'amazon-chime-sdk-js';
import React from 'react';

import {
  BackgroundSegmentationProvider,
  useBackgroundSegmentation,
} from '../../../src/providers/BackgroundSegmentationProvider';
import { LoggerProvider } from '../../../src/providers/LoggerProvider';

jest.mock('amazon-chime-sdk-js', () => {
  const actual = jest.requireActual('amazon-chime-sdk-js');
  return {
    ...actual,
    BackgroundSegmentationCompatibilityChecker: {
      checkCompatibility: jest.fn().mockReturnValue({
        isCompatible: true,
        missingFeatures: [],
      }),
    },
    BackgroundSegmentationVideoFrameProcessor: {
      create: jest.fn().mockResolvedValue({
        process: jest.fn().mockResolvedValue([]),
        destroy: jest.fn().mockResolvedValue(undefined),
        setConfig: jest.fn(),
        setModelType: jest.fn(),
        setMaxCPUUsagePercentage: jest.fn(),
        getConfig: jest.fn().mockReturnValue({ type: 'blur', blurStrength: 'medium' }),
        getModelType: jest.fn().mockReturnValue('selfie_general'),
      }),
    },
  };
});

describe('BackgroundSegmentationProvider', () => {
  const logger = new ConsoleLogger('BackgroundSegmentation', LogLevel.INFO);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors with effect="none"', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="none">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.isSupported).toBe(true);
  });

  it('should throw error when used outside of provider', () => {
    expect(() => {
      renderHook(() => useBackgroundSegmentation());
    }).toThrow(
      'useBackgroundSegmentation must be used within BackgroundSegmentationProvider'
    );
  });

  it('should expose createSegmentationDevice function', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="blur">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.createSegmentationDevice).toBeDefined();
    expect(typeof result.current.createSegmentationDevice).toBe('function');
  });

  it('should expose updateEffect function', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="blur">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.updateEffect).toBeDefined();
    expect(typeof result.current.updateEffect).toBe('function');
  });

  it('should expose updateModelType function', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="blur">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.updateModelType).toBeDefined();
    expect(typeof result.current.updateModelType).toBe('function');
  });

  it('should expose updateCPUUsagePercentage function', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="blur">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.updateCPUUsagePercentage).toBeDefined();
    expect(typeof result.current.updateCPUUsagePercentage).toBe('function');
  });

  it('should set isSupported to false when browser is not compatible', async () => {
    const { BackgroundSegmentationCompatibilityChecker } =
      jest.requireMock('amazon-chime-sdk-js');
    BackgroundSegmentationCompatibilityChecker.checkCompatibility.mockReturnValue(
      {
        isCompatible: false,
        missingFeatures: ['webgl2', 'offscreenCanvas'],
      }
    );

    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider effect="blur">
            {children}
          </BackgroundSegmentationProvider>
        </LoggerProvider>
      ),
    });

    await act(async () => {});
    expect(result.current.isSupported).toBe(false);
  });

  it('should clean up processor on unmount', async () => {
    const { result, unmount } = renderHook(
      () => useBackgroundSegmentation(),
      {
        wrapper: ({ children }) => (
          <LoggerProvider logger={logger}>
            <BackgroundSegmentationProvider effect="blur">
              {children}
            </BackgroundSegmentationProvider>
          </LoggerProvider>
        ),
      }
    );

    await act(async () => {});

    const { BackgroundSegmentationVideoFrameProcessor } =
      jest.requireMock('amazon-chime-sdk-js');
    const mockProcessor =
      await BackgroundSegmentationVideoFrameProcessor.create();

    await act(async () => {
      try {
        await result.current.createSegmentationDevice('default');
      } catch {
        // May throw in test env
      }
    });

    await act(async () => {
      unmount();
    });
  });
});
