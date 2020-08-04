// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';

import { FormField } from '../../../ui/FormField';
import { Select } from '../../../ui/Select';
import { useSelectVideoQuality, VideoQuality } from '../../../../hooks/sdk/useSelectVideoQuality';
import { VIDEO_INPUT_QUALITY } from '../../../../constants';

interface Props {
  /** Label shown for video quality selection, by default it is "Video quality" */
  label?: string;
}

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

export const QualitySelection: React.FC<Props> = ({ label = 'Video quality' }) => {
  const selectVideoQuality = useSelectVideoQuality();
  const [videoQuality, setVideoQuality] = useState('unselected');

  async function selectQuality(e: ChangeEvent<HTMLSelectElement>) {
    const quality = e.target.value as VideoQuality;
    setVideoQuality(quality);
    selectVideoQuality(quality);
  }

  return (
    <FormField
      field={Select}
      options={qualityOptions}
      onChange={selectQuality}
      value={videoQuality}
      label={label}
    />
  );
};

export default QualitySelection;
