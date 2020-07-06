// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  ControlBarButton,
  Sound,
  useMeetingManager,
  useAudioOutputs
} from 'amazon-chime-sdk-component-library-react';

import { isOptionActive } from '../utils/DeviceUtils';
import { useLocalAudioOutput } from '../providers/LocalAudioOutputProvider';
import { FormattedDeviceType } from '../types';

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

const AudioOutputControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useAudioOutputs();
  const { isAudioOn, toggleAudio } = useLocalAudioOutput();

  const dropdownOptions: PopOverItemProps[] = devices.map(
    (device: FormattedDeviceType) => ({
      children: <span>{device.label}</span>,
      checked: isOptionActive(selectedDevice, device.deviceId),
      onClick: (): Promise<void> =>
        meetingManager.selectAudioOutputDevice(device.deviceId)
    })
  );

  return (
    <>
      <ControlBarButton
        icon={<Sound disabled={!isAudioOn} />}
        onClick={toggleAudio}
        label={isAudioOn ? 'Disable audio' : 'Enable audio'}
        popOver={dropdownOptions}
      />
    </>
  );
};

export default AudioOutputControl;
