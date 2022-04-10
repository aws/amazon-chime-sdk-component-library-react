// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Device,
  isVideoTransformDevice,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import isEqual from 'lodash.isequal';
import React, { ReactNode, useEffect, useState } from 'react';

import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';
import { useBackgroundBlur } from '../../../providers/BackgroundBlurProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
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

const VideoInputBackgroundBlurControl: React.FC<Props> = ({
  label = 'Video',
  backgroundBlurLabel = 'Enable Background Blur',
  ...rest
}) => {
  const meetingManager = useMeetingManager();
  const selectVideoinput = useSelectVideoInputDevice();
  const { devices, selectedDevice } = useVideoInputs();
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } =
    useBackgroundBlur();
  const [isLoading, setIsLoading] = useState(false);
  const [
    dropdownWithVideoTransformOptions,
    setDropdownWithVideoTransformOptions,
  ] = useState<ReactNode[] | null>(null);
  const [activeVideoDevice, setDevice] = useState<
    Device | VideoTransformDevice | undefined
  >(meetingManager.selectedVideoInputTransformDevice);

  const videoDevices: DeviceType[] = useMemoCompare(
    devices,
    (prev: DeviceType[], next: DeviceType[]): boolean => isEqual(prev, next)
  );

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setDevice);
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTransformDevice(
        setDevice
      );
    };
  }, []);

  const toggleBackgroundBlur = async (): Promise<void> => {
    let current = activeVideoDevice;
    if (isLoading || !current) {
      return;
    }
    setIsLoading(true);

    try {
      if (!isVideoTransformDevice(current)) {
        // Enable video transform on the non-transformed device
        current = await createBackgroundBlurDevice(current);
        meetingManager.logger?.info(
          'Video filter turned on - selecting video transform device: ' +
            JSON.stringify(current)
        );
      } else {
        // switch back to the inner device
        current = await current.intrinsicDevice();
        meetingManager.logger?.info(
          'Video filter was turned off - selecting inner device: ' +
            JSON.stringify(current)
        );
      }
      // If we're currently using a video transform device, and a non-video transform device is selected
      // then the video transform device will be stopped automatically
      await selectVideoinput(current);
    } catch (error) {
      console.error('Failed to toggle Background Blur');
    }

    setIsLoading(false);
  };

  const handleClick = async (deviceId: string): Promise<void> => {
    try {
      // If background blur is on, then re-use the same video transform pipeline, but replace the inner device
      // If background blur is not on, then do a normal video selection
      if (isVideoTransformDevice(activeVideoDevice) && !isLoading) {
        setIsLoading(true);
        if ('chooseNewInnerDevice' in activeVideoDevice) {
          const transformedDevice =
            // @ts-ignore
            activeVideoDevice.chooseNewInnerDevice(deviceId);
          await selectVideoinput(transformedDevice);
        } else {
          meetingManager.logger?.error(
            'Transform device cannot choose new inner device'
          );
        }
        setIsLoading(false);
      } else {
        await selectVideoinput(deviceId);
      }
    } catch (error) {
      console.error('Failed to select video input device');
    }
  };

  useEffect(() => {
    const deviceOptions: ReactNode[] = videoDevices.map((device) => (
      <PopOverItem
        key={device.deviceId}
        checked={isOptionActive(selectedDevice, device.deviceId)}
        onClick={async (): Promise<void> => handleClick(device.deviceId)}
      >
        <span>{device.label}</span>
      </PopOverItem>
    ));
    if (isBackgroundBlurSupported) {
      const videoTransformOptions: ReactNode = (
        <PopOverItem
          key="videoinput"
          checked={isVideoTransformDevice(activeVideoDevice)}
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
  }, [
    createBackgroundBlurDevice,
    activeVideoDevice,
    videoDevices,
    isLoading,
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
