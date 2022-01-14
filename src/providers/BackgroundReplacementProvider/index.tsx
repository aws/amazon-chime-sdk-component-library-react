// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import{
  BackgroundReplacementOptions,
  BackgroundReplacementVideoFrameProcessor,
  BackgroundFilterSpec,
  ConsoleLogger,
  DefaultVideoTransformDevice,
  Device,
  LogLevel,
  NoOpVideoFrameProcessor,
  VideoFrameProcessor,
  BackgroundReplacementProcessor,
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
import useMemoCompare from '../../utils/use-memo-compare';
import { isPrevNextUndefined } from '../../utils/device-utils';
import { BaseSdkProps } from '../../components/sdk/Base';

interface Props extends BaseSdkProps {
  /** The spec defines the assets that will be used for adding background replacement to a frame. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  spec?: BackgroundFilterSpec;
  /* A set of options that can be supplied when creating a background replacement video frame processor such as the background replacement image blob. For more information, refer to
   * [Amazon Chime JS SDK Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
  options?: BackgroundReplacementOptions;
}

interface BackgroundReplacementProviderState {
  createBackgroundReplacementDevice: (
    device: Device
  ) => Promise<DefaultVideoTransformDevice>;
  isBackgroundReplacementSupported: boolean | undefined;
}

const BackgroundReplacementProviderContext =
  createContext<BackgroundReplacementProviderState | undefined>(undefined);

const BackgroundReplacementProvider: FC<Props> = ( { spec, options, children }) => {
  const [isBackgroundReplacementSupported, setIsBackgroundReplacementSupported] = useState<boolean | undefined>(undefined);
  const [processor, setProcessor] = useState<VideoFrameProcessor | undefined>(undefined);
  const processorState = useRef<VideoFrameProcessor | undefined>();
  processorState.current = processor;

  const replacementSpec = useMemoCompare(
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

  const replacementOptions = useMemoCompare(
    options,
    (
      prev: BackgroundReplacementOptions | undefined,
      next: BackgroundReplacementOptions | undefined
    ): boolean => {
      if ( isPrevNextUndefined(prev, next) || (prev?.imageBlob?.size == next?.imageBlob?.size && Object.is(prev?.filterCPUUtilization, next?.filterCPUUtilization))) {
        return true;
      }
      return false;
    }
  );
  
  useEffect(() =>{
    console.log('Specs or options were changed. Re-initializing background replacement processor.');
    initializeBackgroundReplacement();
    return () => {
      console.log(`Destroying background replacement processor.`);
      processor?.destroy();
    };
  }, [replacementSpec, replacementOptions]);


  let currentProcessorPromise:
  | Promise<BackgroundReplacementProcessor| undefined>
  | undefined;

  async function initializeBackgroundReplacement(): Promise<BackgroundReplacementProcessor | undefined> {
    console.log('Initializing background replacement processor with ', spec, options);

    const fetchedProcessor = BackgroundReplacementVideoFrameProcessor.create(
      spec,
      options
    );
    
    fetchedProcessor.
    then((createdProcessor) => {
      // BackgroundReplacementVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
      // in the case that BackgroundReplacementVideoFrameProcessor.isSupported() returns false.
      // BackgroundReplacementVideoFrameProcessor.create() can also throw an error in case loading
      // the assets are not fetched successfully.
      if (createdProcessor instanceof NoOpVideoFrameProcessor) {
        console.warn(`Initialized NoOpVideoFrameProcessor.`);
        setProcessor(undefined);
        setIsBackgroundReplacementSupported(false);
      } else {
        console.log(`Initialized background replacement processor: ${JSON.stringify(createdProcessor)}`);
        setProcessor(createdProcessor);
        setIsBackgroundReplacementSupported(true);
      }
    }).catch((e) =>{
      console.error(`Error creating a background replacement video frame processor device.`, e);
      setProcessor(undefined);
      setIsBackgroundReplacementSupported(false);
    });

    return(currentProcessorPromise = fetchedProcessor);
  }

  async function createProcessor(): Promise<BackgroundReplacementProcessor | undefined>{
    initializeBackgroundReplacement();
    return currentProcessorPromise;
  }

  const createBackgroundReplacementDevice = async (
    selectedDevice: Device
  ): Promise<DefaultVideoTransformDevice> => {
    console.log(
      `Calling createBackgroundReplacement with device: ${JSON.stringify(
        selectedDevice
      )}`
    );
    await createProcessor();
    try {
      const logger = options?.logger
        ? options.logger
        : new ConsoleLogger('BackgroundReplacementProvider', LogLevel.INFO);
      let currentProcessor = processorState.current;
      if (currentProcessor) {
        const chosenVideoTransformDevice = new DefaultVideoTransformDevice(
          logger,
          selectedDevice,
          [currentProcessor]
        );
        console.log(`Created video transform device ${JSON.stringify(chosenVideoTransformDevice, null, 2)}`);
        return chosenVideoTransformDevice;
      } else {
        throw new Error('Processor has not been created. Background Replacement is not supported.');
      }
    } catch (error) {
      throw new Error(
        `Failed to create a DefaultVideoTransformDevice: ${error}`
      );
    }
  };

  const value: BackgroundReplacementProviderState = {
    createBackgroundReplacementDevice,
    isBackgroundReplacementSupported
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
}

export { BackgroundReplacementProvider, useBackgroundReplacement };