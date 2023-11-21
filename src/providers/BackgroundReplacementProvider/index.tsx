// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundFilterSpec,
  BackgroundReplacementOptions,
  BackgroundReplacementProcessor,
  BackgroundReplacementVideoFrameProcessor,
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
  /** The spec defines the assets that will be used for adding background replacement to a frame. For more information, refer to
   * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  spec?: BackgroundFilterSpec;
  /* A set of options that can be supplied when creating a background replacement video frame processor such as the background replacement image blob. For more information, refer to
   * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  options?: BackgroundReplacementOptions;
}

interface BackgroundReplacementProviderState {
  createBackgroundReplacementDevice: (
    device: Device
  ) => Promise<DefaultVideoTransformDevice>;
  isBackgroundReplacementSupported: boolean | undefined;
  backgroundReplacementProcessor: BackgroundReplacementProcessor | undefined;
}

const BackgroundReplacementProviderContext = createContext<
  BackgroundReplacementProviderState | undefined
>(undefined);

export const BackgroundReplacementProvider: FC<
  React.PropsWithChildren<Props>
> = ({ spec, options, children }) => {
  const logger = useLogger();
  const [
    isBackgroundReplacementSupported,
    setIsBackgroundReplacementSupported,
  ] = useState<boolean | undefined>(undefined);
  const [backgroundReplacementProcessor, setBackgroundReplacementProcessor] =
    useState<BackgroundReplacementProcessor | undefined>(undefined);

  const replacementSpec = useMemoCompare(
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

  const replacementOptions = useMemoCompare(
    options,
    (
      prev: BackgroundReplacementOptions | undefined,
      next: BackgroundReplacementOptions | undefined
    ): boolean => {
      if (isPrevNextEmpty(prev, next) || isPrevNextUndefined(prev, next)) {
        return true;
      }
      if (
        prev?.imageBlob?.size === next?.imageBlob?.size ||
        prev?.filterCPUUtilization === next?.filterCPUUtilization ||
        prev?.logger !== next?.logger ||
        prev?.reportingPeriodMillis !== next?.reportingPeriodMillis
      ) {
        return false;
      }
      return true;
    }
  );

  useEffect(() => {
    // One reason we need to initialize first, even though we'll destroy this background replacement processor when we create a new device
    // is because we need to check if background replacement is supported by initializing the background replacement processor to see if the browser supports
    initializeBackgroundReplacement();
    return () => {
      logger.info(
        'Specs or options were changed. Destroying and re-initializing background replacement processor.'
      );
      backgroundReplacementProcessor?.destroy();
    };
  }, [replacementSpec, replacementOptions]);

  async function initializeBackgroundReplacement(): Promise<
    BackgroundReplacementProcessor | undefined
  > {
    logger.info(
      `Initializing background replacement processor with, ${JSON.stringify(
        spec
      )}, ${JSON.stringify(options)}`
    );

    try {
      const createdProcessor =
        await BackgroundReplacementVideoFrameProcessor.create(
          { ...spec } as BackgroundFilterSpec,
          { ...options } as BackgroundReplacementOptions
        );
      // BackgroundReplacementVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
      // in the case that BackgroundReplacementVideoFrameProcessor.isSupported() returns false.
      // BackgroundReplacementVideoFrameProcessor.create() can also throw an error in case loading
      // the assets are not fetched successfully.
      if (createdProcessor instanceof NoOpVideoFrameProcessor) {
        logger.warn('Initialized NoOpVideoFrameProcessor');
        setBackgroundReplacementProcessor(undefined);
        setIsBackgroundReplacementSupported(false);
        return undefined;
      } else {
        logger.info(
          `Initialized background replacement processor: ${JSON.stringify(
            createdProcessor
          )}`
        );
        setBackgroundReplacementProcessor(createdProcessor);
        setIsBackgroundReplacementSupported(true);
        return createdProcessor;
      }
    } catch (error) {
      logger.error(
        `Error creating a background replacement video frame processor device. ${error}`
      );
      setBackgroundReplacementProcessor(undefined);
      setIsBackgroundReplacementSupported(false);
      return undefined;
    }
  }

  const createBackgroundReplacementDevice = async (
    selectedDevice: Device
  ): Promise<DefaultVideoTransformDevice> => {
    logger.info(
      `Calling createBackgroundReplacementDevice with device: ${JSON.stringify(
        selectedDevice
      )}`
    );
    const currentProcessor = await initializeBackgroundReplacement();
    try {
      const logger =
        options?.logger ||
        new ConsoleLogger('BackgroundReplacementProvider', LogLevel.INFO);
      if (currentProcessor) {
        const chosenVideoTransformDevice = new DefaultVideoTransformDevice(
          logger,
          selectedDevice,
          [currentProcessor]
        );
        return chosenVideoTransformDevice;
      } else {
        throw new Error(
          'Processor has not been created. Background Replacement is not supported.'
        );
      }
    } catch (error) {
      throw new Error(
        `Failed to create a DefaultVideoTransformDevice: ${error}`
      );
    }
  };

  const value: BackgroundReplacementProviderState = {
    createBackgroundReplacementDevice,
    isBackgroundReplacementSupported,
    backgroundReplacementProcessor,
  };

  return (
    <BackgroundReplacementProviderContext.Provider value={value}>
      {children}
    </BackgroundReplacementProviderContext.Provider>
  );
};

export const useBackgroundReplacement =
  (): BackgroundReplacementProviderState => {
    const context = useContext(BackgroundReplacementProviderContext);

    if (!context) {
      throw new Error(
        'useBackgroundReplacement must be used within BackgroundReplacementProvider'
      );
    }

    return context;
  };
