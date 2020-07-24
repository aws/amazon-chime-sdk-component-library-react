// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect, ChangeEvent } from 'react';

import { FormField } from '../../ui/FormField';
import { Select } from '../../ui/Select';
import { DeviceType } from '../../../types';

interface Props {
  label: string;
  notFoundMsg: string;
  devices: DeviceType[];
  onChange: (deviceId: string) => void;
}

const DeviceInput: React.FC<Props> = ({
  onChange,
  label,
  devices,
  notFoundMsg
}) => {
  const [selectedDevice, setSelectedDevice] = useState('');

  const outputOptions = devices.map(device => ({
    value: device.deviceId,
    label: device.label
  }));

  const options = outputOptions.length
    ? outputOptions
    : [
        {
          value: 'not-available',
          label: notFoundMsg
        }
      ];

  useEffect(() => {
    if (!devices.length || selectedDevice) {
      return;
    }

    setSelectedDevice(devices[0].deviceId);
  }, [devices, selectedDevice]);

  async function selectDevice(e: ChangeEvent<HTMLSelectElement>) {
    const deviceId = e.target.value;

    if (deviceId === 'not-available') {
      return;
    }

    setSelectedDevice(deviceId);
    onChange(deviceId);
  }

  return (
    <FormField
      field={Select}
      options={options}
      onChange={selectDevice}
      value={selectedDevice}
      label={label}
    />
  );
};

export default DeviceInput;
