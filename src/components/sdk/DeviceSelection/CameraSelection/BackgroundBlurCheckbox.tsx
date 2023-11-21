// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { isVideoTransformDevice, VideoInputDevice } from 'amazon-chime-sdk-js';
import React, { useState } from 'react';

import { useBackgroundBlur } from '../../../../providers/BackgroundBlurProvider';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import { useLogger } from '../../../../providers/LoggerProvider';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { Checkbox } from '../../../ui/Checkbox';
import { FormField } from '../../../ui/FormField';
import { BaseSdkProps } from '../../Base';

interface Props extends BaseSdkProps {
  /** Label shown for video filter selection, by default it is "Blur my background" */
  label?: string;
}

export const BackgroundBlurCheckbox: React.FC<
  React.PropsWithChildren<Props>
> = ({ label = 'Blur my background', ...rest }) => {
  const logger = useLogger();
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } =
    useBackgroundBlur();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedDevice } = useVideoInputs();
  const meetingManager = useMeetingManager();

  const toggleBackgroundBlur = async (): Promise<void> => {
    if (isLoading || !selectedDevice) {
      return;
    }

    try {
      setIsLoading(true);
      let current: VideoInputDevice;

      if (!isVideoTransformDevice(selectedDevice)) {
        if (!isBackgroundBlurSupported) {
          logger.warn('Background blur processor is not supported yet.');
          return;
        }
        current = await createBackgroundBlurDevice(selectedDevice);
        logger.info(
          `Video filter turned on - selecting video transform device: ${JSON.stringify(
            current
          )}`
        );
      } else {
        current = await selectedDevice.intrinsicDevice();
        logger.info(
          `Video filter was turned off - selecting inner device: ${JSON.stringify(
            current
          )}`
        );
      }
      await meetingManager.startVideoInputDevice(current);
    } catch (error) {
      logger.error('Failed to toggle Background Blur');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormField
      field={Checkbox}
      onChange={toggleBackgroundBlur}
      value={'Background Blur'}
      checked={isVideoTransformDevice(selectedDevice)}
      label={label}
      {...rest}
    />
  );
};

export default BackgroundBlurCheckbox;
