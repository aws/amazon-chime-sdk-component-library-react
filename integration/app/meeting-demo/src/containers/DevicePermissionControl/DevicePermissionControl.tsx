// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { ControlBarButton, Cog, useMeetingManager, Camera, Sound, Dots, DeviceLabels } from 'amazon-chime-sdk-component-library-react';
import React from 'react';
import DevicePermissionPrompt from '../DevicePermissionPrompt';

const DevicePermissionControl = (props: { deviceLabels: DeviceLabels }) => {
  const meetingManager = useMeetingManager();

  const handleClick = async () => {
    await meetingManager.invokeDeviceProvider(props.deviceLabels);
  };

  const label = props.deviceLabels === DeviceLabels.AudioAndVideo ? 'Device' :
    props.deviceLabels === DeviceLabels.Audio ? 'Audio' :
      props.deviceLabels === DeviceLabels.Video ? 'Video' :
        'None';

  const icon = props.deviceLabels === DeviceLabels.AudioAndVideo ? <Cog /> :
    props.deviceLabels === DeviceLabels.Audio ? <Sound /> :
      props.deviceLabels === DeviceLabels.Video ? <Camera /> :
        <Dots />;

  return (
    props.deviceLabels === DeviceLabels.None ? null :
      <>
        <ControlBarButton icon={icon} onClick={handleClick} label={label} />
        <DevicePermissionPrompt />
      </>
  );
};

export default DevicePermissionControl;
