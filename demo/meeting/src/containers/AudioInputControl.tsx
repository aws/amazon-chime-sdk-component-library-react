// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  ControlBarButton,
  Microphone,
} from 'amazon-chime-sdk-component-library-react';

import { useMeetingManager, useAudioInputs } from '../../../../src';
import useToggleLocalMute from '../hooks/useToggleLocalMute';
import { DeviceConfig } from '../types';
import { isOptionActive } from '../utils/DeviceUtils';

// TODO: import from library when types are exported
export interface PopOverItemProps {
  onClick?: () => void;
  checked?: boolean;
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  disabled?: boolean;
  href?: string;
  as?: any;
  text?: string;
  border?: boolean;
}

const AudioInputControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const { muted, toggleMute } = useToggleLocalMute();
  const audioInputConfig: DeviceConfig = {
    additionalDevices: true,
  };
  const { devices, selectedDevice } = useAudioInputs(audioInputConfig);

  const dropdownOptions: PopOverItemProps[] = devices.map(device => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: (): Promise<void> =>
      meetingManager.selectAudioInputDevice(device.deviceId),
  }));

  return (
    <ControlBarButton
      icon={<Microphone disabled={muted} />}
      onClick={toggleMute}
      label={muted ? 'Unmute' : 'Mute'}
      popOver={dropdownOptions}
    />
  );
};

export default AudioInputControl;
