// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
} from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';
import { DeviceTypeContext } from '../../types';

const AudioOutputContext = createContext<DeviceTypeContext | null>(null);

const AudioOutputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([]);
  const meetingManager = useMeetingManager();
  const [selectedAudioOutputDevice, setSelectedAudioOutputDevice] = useState(
    meetingManager.selectedAudioOutputDevice
  );

  useEffect(() => {
    meetingManager.subscribeToSelectedAudioOutputDevice(setSelectedAudioOutputDevice);

    return (): void => {
      meetingManager.unsubscribeFromSelectedAudioOutputDevice(setSelectedAudioOutputDevice);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioOutputsChanged: (newAudioOutputs: MediaDeviceInfo[]) => {
        console.log('AudioOutputProvider - audio outputs updated');
        setAudioOutputs(newAudioOutputs);
      },
    };

    async function initAudioOutput() {
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

    meetingManager.subscribeToDeviceLabelTriggerChange(callback);

    initAudioOutput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
      meetingManager.unsubscribeFromDeviceLabelTriggerChange(callback);
    };
  }, [audioVideo]);

  const contextValue: DeviceTypeContext = useMemo(
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

const useAudioOutputs = (): DeviceTypeContext => {
  const context = useContext(AudioOutputContext);

  if (!context) {
    throw new Error('useAudioOutputs must be used within AudioOutputProvider');
  }

  return context;
};

export { AudioOutputProvider, useAudioOutputs };
