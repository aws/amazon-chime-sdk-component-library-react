// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundBlurOptions,
  BackgroundBlurProcessor,
  BackgroundBlurVideoFrameProcessor,
  BackgroundFilterSpec,
  ConsoleLogger,
  DefaultVideoTransformDevice,
  Device,
  LogLevel,
  NoOpVideoFrameProcessor,
} from 'amazon-chime-sdk-js';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

import { BaseSdkProps } from '../../components/sdk/Base';
import { isPrevNextEmpty, isPrevNextUndefined } from '../../utils/device-utils';
import useMemoCompare from '../../utils/use-memo-compare';
import { useLogger } from '../LoggerProvider';

interface Props extends BaseSdkProps {
  /** The spec defines the assets that will be used for adding background blur to a frame. For more information, refer to
   * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  spec?: BackgroundFilterSpec;
  /** A set of options that can be supplied when creating a background blur video frame processor. For more information, refer to
   * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  options?: BackgroundBlurOptions;
}

interface BackgroundBlurProviderState {
  createBackgroundBlurDevice: (
    device: Device
  ) => Promise<DefaultVideoTransformDevice>;
  isBackgroundBlurSupported: boolean | undefined;
  backgroundBlurProcessor: BackgroundBlurProcessor | undefined;
}

const BackgroundBlurProviderContext = createContext<
  BackgroundBlurProviderState | undefined
>(undefined);

export const BackgroundBlurProvider: FC<React.PropsWithChildren<Props>> = ({
  spec,
  options,
  children,
}) => {
  const logger = useLogger();
  const [isBackgroundBlurSupported, setIsBackgroundBlurSupported] = useState<
    boolean | undefined
  >(undefined);
  const [backgroundBlurProcessor, setBackgroundBlurProcessor] = useState<
    BackgroundBlurProcessor | undefined
  >();

  const blurSpec = useMemoCompare(
    spec,
    (
      prev: BackgroundFilterSpec | undefined,
      next: BackgroundFilterSpec | undefined
    ): boolean => {
      if (Object.is(prev, next)) {
        return true;
      }
      return false;
    }
  );

  const blurOptions = useMemoCompare(
    options,
    (
      prev: BackgroundBlurOptions | undefined,
      next: BackgroundBlurOptions | undefined
    ): boolean => {
      if (isPrevNextUndefined(prev, next) || isPrevNextEmpty(prev, next)) {
        return true;
      }
      if (
        prev?.filterCPUUtilization !== next?.filterCPUUtilization ||
        prev?.blurStrength !== next?.blurStrength ||
        prev?.logger !== next?.logger ||
        prev?.reportingPeriodMillis !== next?.reportingPeriodMillis
      ) {
        return false;
      }
      return true;
    }
  );

  useEffect(() => {
    // One reason we need to initialize first, even though we'll destroy this background blur processor when we create a new device
    // is because we need to check if background blur is supported by initializing the background blur processor to see if the browser supports
    initializeBackgroundBlur();
    return () => {
      logger.info(
        'Specs or options were changed. Destroying and re-initializing background blur processor.'
      );
      backgroundBlurProcessor?.destroy();
    };
  }, [blurOptions, blurSpec]);

  async function initializeBackgroundBlur(): Promise<
    BackgroundBlurProcessor | undefined
  > {
    logger.info(
      `Initializing background blur processor with, spec: ${JSON.stringify(
        spec
      )}, options: ${JSON.stringify(options)}`
    );

    try {
      const createdProcessor = await BackgroundBlurVideoFrameProcessor.create(
        { ...spec } as BackgroundFilterSpec,
        { ...options } as BackgroundBlurOptions
      );
      // BackgroundBlurVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
      // in the case that BackgroundBlurVideoFrameProcessor.isSupported() returns false.
      // BackgroundBlurVideoFrameProcessor.create() can also throw an error in case loading
      // the assets are not fetched successfully.
      if (createdProcessor instanceof NoOpVideoFrameProcessor) {
        logger.warn('Initialized NoOpVideoFrameProcessor');
        setBackgroundBlurProcessor(undefined);
        setIsBackgroundBlurSupported(false);
        return undefined;
      } else {
        logger.info(
          `Initialized background blur processor: ${JSON.stringify(
            createdProcessor
          )}`
        );
        setBackgroundBlurProcessor(createdProcessor);
        setIsBackgroundBlurSupported(true);
        return createdProcessor;
      }
    } catch (error) {
      logger.error(
        `Error creating a background blur video frame processor device ${error}`
      );
      setBackgroundBlurProcessor(undefined);
      setIsBackgroundBlurSupported(false);
      return undefined;
    }
  }

  const createBackgroundBlurDevice = async (
    selectedDevice: Device
  ): Promise<DefaultVideoTransformDevice> => {
    logger.info(
      `Calling createBackgroundBlurDevice with device: ${JSON.stringify(
        selectedDevice
      )}`
    );
    const currentProcessor = await initializeBackgroundBlur();
    try {
      const logger =
        options?.logger ||
        new ConsoleLogger('BackgroundBlurProvider', LogLevel.INFO);
      if (currentProcessor) {
        const chosenVideoTransformDevice = new DefaultVideoTransformDevice(
          logger,
          selectedDevice,
          [currentProcessor]
        );
        return chosenVideoTransformDevice;
      } else {
        throw new Error(
          'Processor has not been created. Background Blur is not supported.'
        );
      }
    } catch (error) {
      throw new Error(
        `Failed to create a DefaultVideoTransformDevice: ${error}`
      );
    }
  };

  const value: BackgroundBlurProviderState = {
    createBackgroundBlurDevice,
    isBackgroundBlurSupported,
    backgroundBlurProcessor,
  };

  return (
    <BackgroundBlurProviderContext.Provider value={value}>
      {children}
    </BackgroundBlurProviderContext.Provider>
  );
};

export const useBackgroundBlur = (): BackgroundBlurProviderState => {
  const context = useContext(BackgroundBlurProviderContext);

  if (!context) {
    throw new Error(
      'useBackgroundBlur must be used within BackgroundBlurProvider'
    );
  }
  return context;
};
