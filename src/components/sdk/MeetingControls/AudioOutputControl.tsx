// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { Sound } from '../../ui/icons';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useAudioOutputs } from '../../../providers/DevicesProvider';
import { useLocalAudioOutput } from '../../../providers/LocalAudioOutputProvider';
import { isOptionActive, supportsSetSinkId } from '../../../utils/device-utils';
import { DeviceType } from '../../../types';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';

interface Props {
  /** The label that will be shown for audio output speaker control, it defaults to `Speaker`. */
  label?: string;
}

const AudioOutputControl: React.FC<Props> = ({ label = 'Speaker' }) => {
  const meetingManager = useMeetingManager();
  const { devices, selectedDevice } = useAudioOutputs();
  const { isAudioOn, toggleAudio } = useLocalAudioOutput();
  const audioOutputOnClick = async (deviceId: string): Promise<void> => {
    if (supportsSetSinkId()) {
      await meetingManager.selectAudioOutputDevice(deviceId);
    }
  }

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
      />
    </>
  );
};

export default AudioOutputControl;
