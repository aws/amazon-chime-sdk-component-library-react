// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DeviceChangeObserver } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { AudioOutputContextType } from '../../types';
import { useDeviceManager } from '../DeviceProvider';
import { useLogger } from '../LoggerProvider';

const AudioOutputContext = createContext<AudioOutputContextType | null>(null);

export const AudioOutputProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const logger = useLogger();
  const deviceManager = useDeviceManager();
  const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioOutputDevice, setSelectedAudioOutputDevice] = useState(
    deviceManager.selectedAudioOutputDevice
  );

  useEffect(() => {
    deviceManager.subscribeToSelectedAudioOutputDevice(
      setSelectedAudioOutputDevice
    );

    return (): void => {
      deviceManager.unsubscribeFromSelectedAudioOutputDevice(
        setSelectedAudioOutputDevice
      );
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioOutputsChanged: (newAudioOutputs: MediaDeviceInfo[]) => {
        logger.info('AudioOutputProvider - audio outputs updated');
        setAudioOutputs(newAudioOutputs);
      },
    };

    async function initAudioOutput(): Promise<void> {
      const devices = await deviceManager.listAudioOutputDevices();

      if (isMounted) {
        setAudioOutputs(devices);
        deviceManager.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initAudioOutput();
    };

    deviceManager.subscribeToDeviceLabelTrigger(callback);

    initAudioOutput();

    return () => {
      isMounted = false;
      deviceManager.removeDeviceChangeObserver(observer);
      deviceManager.unsubscribeFromDeviceLabelTrigger(callback);
    };
  }, [deviceManager]);

  const contextValue: AudioOutputContextType = useMemo(
    () => ({
      devices: audioOutputs,
      selectedDevice: selectedAudioOutputDevice,
    }),
    [audioOutputs, selectedAudioOutputDevice]
  );

  return (
    <AudioOutputContext.Provider value={contextValue}>
      {children}
    </AudioOutputContext.Provider>
  );
};

export const useAudioOutputs = (): AudioOutputContextType => {
  const context = useContext(AudioOutputContext);

  if (!context) {
    throw new Error('useAudioOutputs must be used within AudioOutputProvider');
  }

  return context;
};
