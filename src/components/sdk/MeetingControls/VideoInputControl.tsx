// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { DeviceConfig } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Camera } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
  /** A boolean that determines whether or not to include additional sample video devices, such as "None", "Blue", "SMTP Color Bars". Defaults to true. This will be deprecated in the next major version. */
  appendSampleDevices?: boolean;
}

const VideoInputControl: React.FC<Props> = ({
  label = 'Video',
  appendSampleDevices = true,
  ...rest
}) => {
  const videoInputConfig: DeviceConfig = {
    additionalDevices: appendSampleDevices,
  };
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
      {...rest}
    />
  );
};

export default VideoInputControl;
