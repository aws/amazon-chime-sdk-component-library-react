// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';
import { useAudioInputs } from '../../../providers/DevicesProvider';
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

const AudioInputControl: React.FC<Props> = ({
  muteLabel = 'Mute',
  unmuteLabel = 'Unmute',
  mutedIconTitle,
  unmutedIconTitle,
  ...rest
}) => {
  const meetingManager = useMeetingManager();
  const { muted, toggleMute } = useToggleLocalMute();
  const { devices, selectedDevice } = useAudioInputs();

  const dropdownOptions: PopOverItemProps[] = devices.map((device) => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: (): Promise<void> =>
      meetingManager.selectAudioInputDevice(device.deviceId),
  }));

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
