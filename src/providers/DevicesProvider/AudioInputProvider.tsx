// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type { DeviceChangeObserver } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AudioInputContextType, DeviceLabels } from '../../types';
import { useDeviceManager } from '../DeviceProvider';
import { useLogger } from '../LoggerProvider';

const Context = createContext<AudioInputContextType | null>(null);

export const AudioInputProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const logger = useLogger();
  const deviceManager = useDeviceManager();
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioInputDevice, setSelectedAudioInputDevice] = useState(
    deviceManager.selectedAudioInputDevice
  );
  const selectedInputRef = useRef(selectedAudioInputDevice);
  selectedInputRef.current = selectedAudioInputDevice;

  useEffect(() => {
    deviceManager.subscribeToSelectedAudioInputDevice(
      setSelectedAudioInputDevice
    );

    return (): void => {
      deviceManager.unsubscribeFromSelectedAudioInputDevice(
        setSelectedAudioInputDevice
      );
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioInputsChanged: async (newAudioInputs: MediaDeviceInfo[]) => {
        logger.info('AudioInputProvider - audio inputs updated');

        if (
          deviceManager.getDeviceLabels() !== DeviceLabels.Audio &&
          deviceManager.getDeviceLabels() !== DeviceLabels.AudioAndVideo
        ) {
          logger.info(
            'Device labels do not allow audio, skipping audio input selection on audioInputsChanged'
          );
          return;
        }

        const hasSelectedDevice = newAudioInputs.some(
          (device) => device.deviceId === selectedInputRef.current
        );

        let nextInput: string = 'default';
        if (
          selectedInputRef.current &&
          !hasSelectedDevice &&
          newAudioInputs.length
        ) {
          logger.info(
            'Previously selected audio input lost. Selecting a default device.'
          );
          nextInput = newAudioInputs[0].deviceId;

          // Safari and Firefox don't have this "default" as device Id
          // Only Chrome have this "default" device
        } else if (selectedInputRef.current === 'default') {
          logger.info(
            `Audio devices updated and "default" device is selected. Reselecting input.`
          );
        }

        const nextDevice = await deviceManager.replaceDevice(nextInput);
        try {
          await deviceManager.startAudioInputDevice(nextDevice);
        } catch (e) {
          logger.error(
            `Failed to select audio input device on audioInputsChanged: ${e}`
          );
        }

        setAudioInputs(newAudioInputs);
      },
    };

    async function initAudioInput(): Promise<void> {
      const devices = await deviceManager.listAudioInputDevices();

      if (isMounted) {
        setAudioInputs(devices);
        deviceManager.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initAudioInput();
    };

    deviceManager.subscribeToDeviceLabelTrigger(callback);

    initAudioInput();

    return () => {
      isMounted = false;
      deviceManager.removeDeviceChangeObserver(observer);
      deviceManager.unsubscribeFromDeviceLabelTrigger(callback);
    };
  }, [deviceManager]);

  const contextValue: AudioInputContextType = useMemo(
    () => ({
      devices: audioInputs,
      selectedDevice: selectedAudioInputDevice,
    }),
    [audioInputs, selectedAudioInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useAudioInputs = (): AudioInputContextType => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAudioInputs must be used within AudioInputProvider');
  }

  return context;
};
