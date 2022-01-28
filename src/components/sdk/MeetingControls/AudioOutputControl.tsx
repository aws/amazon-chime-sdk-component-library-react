// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useAudioOutputs } from '../../../providers/DevicesProvider';
import { useLocalAudioOutput } from '../../../providers/LocalAudioOutputProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { DeviceType } from '../../../types';
import { isOptionActive, supportsSetSinkId } from '../../../utils/device-utils';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Sound } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for audio output speaker control, it defaults to `Speaker`. */
  label?: string;
}

const AudioOutputControl: React.FC<Props> = ({ label = 'Speaker', ...rest }) => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useAudioOutputs();
  const { isAudioOn, toggleAudio } = useLocalAudioOutput();
  const audioOutputOnClick = async (deviceId: string): Promise<void> => {
    if (supportsSetSinkId()) {
      await meetingManager.selectAudioOutputDevice(deviceId);
    }
  };

  const dropdownOptions: PopOverItemProps[] = devices.map(
    (device: DeviceType) => ({
      children: <span>{device.label}</span>,
      checked: isOptionActive(selectedDevice, device.deviceId),
      onClick: (): Promise<void> => audioOutputOnClick(device.deviceId),
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
