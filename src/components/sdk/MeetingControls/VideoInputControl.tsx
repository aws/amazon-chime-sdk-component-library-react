// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { Camera } from '../../ui/icons';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { DeviceConfig } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';

interface Props {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
}

const videoInputConfig: DeviceConfig = {
  additionalDevices: true,
};

const VideoInputControl: React.FC<Props> = ({ label = 'Video' }) => {
  const { devices, selectedDevice } = useVideoInputs(videoInputConfig);
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const selectDevice = useSelectVideoInputDevice();

  const dropdownOptions: PopOverItemProps[] = devices.map((device: any) => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: () => selectDevice(device.deviceId),
  }));

  return (
    <ControlBarButton
      icon={<Camera disabled={!isVideoEnabled} />}
      onClick={toggleVideo}
      label={label}
      popOver={dropdownOptions}
    />
  );
};

export default VideoInputControl;
