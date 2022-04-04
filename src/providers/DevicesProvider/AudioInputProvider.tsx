// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type {
  AudioTransformDevice,
  Device,
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

import { AUDIO_INPUT } from '../../constants/additional-audio-video-devices';
import { DeviceConfig, DeviceTypeContext } from '../../types';
import { getFormattedDropdownDeviceOptions } from '../../utils/device-utils';
import { useAudioVideo } from '../AudioVideoProvider';
import { useLogger } from '../LoggerProvider';
import { useMeetingManager } from '../MeetingProvider';

interface Props {
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: Device | AudioTransformDevice
  ) => Promise<Device | AudioTransformDevice>;
}

const Context = createContext<DeviceTypeContext | null>(null);

const AudioInputProvider: React.FC<Props> = ({
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
  const [selectAudioInputDeviceError, setSelectAudioInputDeviceError] =
    useState(meetingManager.selectAudioInputDeviceError);

  const replaceDevice = async (
    device: string
  ): Promise<Device | AudioTransformDevice> => {
    if (onDeviceReplacement) {
      return onDeviceReplacement(
        device,
        meetingManager.selectedAudioInputTransformDevice
      );
    }
    return device;
  };

  useEffect(() => {
    meetingManager.subscribeToSelectAudioInputDeviceError(
      setSelectAudioInputDeviceError
    );

    return (): void => {
      meetingManager.unsubscribeFromSelectAudioInputDeviceError(
        setSelectAudioInputDeviceError
      );
    };
  }, []);

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
          await meetingManager.selectAudioInputDevice(nextDevice);
        } catch (e) {
          logger.error(`Error in selecting audio input device - ${e}`);
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
  }, [audioVideo, onDeviceReplacement]);

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
    const additionalAudioInputs =
      getFormattedDropdownDeviceOptions(AUDIO_INPUT);
    if (additionalAudioInputs !== null) {
      devices = [...devices, ...additionalAudioInputs];
    }
  }

  return { devices, selectedDevice, selectDeviceError };
};

export { AudioInputProvider, useAudioInputs };
