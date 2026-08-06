// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundSegmentationBlurStrength,
  BackgroundSegmentationCompatibilityChecker,
  BackgroundSegmentationVideoFrameProcessor,
  BackgroundSegmentationVideoFrameProcessorConfig,
  DefaultVideoTransformDevice,
  Device,
  ModelType,
  ProcessorEffect,
  VideoFrameProcessor,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseSdkProps } from '../../components/sdk/Base';
import { useLogger } from '../LoggerProvider';

type BackgroundSegmentationEffectProps =
  | {
      effect: 'blur';
      blurStrength?: BackgroundSegmentationBlurStrength;
      replacementColor?: never;
      replacementImageURL?: never;
    }
  | {
      effect: 'color-replacement';
      blurStrength?: never;
      replacementColor: string;
      replacementImageURL?: never;
    }
  | {
      effect: 'image-replacement';
      blurStrength?: never;
      replacementColor?: never;
      replacementImageURL: string;
    }
  | {
      effect: 'none';
      blurStrength?: never;
      replacementColor?: never;
      replacementImageURL?: never;
    };

export type BackgroundSegmentationProviderProps = BaseSdkProps &
  BackgroundSegmentationEffectProps & {
    /** Segmentation model type. Default: SELFIE_GENERAL */
    modelType?: ModelType;
    /** CPU usage budget percentage (10-80). Default: 30 */
    cpuUsagePercentage?: number;
  };

export interface BackgroundSegmentationState {
  /** Whether the V3 segmentation processor is supported in the current browser. */
  isSupported: boolean | undefined;
  /** Create a video transform device with the current segmentation effect applied. */
  createSegmentationDevice: (
    device: Device
  ) => Promise<VideoTransformDevice>;
  /** Switch the active effect at runtime (blur, color-replacement, image-replacement, or none). */
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
  effect = 'none',
  blurStrength,
  replacementColor,
  replacementImageURL,
  modelType = ModelType.SELFIE_GENERAL,
  cpuUsagePercentage = 30,
  children,
}) => {
  const logger = useLogger();
  const [isSupported, setIsSupported] = useState<boolean | undefined>(
    undefined
  );
  const processorRef = useRef<VideoFrameProcessor | undefined>(undefined);
  const modelTypeRef = useRef<ModelType>(modelType);
  const cpuUsageRef = useRef<number>(cpuUsagePercentage);

  // Keep refs in sync with props
  modelTypeRef.current = modelType;
  cpuUsageRef.current = cpuUsagePercentage;

  const buildConfigFromProps =
    useCallback((): BackgroundSegmentationVideoFrameProcessorConfig | null => {
      switch (effect) {
        case 'blur':
          return {
            type: ProcessorEffect.BLUR,
            blurStrength: blurStrength ?? BackgroundSegmentationBlurStrength.MEDIUM,
          };
        case 'color-replacement':
          return {
            type: ProcessorEffect.COLOR_REPLACEMENT,
            replacementColor: replacementColor!,
          };
        case 'image-replacement':
          return {
            type: ProcessorEffect.IMAGE_REPLACEMENT,
            replacementImageURL: replacementImageURL!,
          };
        case 'none':
        default:
          return null;
      }
    }, [effect, blurStrength, replacementColor, replacementImageURL]);

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
    config: BackgroundSegmentationVideoFrameProcessorConfig
  ): Promise<BackgroundSegmentationVideoFrameProcessor | undefined> {
    logger.info(
      `BackgroundSegmentationProvider: Initializing processor with effect=${config.type}, model=${modelTypeRef.current}`
    );

    try {
      const processor = await BackgroundSegmentationVideoFrameProcessor.create(
        logger,
        config,
        modelTypeRef.current,
        cpuUsageRef.current
      );
      processorRef.current = processor;
      setIsSupported(true);
      logger.info(
        'BackgroundSegmentationProvider: Processor initialized successfully.'
      );
      return processor;
    } catch (error) {
      logger.error(
        `BackgroundSegmentationProvider: Failed to create processor: ${error}`
      );
      processorRef.current = undefined;
      setIsSupported(false);
      return undefined;
    }
  }

  const createSegmentationDevice = async (
    selectedDevice: Device
  ): Promise<VideoTransformDevice> => {
    logger.info(
      `BackgroundSegmentationProvider: Creating segmentation device for: ${JSON.stringify(selectedDevice)}`
    );

    // Determine the config to use
    let config = buildConfigFromProps();

    // If effect is 'none' at the provider level, default to blur when consumer
    // explicitly calls createSegmentationDevice (they want an active effect)
    if (!config) {
      config = {
        type: ProcessorEffect.BLUR,
        blurStrength: BackgroundSegmentationBlurStrength.MEDIUM,
      };
    }

    // Always re-initialize the processor when creating a device.
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

    await initializeProcessor(config);
    const processor = processorRef.current;

    if (processor) {
      return new DefaultVideoTransformDevice(logger, selectedDevice, [
        processor,
      ]);
    }

    throw new Error(
      'BackgroundSegmentationProvider: Processor not available. Background segmentation is not supported.'
    );
  };

  const updateEffect = useCallback(
    (config: BackgroundSegmentationVideoFrameProcessorConfig): void => {
      if (!processorRef.current) {
        logger.warn(
          'BackgroundSegmentationProvider: Cannot updateEffect — processor not initialized. Call createSegmentationDevice first.'
        );
        return;
      }

      const processor =
        processorRef.current as BackgroundSegmentationVideoFrameProcessor;
      processor.setConfig(config);
      logger.info(
        `BackgroundSegmentationProvider: Effect updated to ${config.type}`
      );
    },
    []
  );

  const updateModelType = useCallback((newModelType: ModelType): void => {
    if (!processorRef.current) {
      logger.warn(
        'BackgroundSegmentationProvider: Cannot updateModelType — processor not initialized.'
      );
      return;
    }

    const processor =
      processorRef.current as BackgroundSegmentationVideoFrameProcessor;
    processor.setModelType(newModelType);
    modelTypeRef.current = newModelType;
    logger.info(
      `BackgroundSegmentationProvider: Model type update requested: ${newModelType} (async load in worker)`
    );
  }, []);

  const updateCPUUsagePercentage = useCallback(
    (percentage: number): void => {
      if (!processorRef.current) {
        logger.warn(
          'BackgroundSegmentationProvider: Cannot updateCPUUsagePercentage — processor not initialized.'
        );
        return;
      }

      const processor =
        processorRef.current as BackgroundSegmentationVideoFrameProcessor;
      processor.setMaxCPUUsagePercentage(percentage);
      cpuUsageRef.current = percentage;
      logger.info(
        `BackgroundSegmentationProvider: CPU usage percentage updated to ${percentage}`
      );
    },
    []
  );

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
