// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';
import { getFormattedDropdownDeviceOptions } from '../../utils/device-utils';
import { DeviceTypeContext, DeviceConfig } from '../../types';
import { AUDIO_INPUT } from '../../constants/additional-audio-video-devices';

const Context = createContext<DeviceTypeContext | null>(null);

const AudioInputProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioInputDevice, setSelectedAudioInputDevice] = useState(
    meetingManager.selectedAudioInputDevice
  );
  const selectedInputRef = useRef(selectedAudioInputDevice);
  selectedInputRef.current = selectedAudioInputDevice;
  const [selectAudioInputDeviceError, setSelectAudioInputDeviceError] = useState(
    meetingManager.selectAudioInputDeviceError
  );

  useEffect(() => {
    meetingManager.subscribeToSelectAudioInputDeviceError(setSelectAudioInputDeviceError);

    return (): void => {
      meetingManager.unsubscribeFromSelectAudioInputDeviceError(setSelectAudioInputDeviceError);
    };
  }, []);

  useEffect(() => {
    meetingManager.subscribeToSelectedAudioInputDevice(setSelectedAudioInputDevice);

    return (): void => {
      meetingManager.unsubscribeFromSelectedAudioInputDevice(setSelectedAudioInputDevice);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioInputsChanged: async (newAudioInputs: MediaDeviceInfo[]) => {
        console.log('AudioInputProvider - audio inputs updated');

        const hasSelectedDevice = newAudioInputs.some(
          (device) => device.deviceId === selectedInputRef.current
        );

        if (
          selectedInputRef.current &&
          !hasSelectedDevice &&
          newAudioInputs.length
        ) {
          console.log(
            'Previously selected audio input lost. Selecting a default device.'
          );
          meetingManager.selectAudioInputDevice(newAudioInputs[0].deviceId);
        } else if (selectedInputRef.current === 'default') {
          console.log(
            `Audio devices updated and "default" device is selected. Reselecting input.`
          );
          try {
            await audioVideo?.chooseAudioInputDevice(selectedInputRef.current);
          } catch (e) {
            console.error(`Error in selecting audio input device - ${e}`);
          }
        }

        setAudioInputs(newAudioInputs);
      },
    };

    async function initAudioInput() {
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

    meetingManager.subscribeToDeviceLabelTriggerChange(callback);

    initAudioInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
      meetingManager.unsubscribeFromDeviceLabelTriggerChange(callback);
    };
  }, [audioVideo]);

  const contextValue: DeviceTypeContext = useMemo(
    () => ({
      devices: audioInputs,
      selectedDevice: selectedAudioInputDevice,
      selectDeviceError: selectAudioInputDeviceError,
    }),
    [audioInputs, selectedAudioInputDevice, selectAudioInputDeviceError]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useAudioInputs = (props?: DeviceConfig): DeviceTypeContext => {
  const needAdditionalIO = props && props.additionalDevices;
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAudioInputs must be used within AudioInputProvider');
  }

  let { devices } = context;
  const { selectedDevice } = context;
  const { selectDeviceError } = context;

  if (needAdditionalIO) {
    const additionalAudioInputs = getFormattedDropdownDeviceOptions(
      AUDIO_INPUT
    );
    if (additionalAudioInputs !== null) {
      devices = [...devices, ...additionalAudioInputs];
    }
  }

  return { devices, selectedDevice, selectDeviceError };
};

export { AudioInputProvider, useAudioInputs };
