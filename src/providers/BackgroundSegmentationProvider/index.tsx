// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundSegmentationCompatibilityChecker,
  BackgroundSegmentationVideoFrameProcessor,
  BackgroundSegmentationVideoFrameProcessorConfig,
  DefaultVideoTransformDevice,
  Device,
  ModelType,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseSdkProps } from '../../components/sdk/Base';
import { useLogger } from '../LoggerProvider';

export type BackgroundSegmentationProviderProps = BaseSdkProps;

export interface BackgroundSegmentationState {
  /** Whether the segmentation processor is supported in the current browser. */
  isSupported: boolean | undefined;
  /** Create a video transform device with the specified segmentation effect applied. */
  createSegmentationDevice: (
    device: Device,
    config: BackgroundSegmentationVideoFrameProcessorConfig,
    options?: { modelType?: ModelType; cpuUsagePercentage?: number }
  ) => Promise<VideoTransformDevice>;
  /** Switch the active effect at runtime (blur, color-replacement, image-replacement). */
  updateEffect: (config: BackgroundSegmentationVideoFrameProcessorConfig) => void;
  /** Change the segmentation model type at runtime. */
  updateModelType: (modelType: ModelType) => void;
  /** Change the CPU usage percentage budget at runtime (range: 10-80). */
  updateCPUUsagePercentage: (percentage: number) => void;
}

const BackgroundSegmentationContext = createContext<
  BackgroundSegmentationState | undefined
>(undefined);

export const BackgroundSegmentationProvider: FC<
  React.PropsWithChildren<BackgroundSegmentationProviderProps>
> = ({
  children,
}) => {
  const logger = useLogger();
  const [isSupported, setIsSupported] = useState<boolean | undefined>(
    undefined
  );
  const processorRef = useRef<BackgroundSegmentationVideoFrameProcessor | undefined>(undefined);

  useEffect(() => {
    const compatibility =
      BackgroundSegmentationCompatibilityChecker.checkCompatibility(logger);
    setIsSupported(compatibility.isCompatible);

    if (!compatibility.isCompatible) {
      logger.warn(
        `BackgroundSegmentationProvider: Browser not compatible. Missing features: [${compatibility.missingFeatures.join(', ')}]`
      );
    }
  }, []);

  useEffect(() => {
    return () => {
      if (processorRef.current) {
        logger.info(
          'BackgroundSegmentationProvider: Destroying processor on unmount.'
        );
        processorRef.current.destroy();
        processorRef.current = undefined;
      }
    };
  }, []);

  async function initializeProcessor(
    config: BackgroundSegmentationVideoFrameProcessorConfig,
    modelType: ModelType = ModelType.SELFIE_GENERAL,
    cpuUsagePercentage: number = 30
  ): Promise<BackgroundSegmentationVideoFrameProcessor> {
    // The previous processor may have been destroyed by DefaultVideoTransformDevice.stop()
    // when the user switched to "None" (stops the transform pipeline, destroying processors).
    if (processorRef.current) {
      try {
        await processorRef.current.destroy();
      } catch {
        // Processor might have been destroyed already.
      }
      processorRef.current = undefined;
    }

    logger.info(
      `BackgroundSegmentationProvider: Initializing processor with effect=${config.type}, model=${modelType}, cpu=${cpuUsagePercentage}%`
    );

    try {
      const processor = await BackgroundSegmentationVideoFrameProcessor.create(
        logger,
        config,
        modelType,
        cpuUsagePercentage
      );
      processorRef.current = processor;
      logger.info(
        'BackgroundSegmentationProvider: Processor initialized successfully.'
      );
      return processor;
    } catch (error) {
      logger.error(
        `BackgroundSegmentationProvider: Failed to create processor: ${error}`
      );
      processorRef.current = undefined;
      throw error;
    }
  }

  const createSegmentationDevice = async (
    selectedDevice: Device,
    config: BackgroundSegmentationVideoFrameProcessorConfig,
    options?: { modelType?: ModelType; cpuUsagePercentage?: number }
  ): Promise<VideoTransformDevice> => {
    if (isSupported === false) {
      throw new Error(
        'BackgroundSegmentationProvider: Browser not compatible. Check isSupported before calling createSegmentationDevice.'
      );
    }

    const resolvedModelType = options?.modelType ?? ModelType.SELFIE_GENERAL;
    const resolvedCpu = options?.cpuUsagePercentage ?? 30;
    // Always re-initialize the processor when creating a device.
    const processor = await initializeProcessor(config, resolvedModelType, resolvedCpu);
    return new DefaultVideoTransformDevice(logger, selectedDevice, [processor]);
  };

  const updateEffect = (config: BackgroundSegmentationVideoFrameProcessorConfig): void => {
    if (!processorRef.current) {
      logger.warn(
        'BackgroundSegmentationProvider: Cannot updateEffect — processor not initialized. Call createSegmentationDevice first.'
      );
      return;
    }

    const processor =
      processorRef.current;
    processor.setConfig(config);
    logger.info(
      `BackgroundSegmentationProvider: Effect updated to ${config.type}`
    );
  };

  const updateModelType = (newModelType: ModelType): void => {
    if (!processorRef.current) {
      logger.warn(
        'BackgroundSegmentationProvider: Cannot updateModelType — processor not initialized.'
      );
      return;
    }

    const processor =
      processorRef.current;
    processor.setModelType(newModelType);
    logger.info(
      `BackgroundSegmentationProvider: Model type update requested: ${newModelType} (async load in worker)`
    );
  };

  const updateCPUUsagePercentage = (percentage: number): void => {
    if (!processorRef.current) {
      logger.warn(
        'BackgroundSegmentationProvider: Cannot updateCPUUsagePercentage — processor not initialized.'
      );
      return;
    }

    const processor =
      processorRef.current;
    processor.setMaxCPUUsagePercentage(percentage);
    logger.info(
      `BackgroundSegmentationProvider: CPU usage percentage updated to ${percentage}`
    );
  };

  const value: BackgroundSegmentationState = {
    isSupported,
    createSegmentationDevice,
    updateEffect,
    updateModelType,
    updateCPUUsagePercentage,
  };

  return (
    <BackgroundSegmentationContext.Provider value={value}>
      {children}
    </BackgroundSegmentationContext.Provider>
  );
};

export const useBackgroundSegmentation = (): BackgroundSegmentationState => {
  const context = useContext(BackgroundSegmentationContext);

  if (!context) {
    throw new Error(
      'useBackgroundSegmentation must be used within BackgroundSegmentationProvider'
    );
  }

  return context;
};
