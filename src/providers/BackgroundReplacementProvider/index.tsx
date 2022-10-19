// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundFilterSpec,
  BackgroundReplacementOptions,
  BackgroundReplacementProcessor,
  BackgroundReplacementVideoFrameProcessor,
  BackgroundReplacementVideoFrameProcessorObserver,
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
    /**
   * Observer callback functions. The observer will be added to the background replacement processor on mount and removed on unmount.
   */
  observer?: BackgroundReplacementVideoFrameProcessorObserver;
}

interface BackgroundReplacementProviderState {
  createBackgroundReplacementDevice: (
    device: Device
  ) => Promise<DefaultVideoTransformDevice>;
  isBackgroundReplacementSupported: boolean | undefined;
}

const BackgroundReplacementProviderContext = createContext<
  BackgroundReplacementProviderState | undefined
>(undefined);

const BackgroundReplacementProvider: FC<Props> = ({
  spec,
  options,
  observer,
  children,
}) => {
  const logger = useLogger();
  const [
    isBackgroundReplacementSupported,
    setIsBackgroundReplacementSupported,
  ] = useState<boolean | undefined>(undefined);
  const [processor, setProcessor] = useState<BackgroundReplacementProcessor | undefined>(
    undefined
  );

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
    initializeBackgroundReplacement();
    return () => {
      logger.info(
        'Specs or options were changed. Destroying and re-initializing background replacement processor.'
      );
      processor?.destroy();
    };
  }, [replacementSpec, replacementOptions]);

  useEffect(() => {
    if (!!processor && !!observer) {
      processor.addObserver(observer);
    }
    
    return () => {
      if (!!processor && !!observer) {
        processor.removeObserver(observer);
      }
    };
  }, [observer, processor]);

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
        setProcessor(undefined);
        setIsBackgroundReplacementSupported(false);
        return undefined;
      } else {
        logger.info(
          `Initialized background replacement processor: ${JSON.stringify(
            createdProcessor
          )}`
        );
        setProcessor(createdProcessor);
        setIsBackgroundReplacementSupported(true);
        return createdProcessor;
      }
    } catch (error) {
      logger.error(
        `Error creating a background replacement video frame processor device. ${error}`
      );
      setProcessor(undefined);
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
  };

  return (
    <BackgroundReplacementProviderContext.Provider value={value}>
      {children}
    </BackgroundReplacementProviderContext.Provider>
  );
};

const useBackgroundReplacement = (): BackgroundReplacementProviderState => {
  const context = useContext(BackgroundReplacementProviderContext);

  if (!context) {
    throw new Error(
      'useBackgroundReplacement must be used within BackgroundReplacementProvider'
    );
  }

  return context;
};

export { BackgroundReplacementProvider, useBackgroundReplacement };
