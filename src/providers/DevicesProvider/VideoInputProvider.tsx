// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DeviceChangeObserver, VideoInputDevice } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { VideoInputContextType } from '../../types';
import { useDeviceManager } from '../DeviceProvider';
import { useLogger } from '../LoggerProvider';

const Context = createContext<VideoInputContextType | null>(null);

export const VideoInputProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const logger = useLogger();
  const deviceManager = useDeviceManager();
  const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedVideoInputDevice, setSelectedVideoInputDevice] = useState<
    VideoInputDevice | undefined
  >(deviceManager.selectedVideoInputDevice);

  useEffect(() => {
    deviceManager.subscribeToSelectedVideoInputDevice(
      setSelectedVideoInputDevice
    );

    return (): void => {
      deviceManager.unsubscribeFromSelectedVideoInputDevice(
        setSelectedVideoInputDevice
      );
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      videoInputsChanged: (newVideoInputs: MediaDeviceInfo[]) => {
        logger.info('VideoInputProvider - video inputs updated');
        setVideoInputs(newVideoInputs);
      },
    };

    async function initVideoInput(): Promise<void> {
      const devices = await deviceManager.listVideoInputDevices();

      if (isMounted) {
        setVideoInputs(devices);
        deviceManager.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initVideoInput();
    };

    deviceManager.subscribeToDeviceLabelTrigger(callback);

    initVideoInput();

    return () => {
      isMounted = false;
      deviceManager.removeDeviceChangeObserver(observer);
      deviceManager.unsubscribeFromDeviceLabelTrigger(callback);
    };
  }, [deviceManager]);

  const contextValue: VideoInputContextType = useMemo(
    () => ({
      devices: videoInputs,
      selectedDevice: selectedVideoInputDevice,
    }),
    [videoInputs, selectedVideoInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useVideoInputs = (): VideoInputContextType => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVideoInputs must be used within VideoInputProvider');
  }

  return context;
};
