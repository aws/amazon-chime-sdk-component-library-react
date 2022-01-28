// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Device,
  isVideoTransformDevice,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import React, { useEffect, useState } from 'react';

import { useBackgroundBlur } from '../../../../providers/BackgroundBlurProvider';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { Checkbox } from '../../../ui/Checkbox';
import { FormField } from '../../../ui/FormField';
import { BaseSdkProps } from '../../Base';

interface Props extends BaseSdkProps {
  /** Label shown for video filter selection, by default it is "Blur my background" */
  label?: string;
}

export const BackgroundBlurCheckbox: React.FC<Props> = ({
  label = 'Blur my background',
  ...rest
}) => {
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } =
    useBackgroundBlur();
  const [isLoading, setIsLoading] = useState(false);
  const meetingManager = useMeetingManager();
  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  const [device, setDevice] = useState<Device | VideoTransformDevice | null>(
    meetingManager.selectedVideoInputTransformDevice
  );

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setDevice);
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTranformDevice(setDevice);
    };
  }, []);

  const toggleBackgroundBlur = async () => {
    if (isLoading) {
      return;
    }
    if (!isVideoTransformDevice(device)) {
      setIsLoading(true);
      if (isBackgroundBlurSupported) {
        const transformedVideoDevice = await createBackgroundBlurDevice(device);
        await meetingManager.selectVideoInputDevice(transformedVideoDevice);
      } else {
        meetingManager.logger?.warn(
          'Background blur processor is not supported yet.'
        );
      }
    } else {
      if ('chooseNewInnerDevice' in device) {
        setIsLoading(true);
        // @ts-ignore
        const deviceId = await device.intrinsicDevice();
        await meetingManager.selectVideoInputDevice(deviceId);
      }
    }
    setIsLoading(false);
  };

  return (
    <FormField
      field={Checkbox}
      onChange={toggleBackgroundBlur}
      value={'Background Blur'}
      checked={isVideoTransformDevice(device)}
      label={label}
      {...rest}
    />
  );
};

export default BackgroundBlurCheckbox;
