// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Device,
  isVideoTransformDevice,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import isEqual from 'lodash.isequal';
import React, { ReactNode, useEffect, useState } from 'react';

import { useBackgroundBlur } from '../../../providers/BackgroundBlurProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { DeviceType } from '../../../types';
import {
  isOptionActive,
  videoInputSelectionToDevice,
} from '../../../utils/device-utils';
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
    Device | VideoTransformDevice | null
  >(meetingManager.selectedVideoInputTransformDevice);

  const videoDevices: DeviceType[] = useMemoCompare(
    devices,
    (prev: DeviceType[], next: DeviceType[]): boolean => isEqual(prev, next)
  );

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setDevice);
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTranformDevice(setDevice);
    };
  }, []);

  async function toggleBackgroundBlur() {
    let current = activeVideoDevice;
    if (isLoading) {
      return;
    }
    setIsLoading(true);
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
    await meetingManager.selectVideoInputDevice(current);
    setIsLoading(false);
  }

  useEffect(() => {
    const deviceOptions: ReactNode[] = videoDevices.map((option) => (
      <PopOverItem
        key={option.deviceId}
        children={<span>{option.label}</span>}
        checked={isOptionActive(selectedDevice, option.deviceId)}
        onClick={async (): Promise<void> => {
          // If background blur is on, then re-use the same video transform pipeline, but replace the inner device
          // If background blur is not on, then do a normal video selection
          if (isVideoTransformDevice(activeVideoDevice) && !isLoading) {
            setIsLoading(true);
            const receivedDevice = videoInputSelectionToDevice(option.deviceId);
            if ('chooseNewInnerDevice' in activeVideoDevice) {
              const transformedDevice =
                // @ts-ignore
                activeVideoDevice.chooseNewInnerDevice(receivedDevice);
              await meetingManager.selectVideoInputDevice(transformedDevice);
            } else {
              meetingManager.logger?.error(
                'Transform device cannot choose new inner device'
              );
            }
            setIsLoading(false);
          } else {
            await meetingManager.selectVideoInputDevice(option.deviceId);
          }
        }}
      />
    ));
    if (isBackgroundBlurSupported) {
      const videoTransformOptions: ReactNode = (
        <PopOverItem
          key="videoinput"
          children={
            <>
              {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
              {backgroundBlurLabel}
            </>
          }
          checked={isVideoTransformDevice(activeVideoDevice)}
          disabled={isLoading}
          onClick={toggleBackgroundBlur}
        />
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
      children={dropdownWithVideoTransformOptions}
      {...rest}
    />
  );
};

export default VideoInputBackgroundBlurControl;
