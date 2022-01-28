// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent } from 'react';

import { DeviceType, SelectedDeviceId } from '../../../types';
import { FormField } from '../../ui/FormField';
import { Select } from '../../ui/Select';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  label: string;
  notFoundMsg: string;
  devices: DeviceType[];
  selectedDeviceId: SelectedDeviceId;
  onChange: (deviceId: string) => void;
}

const DeviceInput: React.FC<Props> = ({
  onChange,
  label,
  devices,
  selectedDeviceId,
  notFoundMsg,
  ...rest
}) => {
  const outputOptions = devices.map((device) => ({
    value: device.deviceId,
    label: device.label,
  }));

  const options = outputOptions.length
    ? outputOptions
    : [
        {
          value: 'not-available',
          label: notFoundMsg,
        },
      ];

  async function selectDevice(e: ChangeEvent<HTMLSelectElement>) {
    const deviceId = e.target.value;

    if (deviceId === 'not-available') {
      return;
    }
    onChange(deviceId);
  }

  return (
    <FormField
      field={Select}
      options={options}
      onChange={selectDevice}
      value={selectedDeviceId || ''}
      label={label}
      {...rest}
    />
  );
};

export default DeviceInput;
