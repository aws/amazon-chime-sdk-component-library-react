// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {
  Device,
  isVideoTransformDevice,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import React, { ReactNode, useEffect, useState } from 'react';
import isEqual from 'lodash.isequal';
import { 
  useBackgroundBlur,
  useBackgroundReplacement,
  useVideoInputs,
  useLocalVideo,
  useMeetingManager,
  ControlBarButton,
  Camera,
  Spinner,
  PopOverItem,
  PopOverSeparator,
} from 'amazon-chime-sdk-component-library-react';
import {
  isOptionActive,
  videoInputSelectionToDevice,
} from '../../utils/device-utils';
import { DeviceType } from '../../types';
import useMemoCompare from '../../utils/use-memo-compare';
import { VideoTransformOptions } from '../../types/index';

interface Props {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
  /** The label that will be shown for the background blur button, it defaults to 'Enable Background Blur'. */
  backgroundBlurLabel?: string;
  /** The label that will be shown for the background replacement button, it defaults to 'Enable Background Replacement'. */
  backgroundReplacementLabel?: string;
}

const VideoInputTransformControl: React.FC<Props> = ({
  label = 'Video',
  backgroundBlurLabel = 'Enable Background Blur',
  backgroundReplacementLabel = 'Enable Background Replacement',
}) => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useVideoInputs();
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } = useBackgroundBlur();
  const { isBackgroundReplacementSupported, createBackgroundReplacementDevice } = useBackgroundReplacement();
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownWithVideoTransformOptions, setDropdownWithVideoTransformOptions] = useState<ReactNode[] | null>(null);
  const [activeVideoDevice, setActiveVideoDevice] = useState<Device | VideoTransformDevice | null>(meetingManager.selectedVideoInputTransformDevice as Device);
  const [activeVideoTransformOption, setActiveVideoTransformOption] = useState<string>(VideoTransformOptions.None);

  const videoDevices: DeviceType[] = useMemoCompare(devices, (prev: DeviceType[] | undefined, next: DeviceType[] | undefined): boolean => isEqual(prev, next));

  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setActiveVideoDevice);
    resetDeviceToIntrinsic();
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTranformDevice(setActiveVideoDevice);
    };
  }, []);

  // Reset the video input to intrinsic if current video input is a transform device because this component does not know if blur or replacement was selected.
  // This depends on how the demo is set up.
  // TODO: use a hook in the appState to track whether blur or replacement was selected before this component mounts.
  async function resetDeviceToIntrinsic() {
    if (isVideoTransformDevice(activeVideoDevice)) {
      const intrinsicDevice = await activeVideoDevice.intrinsicDevice();
      await meetingManager.selectVideoInputDevice(intrinsicDevice);
    }
  }

  // Toggle background blur on/off.
  async function toggleBackgroundBlur() {
    let current = activeVideoDevice;
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      if (!isVideoTransformDevice(current)) {
        // Enable video transform on the default device.
        current = await createBackgroundBlurDevice(current) as VideoTransformDevice;
        meetingManager.logger?.info('Video filter turned on - selecting video transform device: ' + JSON.stringify(current));
      } else {
        // Switch back to intrinsicDevice.
        const intrinsicDevice = await current.intrinsicDevice();
        // Stop existing VideoTransformDevice.
        await current.stop();
        current = intrinsicDevice;
        // Switch to background blur device if old selection was background replacement otherwise switch to default intrinsic device.
        if (activeVideoTransformOption === VideoTransformOptions.Replacement) {
          current = await createBackgroundBlurDevice(current) as VideoTransformDevice;
          meetingManager.logger?.info('Video filter was turned on - video transform device: ' + JSON.stringify(current));
        } else {
          meetingManager.logger?.info('Video filter was turned off - selecting inner device: ' + JSON.stringify(current));
        }
      }
      // Use the new created video device as input.
      await meetingManager.selectVideoInputDevice(current);
      // Update the current selected transform.
      setActiveVideoTransformOption(activeVideoTransformOption => activeVideoTransformOption === VideoTransformOptions.Blur ? VideoTransformOptions.None : VideoTransformOptions.Blur);
    } catch (e) {
      console.error('Error trying to toggle background blur', e);
    } finally {
      setIsLoading(false);
    }
  }

  async function toggleBackgroundReplacement() {
    let current = activeVideoDevice;
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      if (!isVideoTransformDevice(current)) {
        // Enable video transform on the non-transformed device.
        current = await createBackgroundReplacementDevice(current) as VideoTransformDevice;
        meetingManager.logger?.info('Video filter turned on - selecting video transform device: ' + JSON.stringify(current));
      } else {
        // Switch back to intrinsicDevic.
        const intrinsicDevice = await current.intrinsicDevice();
        // Stop existing VideoTransformDevice.
        await current.stop();
        current = intrinsicDevice;
        // Switch to background replacement device if old selection was background blur otherwise switch to default intrinsic device.
        if (activeVideoTransformOption === VideoTransformOptions.Blur) {
          current = await createBackgroundReplacementDevice(current) as VideoTransformDevice;
          meetingManager.logger?.info('Video filter turned on - selecting video transform device: ' + JSON.stringify(current));
        } else {
          meetingManager.logger?.info('Video filter was turned off - selecting inner device: ' + JSON.stringify(current));
        }
      }
      // Use the new created video device as input.
      await meetingManager.selectVideoInputDevice(current);
      // Update the current selected transform.
      setActiveVideoTransformOption(activeVideoTransformOption => activeVideoTransformOption === VideoTransformOptions.Replacement ? VideoTransformOptions.None : VideoTransformOptions.Replacement);
    } catch (e) {
      console.error('Error trying to toggle background replacement', e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const deviceOptions: ReactNode[] = videoDevices.map((option) => (
      <PopOverItem
        key={option.deviceId}
        // @ts-ignore
        checked={isOptionActive(selectedDevice, option.deviceId)}
        onClick={async (): Promise<void> => {
          // If background blur/replacement is on, then re-use the same video transform pipeline, but replace the inner device
          // If background blur/replacement is not on, then do a normal video selection
          if (isVideoTransformDevice(activeVideoDevice) && !isLoading) {
            setIsLoading(true);
            const receivedDevice = videoInputSelectionToDevice(option.deviceId);
            if ('chooseNewInnerDevice' in activeVideoDevice) {
              // @ts-ignore
              const transformedDevice = activeVideoDevice.chooseNewInnerDevice(receivedDevice);
              await meetingManager.selectVideoInputDevice(transformedDevice);
            } else {
              meetingManager.logger?.error('Transform device cannot choose new inner device');
            }
            setIsLoading(false);
          } else {
            await meetingManager.selectVideoInputDevice(option.deviceId);
          }
        }}
      >
        <><span>{option.label}</span></>
      </PopOverItem>

    ));
    // Add 'Enable Background Blur' to the selection dropwdown as an option if it's offered/supported.
    if (isBackgroundBlurSupported) {
      const videoTransformOptions: ReactNode = (
        <PopOverItem
          key="backgroundBlurFilter"
          checked={activeVideoTransformOption === VideoTransformOptions.Blur}
          disabled={isLoading}
          onClick={toggleBackgroundBlur}
        >
          <>
            {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
            {backgroundBlurLabel}
          </>
        </PopOverItem>
      );
      deviceOptions.push(<PopOverSeparator key="separator1" />);
      deviceOptions.push(videoTransformOptions);
    }
    // Add 'Enable Background Replacement' to the selection dropwdown as an option if it's offered/supported.
    if (isBackgroundReplacementSupported) {
      const videoTransformOptions: ReactNode = (
        <PopOverItem
          key="backgroundReplacementFilter"
          checked={activeVideoTransformOption === VideoTransformOptions.Replacement}
          disabled={isLoading}
          onClick={toggleBackgroundReplacement}
        >
          <>
            {isLoading && <Spinner width="1.5rem" height="1.5rem" />}
            {backgroundReplacementLabel}
          </>
        </PopOverItem>
      );
      deviceOptions.push(<PopOverSeparator key="separator2" />);
      deviceOptions.push(videoTransformOptions);
    }

    setDropdownWithVideoTransformOptions(deviceOptions);
  }, [
    createBackgroundBlurDevice,
    createBackgroundReplacementDevice,
    activeVideoDevice,
    videoDevices,
    isLoading,
    selectedDevice,
    isBackgroundBlurSupported,
    isBackgroundReplacementSupported,
  ]);

  return (
    <ControlBarButton
      icon={<Camera disabled={!isVideoEnabled} />}
      onClick={toggleVideo}
      label={label}
    >
      {dropdownWithVideoTransformOptions}
    </ControlBarButton>
  );
};

export default VideoInputTransformControl;
