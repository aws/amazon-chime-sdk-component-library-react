// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { isVideoTransformDevice, VideoInputDevice } from 'amazon-chime-sdk-js';
import isEqual from 'lodash.isequal';
import React, { ReactNode, useEffect, useState } from 'react';

import { useBackgroundBlur } from '../../../providers/BackgroundBlurProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useLogger } from '../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { DeviceType } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import useMemoCompare from '../../../utils/use-memo-compare';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Camera, Spinner } from '../../ui/icons';
import PopOverItem from '../../ui/PopOver/PopOverItem';
import PopOverSeparator from '../../ui/PopOver/PopOverSeparator';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
  /** The label that will be shown for the background blur button. */
  backgroundBlurLabel?: string;
}

const VideoInputBackgroundBlurControl: React.FC<
  React.PropsWithChildren<Props>
> = ({
  label = 'Video',
  backgroundBlurLabel = 'Enable Background Blur',
  ...rest
}) => {
  const logger = useLogger();
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useVideoInputs();
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } =
    useBackgroundBlur();
  const [isLoading, setIsLoading] = useState(false);
  const [
    dropdownWithVideoTransformOptions,
    setDropdownWithVideoTransformOptions,
  ] = useState<ReactNode[] | null>(null);

  const videoDevices: DeviceType[] = useMemoCompare(
    devices,
    (prev: DeviceType[], next: DeviceType[]): boolean => isEqual(prev, next)
  );

  const toggleBackgroundBlur = async (): Promise<void> => {
    if (isLoading || !selectedDevice) {
      return;
    }

    try {
      setIsLoading(true);
      let current: VideoInputDevice;

      if (!isVideoTransformDevice(selectedDevice)) {
        // Enable video transform on the non-transformed device
        current = await createBackgroundBlurDevice(selectedDevice);
        logger.info(
          `Video filter turned on - selecting video transform device: ${JSON.stringify(
            current
          )}`
        );
      } else {
        // switch back to the inner device
        current = await selectedDevice.intrinsicDevice();
        logger.info(
          `Video filter was turned off - selecting inner device: ${JSON.stringify(
            current
          )}`
        );
      }
      // If we're currently using a video transform device, and a non-video transform device is selected
      // then the video transform device will be stopped automatically
      await meetingManager.startVideoInputDevice(current);
    } catch (error) {
      logger.error('Failed to toggle Background Blur');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClick = async (deviceId: string): Promise<void> => {
      try {
        // If background blur is on, then re-use the same video transform pipeline, but replace the inner device
        // If background blur is not on, then do a normal video selection
        let newDevice: VideoInputDevice = deviceId;
        if (isVideoTransformDevice(selectedDevice) && !isLoading) {
          setIsLoading(true);
          if ('chooseNewInnerDevice' in selectedDevice) {
            // @ts-ignore
            newDevice = selectedDevice.chooseNewInnerDevice(deviceId);
          } else {
            logger.error('Transform device cannot choose new inner device');
          }
        }

        if (isVideoEnabled) {
          await meetingManager.startVideoInputDevice(newDevice);
        } else {
          meetingManager.selectVideoInputDevice(newDevice);
        }
      } catch (error) {
        logger.error('Failed to select video input device');
      } finally {
        setIsLoading(false);
      }
    };

    const getDropdownWithVideoTransformOptions = async (): Promise<void> => {
      const deviceOptions: ReactNode[] = await Promise.all(
        videoDevices.map(async (device) => (
          <PopOverItem
            key={device.deviceId}
            checked={await isOptionActive(selectedDevice, device.deviceId)}
            onClick={async (): Promise<void> => handleClick(device.deviceId)}
          >
            <span>{device.label}</span>
          </PopOverItem>
        ))
      );

      if (isBackgroundBlurSupported) {
        const videoTransformOptions: ReactNode = (
          <PopOverItem
            key="videoinput"
            checked={isVideoTransformDevice(selectedDevice)}
            disabled={isLoading}
            onClick={toggleBackgroundBlur}
          >
            <>
              {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
              {backgroundBlurLabel}
            </>
          </PopOverItem>
        );
        deviceOptions.push(<PopOverSeparator key="separator" />);
        deviceOptions.push(videoTransformOptions);
      }
      setDropdownWithVideoTransformOptions(deviceOptions);
    };

    getDropdownWithVideoTransformOptions();
  }, [
    createBackgroundBlurDevice,
    meetingManager,
    meetingManager.startVideoInputDevice,
    videoDevices,
    isLoading,
    isVideoEnabled,
    selectedDevice,
    isBackgroundBlurSupported,
  ]);

  return (
    <ControlBarButton
      icon={<Camera disabled={!isVideoEnabled} />}
      onClick={toggleVideo}
      label={label}
      {...rest}
    >
      {dropdownWithVideoTransformOptions}
    </ControlBarButton>
  );
};

export default VideoInputBackgroundBlurControl;
