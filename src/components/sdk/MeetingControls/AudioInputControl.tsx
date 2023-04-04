// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from 'react';

import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';
import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useLogger } from '../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { isOptionActive } from '../../../utils/device-utils';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Microphone } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown when microphone is muted , it defaults to `Mute`. */
  muteLabel?: string;
  /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
  unmuteLabel?: string;
  /** Title attribute for the icon when muted, it defaults to `Muted microphone`. */
  mutedIconTitle?: string;
  /** Title attribute for the icon when unmuted, it defaults to `Microphone`. */
  unmutedIconTitle?: string;
}

const AudioInputControl: React.FC<React.PropsWithChildren<Props>> = ({
  muteLabel = 'Mute',
  unmuteLabel = 'Unmute',
  mutedIconTitle,
  unmutedIconTitle,
  ...rest
}) => {
  const logger = useLogger();
  const meetingManager = useMeetingManager();
  const { muted, toggleMute } = useToggleLocalMute();
  const { devices, selectedDevice } = useAudioInputs();
  const [dropdownOptions, setDropdownOptions] = useState<PopOverItemProps[]>(
    []
  );

  useEffect(() => {
    const handleClick = async (deviceId: string): Promise<void> => {
      try {
        await meetingManager.startAudioInputDevice(deviceId);
      } catch (error) {
        logger.error('AudioInputControl failed to select audio input device');
      }
    };

    const getDropdownOptions = async (): Promise<void> => {
      const dropdownOptions = await Promise.all(
        devices.map(async (device) => ({
          children: <span>{device.label}</span>,
          checked: await isOptionActive(selectedDevice, device.deviceId),
          onClick: async () => await handleClick(device.deviceId),
        }))
      );
      setDropdownOptions(dropdownOptions);
    };

    getDropdownOptions();
  }, [
    devices,
    selectedDevice,
    meetingManager,
    meetingManager.startAudioInputDevice,
  ]);

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
      popOver={dropdownOptions}
      {...rest}
    />
  );
};

export default AudioInputControl;
