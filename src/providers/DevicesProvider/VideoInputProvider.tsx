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

import { DeviceTypeContext } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';

const Context = createContext<DeviceTypeContext | null>(null);

const VideoInputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);
  const meetingManager = useMeetingManager();
  const [selectedVideoInputDevice, setSelectedVideoInputDevice] = useState(
    meetingManager.selectedVideoInputDevice
  );

  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputDevice(
      setSelectedVideoInputDevice
    );

    return (): void => {
      meetingManager.unsubscribeFromSelectedVideoInputDevice(
        setSelectedVideoInputDevice
      );
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      videoInputsChanged: (newVideoInputs: MediaDeviceInfo[]) => {
        console.log('VideoInputProvider - video inputs updated');
        setVideoInputs(newVideoInputs);
      },
    };

    async function initVideoInput(): Promise<void> {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listVideoInputDevices();

      if (isMounted) {
        setVideoInputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    const callback = (): void => {
      initVideoInput();
    };

    meetingManager.subscribeToDeviceLabelTriggerChange(callback);

    initVideoInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
      meetingManager.unsubscribeFromDeviceLabelTriggerChange(callback);
    };
  }, [audioVideo]);

  const contextValue: DeviceTypeContext = useMemo(
    () => ({
      devices: videoInputs,
      selectedDevice: selectedVideoInputDevice,
    }),
    [videoInputs, selectedVideoInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useVideoInputs = (): DeviceTypeContext => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVideoInputs must be used within VideoInputProvider');
  }

  return context;
};

export { VideoInputProvider, useVideoInputs };
