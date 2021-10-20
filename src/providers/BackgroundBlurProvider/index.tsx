// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  BackgroundBlurOptions,
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
  useState,
} from 'react';

interface Props {
  /** The spec defines the assets that will be used for adding background blur to a frame. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/master/guides/15_Background_Filter_Video_Processor.md#adding-background-blur-to-your-application). */
  spec?: BackgroundFilterSpec;
  /** A set of options that can be supplied when creating a background blur video frame processor. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/master/guides/15_Background_Filter_Video_Processor.md#adding-background-blur-to-your-application). */
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

  useEffect(() => {
    async function initializeBackgroundBlur() {
      try {
        console.log('Initializing background blur processor.');
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
        } else {
          console.log(`Initialized background blur processor: ${JSON.stringify(createdProcessor)}`);
          setProcessor(createdProcessor);
          setIsBackgroundBlurSupported(true);
        }
      } catch (error) {
        console.error(`Error creating a background blur video frame processor device.`, error);
        setProcessor(undefined);
        setIsBackgroundBlurSupported(false);
      }
    }
    initializeBackgroundBlur();
    return () => {
      console.log(`Destroying background blur processor.`);
      processor?.destroy();
    };
  }, []);

  const createBackgroundBlurDevice = async (
    selectedDevice: Device
  ): Promise<DefaultVideoTransformDevice> => {
    console.log(`Calling createBackgroundBlurDevice with device: ${JSON.stringify(selectedDevice)}`);
    // It takes time for the processor to start - if you call this method before it is finished initializing, throw an error
    if (!isBackgroundBlurSupported) {
      throw new Error('Background blur is not supported. The processor may not be initialized yet.');
    }
    try {
      const logger = options?.logger
        ? options.logger
        : new ConsoleLogger('BackgroundBlurProvider', LogLevel.INFO);
      if (processor) {
        const chosenVideoTransformDevice = new DefaultVideoTransformDevice(
          logger,
          selectedDevice,
          [processor]
        );
        console.log(`Created video transform device ${JSON.stringify(chosenVideoTransformDevice, null, 2)}`);
        return chosenVideoTransformDevice;
      } else {
        throw new Error('Processor has not been created.');
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
