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

import { DeviceTypeContext } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';

interface Props {
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: Device | AudioTransformDevice | null
  ) => Promise<Device | AudioTransformDevice | null>;
}

const Context = createContext<DeviceTypeContext | null>(null);

const AudioInputProvider: React.FC<Props> = ({
  children,
  onDeviceReplacement,
}) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioInputDevice, setSelectedAudioInputDevice] = useState(
    meetingManager.selectedAudioInputDevice
  );
  const selectedInputRef = useRef(selectedAudioInputDevice);
  selectedInputRef.current = selectedAudioInputDevice;

  const replaceDevice = async (
    device: string
  ): Promise<Device | AudioTransformDevice | null> => {
    if (onDeviceReplacement) {
      return onDeviceReplacement(
        device,
        meetingManager.selectedAudioInputTransformDevice
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
        console.log('AudioInputProvider - audio inputs updated');

        const hasSelectedDevice = newAudioInputs.some(
          (device) => device.deviceId === selectedInputRef.current
        );

        let nextInput: string = 'default';
        if (
          selectedInputRef.current &&
          !hasSelectedDevice &&
          newAudioInputs.length
        ) {
          console.log(
            'Previously selected audio input lost. Selecting a default device.'
          );
          nextInput = newAudioInputs[0].deviceId;

          // Safari and Firefox don't have this "default" as device Id
          // Only Chrome have this "default" device
        } else if (selectedInputRef.current === 'default') {
          console.log(
            `Audio devices updated and "default" device is selected. Reselecting input.`
          );
        }

        const nextDevice = await replaceDevice(nextInput);
        try {
          await meetingManager.selectAudioInputDevice(nextDevice);
        } catch (e) {
          console.error(
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
    }),
    [audioInputs, selectedAudioInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useAudioInputs = (): DeviceTypeContext => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAudioInputs must be used within AudioInputProvider');
  }

  return context;
};

export { AudioInputProvider, useAudioInputs };
