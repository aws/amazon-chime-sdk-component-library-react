// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';
import { FormField, Select } from 'amazon-chime-sdk-component-library-react';
import { useSelectVideoQuality, VideoQuality } from '../../../../../../src';

import { VIDEO_INPUT_QUALITY } from '../../../constants';

import { StyledInputGroup } from '../Styled';

const qualityOptions = [
  {
    label: 'Select video quality',
    value: 'unselected'
  },
  {
    label: VIDEO_INPUT_QUALITY['720p'],
    value: '720p'
  },
  {
    label: VIDEO_INPUT_QUALITY['540p'],
    value: '540p'
  },
  {
    label: VIDEO_INPUT_QUALITY['360p'],
    value: '360p'
  }
];

const QualitySelection = () => {
  const selectVideoQuality = useSelectVideoQuality();
  const [videoQuality, setVideoQuality] = useState('unselected');

  async function selectQuality(e: ChangeEvent<HTMLSelectElement>) {
    const quality = e.target.value as VideoQuality;
    setVideoQuality(quality);
    selectVideoQuality(quality);
  }

  return (
    <StyledInputGroup>
      <FormField
        field={Select}
        options={qualityOptions}
        onChange={selectQuality}
        value={videoQuality}
        label="Video quality"
      />
    </StyledInputGroup>
  );
};

export default QualitySelection;
