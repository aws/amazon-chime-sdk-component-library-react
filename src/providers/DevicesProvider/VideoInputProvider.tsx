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
  const [selectVideoInputDeviceError, setSelectVideoInputDeviceError] = useState(
    meetingManager.selectVideoInputDeviceError
  );

  useEffect(() => {
    meetingManager.subscribeToSelectVideoInputDeviceError(setSelectVideoInputDeviceError);

    return (): void => {
      meetingManager.unsubscribeFromSelectVideoInputDeviceError(setSelectVideoInputDeviceError);
    };
  }, []);

  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputDevice(setSelectedVideoInputDevice);

    return (): void => {
      meetingManager.unsubscribeFromSelectedVideoInputDevice(setSelectedVideoInputDevice);
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
      selectDeviceError: selectVideoInputDeviceError,
    }),
    [videoInputs, selectedVideoInputDevice, selectVideoInputDeviceError]
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
  const { selectDeviceError } = context;

  if (needAdditionalIO) {
    const additionalVideoInputs = getFormattedDropdownDeviceOptions(
      additionalIOJSON
    );
    if (additionalVideoInputs !== null) {
      devices = [...devices, ...additionalVideoInputs];
    }
  }
  return { devices, selectedDevice, selectDeviceError };
};

export { VideoInputProvider, useVideoInputs };
