// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultBrowserBehavior } from 'amazon-chime-sdk-js';
import React from 'react';

import useSelectAudioOutputDevice from '../../../hooks/sdk/useSelectAudioOutputDevice';
import { useAudioOutputs } from '../../../providers/DevicesProvider';
import { useLocalAudioOutput } from '../../../providers/LocalAudioOutputProvider';
import { DeviceType } from '../../../types';
import { isOptionActive } from '../../../utils/device-utils';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Sound } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for audio output speaker control, it defaults to `Speaker`. */
  label?: string;
}

const AudioOutputControl: React.FC<Props> = ({
  label = 'Speaker',
  ...rest
}) => {
  const selectAudioOutput = useSelectAudioOutputDevice();
  const { devices, selectedDevice } = useAudioOutputs();
  const { isAudioOn, toggleAudio } = useLocalAudioOutput();

  const handleClick = async (deviceId: string): Promise<void> => {
    try {
      if (new DefaultBrowserBehavior().supportsSetSinkId()) {
        await selectAudioOutput(deviceId);
      } else {
        console.error(
          'AudioOutputControl cannot select audio output device because browser does not support setSinkId operation.'
        );
      }
    } catch (error) {
      console.error('AudioOutputControl failed to select audio output device');
    }
  };

  const dropdownOptions: PopOverItemProps[] = devices.map(
    (device: DeviceType) => ({
      children: <span>{device.label}</span>,
      checked: isOptionActive(selectedDevice, device.deviceId),
      onClick: async () => await handleClick(device.deviceId),
    })
  );

  return (
    <>
      <ControlBarButton
        icon={<Sound disabled={!isAudioOn} />}
        onClick={toggleAudio}
        label={label}
        popOver={dropdownOptions.length ? dropdownOptions : null}
        {...rest}
      />
    </>
  );
};

export default AudioOutputControl;
