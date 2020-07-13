// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { Camera } from '../../ui/icons';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { DeviceConfig } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';

const VideoInputControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const videoInputConfig: DeviceConfig = {
    additionalDevices: true
  };
  const { devices, selectedDevice } = useVideoInputs(videoInputConfig);
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const dropdownOptions: PopOverItemProps[] = devices.map((device: any) => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: (): Promise<void> =>
      meetingManager.selectVideoInputDevice(device.deviceId)
  }));

  return (
    <ControlBarButton
      icon={<Camera disabled={!isVideoEnabled} />}
      onClick={toggleVideo}
      label="Video"
      popOver={dropdownOptions}
    />
  );
};

export default VideoInputControl;
