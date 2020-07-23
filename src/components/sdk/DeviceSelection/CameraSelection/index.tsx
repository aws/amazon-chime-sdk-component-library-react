// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Heading } from '../../../ui/Heading';
import { Label } from '../../../ui/Label';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import PreviewVideo from '../../PreviewVideo';

import QualitySelection from './QualitySelection';
import DeviceInput from '../DeviceInput';

import { title } from '../Styled';

interface Props {
  notFoundMsg?: string;
}

const CameraSelection: React.FC<Props> = ({
  notFoundMsg = 'No camera devices found'
}) => {
  const meetingManager = useMeetingManager();
  const { devices } = useVideoInputs();

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Video
      </Heading>
      <DeviceInput
        label="Camera source"
        onChange={selectVideoInput}
        devices={devices}
        notFoundMsg={notFoundMsg}
      />
      <QualitySelection />
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Video preview
      </Label>
      <PreviewVideo />
    </div>
  );
};

export default CameraSelection;
