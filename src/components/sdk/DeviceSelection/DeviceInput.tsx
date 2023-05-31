// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioTransformDevice,
  Device,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { DeviceType } from '../../../types';
import { getDeviceId } from '../../../utils/device-utils';
import { FormField } from '../../ui/FormField';
import { Select } from '../../ui/Select';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  label: string;
  notFoundMsg: string;
  devices: DeviceType[];
  selectedDevice:
    | Device
    | AudioTransformDevice
    | VideoTransformDevice
    | null
    | undefined;
  onChange: (deviceId: string) => void;
}

const DeviceInput: React.FC<React.PropsWithChildren<Props>> = ({
  onChange,
  label,
  devices,
  selectedDevice,
  notFoundMsg,
  ...rest
}) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');

  useEffect(() => {
    const getSelectedDeviceId = async (): Promise<void> => {
      const selectedDeviceId = await getDeviceId(selectedDevice);
      setSelectedDeviceId(selectedDeviceId);
    };

    getSelectedDeviceId();
  }, [selectedDevice]);

  const deviceList = devices.map((device) => ({
    value: device.deviceId,
    label: device.label,
  }));

  const options = deviceList.length
    ? deviceList
    : [{ value: 'not-available', label: notFoundMsg }];

  const selectDevice = (e: ChangeEvent<HTMLSelectElement>): void => {
    const deviceId = e.target.value;

    if (deviceId === 'not-available') {
      return;
    }
    onChange(deviceId);
  };

  return (
    <FormField
      field={Select}
      options={options}
      onChange={selectDevice}
      value={selectedDeviceId}
      label={label}
      {...rest}
    />
  );
};

export default DeviceInput;
