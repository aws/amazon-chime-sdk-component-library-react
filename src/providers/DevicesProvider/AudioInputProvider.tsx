// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type {
  AudioInputDevice,
  DeviceChangeObserver,
} from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AudioInputContextType, DeviceLabels } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useLogger } from '../LoggerProvider';
import { useMeetingManager } from '../MeetingProvider';

interface Props {
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: AudioInputDevice | undefined
  ) => Promise<AudioInputDevice>;
}

const Context = createContext<AudioInputContextType | null>(null);

const AudioInputProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onDeviceReplacement,
}) => {
  const logger = useLogger();
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioInputDevice, setSelectedAudioInputDevice] = useState(
    meetingManager.selectedAudioInputDevice
  );
  const selectedInputRef = useRef(selectedAudioInputDevice);
  selectedInputRef.current = selectedAudioInputDevice;

  const replaceDevice = async (device: string): Promise<AudioInputDevice> => {
    if (onDeviceReplacement) {
      return onDeviceReplacement(
        device,
        meetingManager.selectedAudioInputDevice
      );
    }
    return device;
  };

  useEffect(() => {
    meetingManager.subscribeToSelectedAudioInputDevice(
      setSelectedAudioInputDevice
    );

    return (): void => {
      meetingManager.unsubscribeFromSelectedAudioInputDevice(
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
          meetingManager.getDeviceLabels() !== DeviceLabels.Audio &&
          meetingManager.getDeviceLabels() !== DeviceLabels.AudioAndVideo
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

        const nextDevice = await replaceDevice(nextInput);
        try {
          await meetingManager.startAudioInputDevice(nextDevice);
        } catch (e) {
          logger.error(
            `Failed to select audio input device on audioInputsChanged: ${e}`
          );
        }

        setAudioInputs(newAudioInputs);
      },
    };

    async function initAudioInput(): Promise<void> {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listAudioInputDevices();

      if (isMounted) {
        setAudioInputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initAudioInput();
    };

    meetingManager.subscribeToDeviceLabelTrigger(callback);

    initAudioInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
      meetingManager.unsubscribeFromDeviceLabelTrigger(callback);
    };
  }, [audioVideo, onDeviceReplacement]);

  const contextValue: AudioInputContextType = useMemo(
    () => ({
      devices: audioInputs,
      selectedDevice: selectedAudioInputDevice,
    }),
    [audioInputs, selectedAudioInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useAudioInputs = (): AudioInputContextType => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAudioInputs must be used within AudioInputProvider');
  }

  return context;
};

export { AudioInputProvider, useAudioInputs };
