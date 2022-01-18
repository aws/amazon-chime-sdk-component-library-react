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
  VideoFrameProcessor,
} from 'amazon-chime-sdk-js';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import useMemoCompare from '../../utils/use-memo-compare';
import { isPrevNextUndefined } from '../../utils/device-utils';
import { BaseSdkProps } from '../../components/sdk/Base';

interface Props extends BaseSdkProps {
  /** The spec defines the assets that will be used for adding background blur to a frame. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  spec?: BackgroundFilterSpec;
  /** A set of options that can be supplied when creating a background blur video frame processor. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  options?: BackgroundBlurOptions;
}

interface BackgroundBlurProviderState {
  createBackgroundBlurDevice: (
    device: Device
  ) => Promise<DefaultVideoTransformDevice>;
  isBackgroundBlurSupported: boolean | undefined;
}

const BackgroundBlurProviderContext =
  createContext<BackgroundBlurProviderState | undefined>(undefined);

const BackgroundBlurProvider: FC<Props> = ({ spec, options, children }) => {
  const [isBackgroundBlurSupported, setIsBackgroundBlurSupported] = useState<boolean | undefined>(undefined);
  const [processor, setProcessor] = useState<VideoFrameProcessor | undefined>();
  
  const blurSpec = useMemoCompare(
    spec,
    (
      prev: BackgroundFilterSpec | undefined,
      next: BackgroundFilterSpec | undefined
    ): boolean => {
      if ((Object.is(prev, next)) || isPrevNextUndefined(prev, next)) {
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
      if ((Object.is(prev?.filterCPUUtilization, next?.filterCPUUtilization)) || isPrevNextUndefined(prev, next)) {
        return true;
      }
      return false;
    }
  );

  useEffect(() => {
    console.log('Specs or options were changed. Re-initializing background blur processor.');
    initializeBackgroundBlur();
    return () => {
      console.log(`Destroying background blur processor.`);
      processor?.destroy();
    };
  },[blurOptions, blurSpec]);

  async function initializeBackgroundBlur(): Promise<BackgroundBlurProcessor | undefined>{
    console.log('Initializing background blur processor with ', spec, options);

    try {
      const createdProcessor = await BackgroundBlurVideoFrameProcessor.create(
        spec,
        options
      );
      // BackgroundBlurVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
      // in the case that BackgroundBlurVideoFrameProcessor.isSupported() returns false.
      // BackgroundBlurVideoFrameProcessor.create() can also throw an error in case loading
      // the assets are not fetched successfully.
      if (createdProcessor instanceof NoOpVideoFrameProcessor) {
        console.warn(`Initialized NoOpVideoFrameProcessor.`);
        setProcessor(undefined);
        setIsBackgroundBlurSupported(false);
        return undefined;
      } else {
        console.log(`Initialized background blur processor: ${JSON.stringify(createdProcessor)}`);
        setProcessor(createdProcessor);
        setIsBackgroundBlurSupported(true);
        return createdProcessor;
      }
    } catch (error) {
      console.log(`Error creating a background blur video frame processor device`, error);
      setProcessor(undefined);
      setIsBackgroundBlurSupported(false);
      return undefined;
    }
  }

  const createBackgroundBlurDevice = async (
    selectedDevice: Device
  ): Promise<DefaultVideoTransformDevice> => {
    console.log(
      `Calling createBackgroundBlurDevice with device: ${JSON.stringify(
        selectedDevice
      )}`
    );
    let currentProcessor = await initializeBackgroundBlur();

    try {
      const logger = options?.logger
        ? options.logger
        : new ConsoleLogger('BackgroundBlurProvider', LogLevel.INFO);
      if (currentProcessor) {
        const chosenVideoTransformDevice = new DefaultVideoTransformDevice(
          logger,
          selectedDevice,
          [currentProcessor]
        );
        console.log(`Created video transform device ${JSON.stringify(chosenVideoTransformDevice, null, 2)}`);
        return chosenVideoTransformDevice;
      } else {
        throw new Error('Processor has not been created. Background Blur is not supported.');
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
  };

  return (
    <BackgroundBlurProviderContext.Provider value={value}>
      {children}
    </BackgroundBlurProviderContext.Provider>
  );
};

const useBackgroundBlur = (): BackgroundBlurProviderState => {
  const context = useContext(BackgroundBlurProviderContext);

  if (!context) {
    throw new Error(
      'useBackgroundBlur must be used within BackgroundBlurProvider'
    );
  }
  return context;
};

export { BackgroundBlurProvider, useBackgroundBlur };
