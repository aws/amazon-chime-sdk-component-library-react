// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from 'react';

import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useLogger } from '../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { isOptionActive } from '../../../utils/device-utils';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Camera } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
}

const VideoInputControl: React.FC<React.PropsWithChildren<Props>> = ({ label = 'Video', ...rest }) => {
  const logger = useLogger();
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useVideoInputs();
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const [dropdownOptions, setDropdownOptions] = useState<PopOverItemProps[]>(
    []
  );

  useEffect(() => {
    const handleClick = async (deviceId: string): Promise<void> => {
      try {
        if (isVideoEnabled) {
          await meetingManager.startVideoInputDevice(deviceId);
        } else {
          meetingManager.selectVideoInputDevice(deviceId);
        }
      } catch (error) {
        logger.error('VideoInputControl failed to select video input device');
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
    isVideoEnabled,
    meetingManager,
    meetingManager.startVideoInputDevice,
  ]);

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
