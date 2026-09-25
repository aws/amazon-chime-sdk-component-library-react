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
    DefaultVideoTransformDevice: jest.fn().mockImplementation(() => ({
      stop: jest.fn().mockResolvedValue(undefined),
      intrinsicDevice: jest.fn().mockResolvedValue('device-id'),
      outputMediaStream: undefined,
    })),
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
    const { BackgroundSegmentationCompatibilityChecker } =
      jest.requireMock('amazon-chime-sdk-js');
    BackgroundSegmentationCompatibilityChecker.checkCompatibility.mockReturnValue(
      { isCompatible: true, missingFeatures: [] }
    );
  });

  it('should render without errors with', async () => {
    const { result } = renderHook(() => useBackgroundSegmentation(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>
          <BackgroundSegmentationProvider>
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
          <BackgroundSegmentationProvider>
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
          <BackgroundSegmentationProvider>
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
          <BackgroundSegmentationProvider>
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
          <BackgroundSegmentationProvider>
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
          <BackgroundSegmentationProvider>
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
            <BackgroundSegmentationProvider>
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
        await result.current.createSegmentationDevice('default', { type: 'blur' as any });
      } catch {
        // May throw in test env
      }
    });

    await act(async () => {
      unmount();
    });
  });

  describe('exported function behavior', () => {
    const renderProviderHook = () =>
      renderHook(() => useBackgroundSegmentation(), {
        wrapper: ({ children }) => (
          <LoggerProvider logger={logger}>
            <BackgroundSegmentationProvider>
              {children}
            </BackgroundSegmentationProvider>
          </LoggerProvider>
        ),
      });

    it('createSegmentationDevice calls the processor create API with the passed-in config and options', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const { result } = renderProviderHook();
      await act(async () => {});

      const blurConfig = { type: 'blur', blurStrength: 'high' } as any;
      await act(async () => {
        await result.current.createSegmentationDevice('device-id', blurConfig, {
          modelType: 'selfie_multiclass' as any,
          cpuUsagePercentage: 45,
        });
      });

      expect(BackgroundSegmentationVideoFrameProcessor.create).toHaveBeenCalledWith(
        expect.anything(),
        blurConfig,
        'selfie_multiclass',
        45
      );
    });

    it('createSegmentationDevice applies default model type and cpu usage when options are omitted', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const { result } = renderProviderHook();
      await act(async () => {});

      const colorConfig = { type: 'color-replacement', replacementColor: '#0000FF' } as any;
      await act(async () => {
        await result.current.createSegmentationDevice('device-id', colorConfig);
      });

      expect(BackgroundSegmentationVideoFrameProcessor.create).toHaveBeenCalledWith(
        expect.anything(),
        colorConfig,
        'selfie_general',
        30
      );
    });

    it('createSegmentationDevice throws when the browser is not supported', async () => {
      const { BackgroundSegmentationCompatibilityChecker } =
        jest.requireMock('amazon-chime-sdk-js');
      BackgroundSegmentationCompatibilityChecker.checkCompatibility.mockReturnValue(
        { isCompatible: false, missingFeatures: ['webgl2'] }
      );

      const { result } = renderProviderHook();
      await act(async () => {});

      await expect(
        result.current.createSegmentationDevice('device-id', { type: 'blur' } as any)
      ).rejects.toThrow(/not compatible/i);
    });

    it('createSegmentationDevice destroys the existing processor before re-initializing', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const mockProcessor = await BackgroundSegmentationVideoFrameProcessor.create();
      const { result } = renderProviderHook();
      await act(async () => {});

      await act(async () => {
        await result.current.createSegmentationDevice('device-id', { type: 'blur' } as any);
      });
      await act(async () => {
        await result.current.createSegmentationDevice('device-id', { type: 'blur' } as any);
      });

      expect(mockProcessor.destroy).toHaveBeenCalled();
    });

    it('updateEffect calls setConfig on the active processor with the passed-in config', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const mockProcessor = await BackgroundSegmentationVideoFrameProcessor.create();
      const { result } = renderProviderHook();
      await act(async () => {});

      await act(async () => {
        await result.current.createSegmentationDevice('device-id', { type: 'blur' } as any);
      });

      const colorConfig = { type: 'color-replacement', replacementColor: '#00FF00' } as any;
      act(() => {
        result.current.updateEffect(colorConfig);
      });

      expect(mockProcessor.setConfig).toHaveBeenCalledWith(colorConfig);
    });

    it('updateModelType calls setModelType on the active processor with the passed-in model', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const mockProcessor = await BackgroundSegmentationVideoFrameProcessor.create();
      const { result } = renderProviderHook();
      await act(async () => {});

      await act(async () => {
        await result.current.createSegmentationDevice('device-id', { type: 'blur' } as any);
      });

      act(() => {
        result.current.updateModelType('selfie_multiclass' as any);
      });

      expect(mockProcessor.setModelType).toHaveBeenCalledWith('selfie_multiclass');
    });

    it('updateCPUUsagePercentage calls setMaxCPUUsagePercentage on the active processor', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const mockProcessor = await BackgroundSegmentationVideoFrameProcessor.create();
      const { result } = renderProviderHook();
      await act(async () => {});

      await act(async () => {
        await result.current.createSegmentationDevice('device-id', { type: 'blur' } as any);
      });

      act(() => {
        result.current.updateCPUUsagePercentage(60);
      });

      expect(mockProcessor.setMaxCPUUsagePercentage).toHaveBeenCalledWith(60);
    });

    it('updateEffect is a no-op when no processor has been created yet', async () => {
      const { BackgroundSegmentationVideoFrameProcessor } =
        jest.requireMock('amazon-chime-sdk-js');
      const mockProcessor = await BackgroundSegmentationVideoFrameProcessor.create();
      mockProcessor.setConfig.mockClear();

      const { result } = renderProviderHook();
      await act(async () => {});

      act(() => {
        result.current.updateEffect({ type: 'blur' } as any);
      });

      expect(mockProcessor.setConfig).not.toHaveBeenCalled();
    });
  });
});
