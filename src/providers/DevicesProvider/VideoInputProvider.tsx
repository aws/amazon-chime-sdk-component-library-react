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
import { DeviceTypeContext, DeviceConfig } from '../../types';
import { VIDEO_INPUT } from '../../constants/additional-audio-video-devices';
import { getFormattedDropdownDeviceOptions } from '../../utils/device-utils';

const Context = createContext<DeviceTypeContext | null>(null);

const VideoInputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);
  const meetingManager = useMeetingManager();
  const [selectedVideoInputDevice, setSelectedVideoInputDevice] = useState(
    meetingManager.selectedVideoInputDevice
  );

  useEffect(() => {
    const callback = (updatedVideoInputDevice: string | null): void => {
      setSelectedVideoInputDevice(updatedVideoInputDevice);
    };

    meetingManager.subscribeToSelectedVideoInputDevice(callback);

    return (): void => {
      meetingManager.unsubscribeFromSelectedVideoInputDevice(callback);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      videoInputsChanged: (newvideoInputs: MediaDeviceInfo[]) => {
        console.log('VideoInputProvider - video inputs updated');
        setVideoInputs(newvideoInputs);
      },
    };

    async function initVideoInput() {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listVideoInputDevices();

      if (isMounted) {
        setVideoInputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    initVideoInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
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

const useVideoInputs = (props?: DeviceConfig): DeviceTypeContext => {
  const needAdditionalIO = props && props.additionalDevices;
  const additionalIOJSON = props && VIDEO_INPUT;
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVideoInputs must be used within VideoInputProvider');
  }

  let { devices } = context;
  const { selectedDevice } = context;

  if (needAdditionalIO) {
    const additionalVideoInputs = getFormattedDropdownDeviceOptions(
      additionalIOJSON
    );
    if (additionalVideoInputs !== null) {
      devices = [...devices, ...additionalVideoInputs];
    }
  }
  return { devices, selectedDevice };
};

export { VideoInputProvider, useVideoInputs };
