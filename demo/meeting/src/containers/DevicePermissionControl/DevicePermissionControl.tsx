// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ControlBarButton,
  Cog,
  useMeetingManager,
  Camera,
  Sound,
  Dots,
  DeviceLabels,
} from 'amazon-chime-sdk-component-library-react';
import React from 'react';
import DevicePermissionPrompt from '../DevicePermissionPrompt';

const DevicePermissionControl = (props: { deviceLabels: DeviceLabels }) => {
  const meetingManager = useMeetingManager();
  const { deviceLabels } = props;

  const handleClick = (): void => {
    meetingManager.invokeDeviceProvider(deviceLabels);
  };

  let label;
  if (deviceLabels === DeviceLabels.AudioAndVideo) {
    label = 'Device';
  } else if (deviceLabels === DeviceLabels.Audio) {
    label = 'Audio';
  } else if (deviceLabels === DeviceLabels.Video) {
    label = 'Video';
  } else {
    label = 'None';
  }

  let icon;
  if (deviceLabels === DeviceLabels.AudioAndVideo) {
    icon = <Cog />;
  } else if (deviceLabels === DeviceLabels.Audio) {
    icon = <Sound />;
  } else if (deviceLabels === DeviceLabels.Video) {
    icon = <Camera />;
  } else {
    icon = <Dots />;
  }

  return deviceLabels === DeviceLabels.None ? null : (
    <>
      <ControlBarButton icon={icon} onClick={handleClick} label={label} />
      <DevicePermissionPrompt />
    </>
  );
};

export default DevicePermissionControl;
