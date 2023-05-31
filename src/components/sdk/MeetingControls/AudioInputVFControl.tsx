// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioVideoFacade,
  VoiceFocusTransformDevice,
} from 'amazon-chime-sdk-js';
import isEqual from 'lodash.isequal';
import React, { ReactNode, useEffect, useState } from 'react';

import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useLogger } from '../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useVoiceFocus } from '../../../providers/VoiceFocusProvider';
import { DeviceType } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import useMemoCompare from '../../../utils/use-memo-compare';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Microphone } from '../../ui/icons';
import { Spinner } from '../../ui/icons';
import { PopOverItem } from '../../ui/PopOver/PopOverItem';
import PopOverSeparator from '../../ui/PopOver/PopOverSeparator';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown when microphone is muted, it defaults to `Mute`. */
  muteLabel?: string;
  /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
  unmuteLabel?: string;
  /** Title attribute for the icon when muted, it defaults to `Muted microphone` in <Microphone />. */
  mutedIconTitle?: string;
  /** Title attribute for the icon when unmuted, it defaults to `Microphone` in <Microphone />. */
  unmutedIconTitle?: string;
  /** The label that will be shown when the current input audio is an Amazon Voice Focus device,
   *  it defaults to `Amazon Voice Focus enabled`. */
  voiceFocusOnLabel?: string;
  /** The label that will be shown when the current input audio is not an Amazon Voice Focus device,
   *  it defaults to `Enable Amazon Voice Focus`. */
  voiceFocusOffLabel?: string;
}

export const AudioInputVFControl: React.FC<React.PropsWithChildren<Props>> = ({
  muteLabel = 'Mute',
  unmuteLabel = 'Unmute',
  mutedIconTitle,
  unmutedIconTitle,
  voiceFocusOnLabel = 'Amazon Voice Focus enabled',
  voiceFocusOffLabel = 'Enable Amazon Voice Focus',
  ...rest
}) => {
  const logger = useLogger();
  const audioVideo = useAudioVideo();
  const meetingManager = useMeetingManager();
  const [isLoading, setIsLoading] = useState(false);
  // When the user click on Amazon Voice Focus option, the state will change.
  const [isVoiceFocusChecked, setIsVoiceFocusChecked] = useState(false);
  // Only when the current input audio device is an Amazon Voice Focus device,
  // the state will be true. Otherwise, it will be false.
  const [isVoiceFocusEnabled, setIsVoiceFocusEnabled] = useState(false);
  const [dropdownWithVFOptions, setDropdownWithVFOptions] = useState<
    ReactNode[] | null
  >(null);
  const { muted, toggleMute } = useToggleLocalMute();
  const { isVoiceFocusSupported, addVoiceFocus } = useVoiceFocus();
  const { devices, selectedDevice } = useAudioInputs();

  const audioInputDevices: DeviceType[] = useMemoCompare(
    devices,
    (prev: DeviceType[], next: DeviceType[]): boolean => {
      return isEqual(prev, next);
    }
  );

  useEffect(() => {
    logger.info(
      `Amazon Voice Focus is ${isVoiceFocusEnabled ? 'enabled' : 'disabled'}.`
    );
  }, [isVoiceFocusEnabled]);

  useEffect(() => {
    // Only when the current input audio device is an Amazon Voice Focus transform device,
    // Amazon Voice Focus button will be checked.
    if (selectedDevice instanceof VoiceFocusTransformDevice) {
      setIsVoiceFocusEnabled(true);
    } else {
      setIsVoiceFocusEnabled(false);
    }
    return () => {
      if (selectedDevice instanceof VoiceFocusTransformDevice) {
        selectedDevice.stop();
      }
    };
  }, [selectedDevice]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }
    if (
      selectedDevice instanceof VoiceFocusTransformDevice &&
      isVoiceFocusEnabled
    ) {
      selectedDevice.observeMeetingAudio(audioVideo as AudioVideoFacade);
    }
  }, [audioVideo, isVoiceFocusEnabled, selectedDevice]);

  useEffect(() => {
    const handleClick = async (deviceId: string): Promise<void> => {
      try {
        if (isVoiceFocusChecked && !isLoading) {
          setIsLoading(true);
          const receivedDevice = deviceId;
          const currentDevice = await addVoiceFocus(receivedDevice);
          await meetingManager.startAudioInputDevice(currentDevice);
        } else {
          await meetingManager.startAudioInputDevice(deviceId);
        }
      } catch (error) {
        logger.error('AudioInputVFControl failed to select audio input device');
      } finally {
        setIsLoading(false);
      }
    };

    const getDropdownWithVFOptions = async (): Promise<void> => {
      const dropdownOptions: ReactNode[] = await Promise.all(
        audioInputDevices.map(async (device) => (
          <PopOverItem
            key={device.deviceId}
            checked={await isOptionActive(selectedDevice, device.deviceId)}
            onClick={async () => await handleClick(device.deviceId)}
          >
            <span>{device.label}</span>
          </PopOverItem>
        ))
      );

      if (isVoiceFocusSupported) {
        const vfOption: ReactNode = (
          <PopOverItem
            key="voicefocus"
            checked={isVoiceFocusEnabled}
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              setIsVoiceFocusChecked((current) => !current);
            }}
          >
            <>
              {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
              {isVoiceFocusEnabled ? voiceFocusOnLabel : voiceFocusOffLabel}
            </>
          </PopOverItem>
        );
        dropdownOptions?.push(<PopOverSeparator key="separator" />);
        dropdownOptions?.push(vfOption);
      }

      setDropdownWithVFOptions(dropdownOptions);
    };

    getDropdownWithVFOptions();
  }, [
    // The contents of this dropdown depends, of course, on the current selected device,
    // but also on the Voice Focus state, including `addVoiceFocus` which is used inside
    // the click handler.
    addVoiceFocus,
    meetingManager,
    meetingManager.startAudioInputDevice,
    audioInputDevices,
    isLoading,
    isVoiceFocusEnabled,
    isVoiceFocusChecked,
    isVoiceFocusSupported,
    selectedDevice,
  ]);

  useEffect(() => {
    const onVFCheckboxChange = async (): Promise<void> => {
      if (!selectedDevice) {
        return;
      }

      try {
        let current = selectedDevice;
        if (isVoiceFocusChecked) {
          logger.info('User turned on Amazon Voice Focus.');
          if (typeof selectedDevice === 'string') {
            current = await addVoiceFocus(selectedDevice);
          }
        } else {
          logger.info(
            'Amazon Voice Focus is off by default or user turned off Amazon Voice Focus.'
          );
          if (selectedDevice instanceof VoiceFocusTransformDevice) {
            current = selectedDevice.getInnerDevice();
          }
        }
        await meetingManager.startAudioInputDevice(current);
      } catch (error) {
        logger.error(
          'AudioInputVFControl failed to select audio input device onVFCheckboxChange change'
        );
      }
      setIsLoading(false);
    };

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
      {...rest}
    >
      {dropdownWithVFOptions}
    </ControlBarButton>
  );
};

export default AudioInputVFControl;
