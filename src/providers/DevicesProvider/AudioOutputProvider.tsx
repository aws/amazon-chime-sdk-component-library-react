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
import { useAudioVideo } from '../AudioVideoProvider';
import { useLogger } from '../LoggerProvider';
import { useMeetingManager } from '../MeetingProvider';

const AudioOutputContext = createContext<AudioOutputContextType | null>(null);

const AudioOutputProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const logger = useLogger();
  const audioVideo = useAudioVideo();
  const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([]);
  const meetingManager = useMeetingManager();
  const [selectedAudioOutputDevice, setSelectedAudioOutputDevice] = useState(
    meetingManager.selectedAudioOutputDevice
  );

  useEffect(() => {
    meetingManager.subscribeToSelectedAudioOutputDevice(
      setSelectedAudioOutputDevice
    );

    return (): void => {
      meetingManager.unsubscribeFromSelectedAudioOutputDevice(
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
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listAudioOutputDevices();

      if (isMounted) {
        setAudioOutputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initAudioOutput();
    };

    meetingManager.subscribeToDeviceLabelTrigger(callback);

    initAudioOutput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
      meetingManager.unsubscribeFromDeviceLabelTrigger(callback);
    };
  }, [audioVideo]);

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

const useAudioOutputs = (): AudioOutputContextType => {
  const context = useContext(AudioOutputContext);

  if (!context) {
    throw new Error('useAudioOutputs must be used within AudioOutputProvider');
  }

  return context;
};

export { AudioOutputProvider, useAudioOutputs };
