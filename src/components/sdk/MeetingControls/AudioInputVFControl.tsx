// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioTransformDevice,
  Device,
  VoiceFocusTransformDevice,
} from 'amazon-chime-sdk-js';
import isEqual from 'lodash.isequal';
import React, { ReactNode, useEffect, useState } from 'react';

import { PopOverSeparator } from '../../..';
import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';
import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useVoiceFocus } from '../../../providers/VoiceFocusProvider';
import { DeviceConfig, DeviceType } from '../../../types';
import {
  audioInputSelectionToDevice,
  isOptionActive,
} from '../../../utils/device-utils';
import useMemoCompare from '../../../utils/use-memo-compare';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Microphone } from '../../ui/icons';
import { Spinner } from '../../ui/icons';
import { PopOverItem } from '../../ui/PopOver/PopOverItem';

interface Props {
  /** The label that will be shown when microphone is muted, it defaults to `Mute`. */
  muteLabel?: string;
  /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
  unmuteLabel?: string;
  /** Title attribute for the icon when muted, it defaults to `Muted microphone` in <Microphone />. */
  mutedIconTitle?: string;
  /** Title attribute for the icon when unmuted, it defaults to `Microphone` in <Microphone />. */
  unmutedIconTitle?: string;
  /** The label that will be shown when the current input audio is an Amazon Voice Focus device, it defaults to `Amazon Voice Focus enabled`. */
  voiceFocusOnLabel?: string;
  /** The label that will be shown when the current input audio is not an Amazon Voice Focus device, it defaults to `Enable Amazon Voice Focus`. */
  voiceFocusOffLabel?: string;
}

const AudioInputVFControl: React.FC<Props> = ({
  muteLabel = 'Mute',
  unmuteLabel = 'Unmute',
  mutedIconTitle,
  unmutedIconTitle,
  voiceFocusOnLabel = 'Amazon Voice Focus enabled',
  voiceFocusOffLabel = 'Enable Amazon Voice Focus',
}) => {
  const meetingManager = useMeetingManager();
  const [isLoading, setIsLoading] = useState(false);
  // When the user click on Amazon Voice Focus option, the state will change.
  const [isVoiceFocusChecked, setIsVoiceFocusChecked] = useState(false);
  // Only when the current input audio device is an Amazon Voice Focus device, the state will be true. Otherwise, it will be false.
  const [isVoiceFocusEnabled, setIsVoiceFocusEnabled] = useState(false);
  const [dropdownWithVFOptions, setDropdownWithVFOptions] = useState<
    ReactNode[] | null
  >(null);
  const { muted, toggleMute } = useToggleLocalMute();
  const [device, setDevice] = useState<Device | AudioTransformDevice | null>(
    meetingManager.selectedAudioInputDevice
  );
  const { isVoiceFocusSupported, addVoiceFocus } = useVoiceFocus();
  const audioInputConfig: DeviceConfig = {
    additionalDevices: true,
  };
  const { devices, selectedDevice } = useAudioInputs(audioInputConfig);

  const audioInputDevices: DeviceType[] = useMemoCompare(
    devices,
    (prev: DeviceType[], next: DeviceType[]): boolean => {
      return isEqual(prev, next);
    }
  );

  useEffect(() => {
    meetingManager.subscribeToSelectedAudioInputTransformDevice(setDevice);
    return (): void => {
      meetingManager.unsubscribeFromSelectedAudioInputTransformDevice(
        setDevice
      );
    };
  }, []);

  useEffect(() => {
    console.info(
      `Amazon Voice Focus is ${isVoiceFocusEnabled ? 'enabled' : 'disabled'}.`
    );
  }, [isVoiceFocusEnabled]);

  useEffect(() => {
    // Only when the current input audio device is an Amazon Voice Focus transform device,
    // Amazon Voice Focus button will be checked.
    if (device instanceof VoiceFocusTransformDevice) {
      setIsVoiceFocusEnabled(true);
    } else {
      setIsVoiceFocusEnabled(false);
    }
  }, [device]);

  useEffect(() => {
    const dropdownOptions: ReactNode[] = audioInputDevices.map((device) => (
      <PopOverItem
        key={device.deviceId}
        children={<span>{device.label}</span>}
        checked={isOptionActive(selectedDevice, device.deviceId)}
        onClick={async (): Promise<void> => {
          if (isVoiceFocusChecked && !isLoading) {
            setIsLoading(true);
            const receivedDevice = audioInputSelectionToDevice(device.deviceId);
            const currentDevice = await addVoiceFocus(receivedDevice);
            await meetingManager.selectAudioInputDevice(currentDevice);
            setIsLoading(false);
          } else {
            await meetingManager.selectAudioInputDevice(device.deviceId);
          }
        }}
      />
    ));

    if (isVoiceFocusSupported) {
      const vfOption: ReactNode = (
        <PopOverItem
          key="voicefocus"
          children={
            <>
              {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
              {isVoiceFocusEnabled ? voiceFocusOnLabel : voiceFocusOffLabel}
            </>
          }
          checked={isVoiceFocusEnabled}
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            setIsVoiceFocusChecked((current) => !current);
          }}
        />
      );
      dropdownOptions?.push(<PopOverSeparator key="separator" />);
      dropdownOptions?.push(vfOption);
    }

    setDropdownWithVFOptions(dropdownOptions);
  }, [
    // The contents of this dropdown depends, of course, on the current selected device,
    // but also on the Voice Focus state, including `addVoiceFocus` which is used inside
    // the click handler.
    addVoiceFocus,
    device,
    audioInputDevices,
    isLoading,
    isVoiceFocusEnabled,
    isVoiceFocusChecked,
    isVoiceFocusSupported,
    selectedDevice,
  ]);

  useEffect(() => {
    async function onVFCheckboxChange() {
      let current = device;
      if (isVoiceFocusChecked) {
        console.info('User turned on Amazon Voice Focus.');
        if (typeof device === 'string') {
          const currentDevice = audioInputSelectionToDevice(device);
          current = await addVoiceFocus(currentDevice);
        }
      } else {
        console.info(
          'Amazon Voice Focus is off by default or user turned off Amazon Voice Focus.'
        );
        if (device instanceof VoiceFocusTransformDevice) {
          current = device.getInnerDevice();
        }
      }
      await meetingManager.selectAudioInputDevice(current);
      setIsLoading(false);
    }

    onVFCheckboxChange();
  }, [isVoiceFocusChecked]);

  return (
    <ControlBarButton
      icon={
        <Microphone
          muted={muted}
          mutedTitle={mutedIconTitle}
          unmutedTitle={unmutedIconTitle}
        />
      }
      onClick={toggleMute}
      label={muted ? unmuteLabel : muteLabel}
      children={dropdownWithVFOptions}
    />
  );
};

export default AudioInputVFControl;
