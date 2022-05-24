// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent, useState } from 'react';

import { VIDEO_INPUT_QUALITY } from '../../../../constants';
import {
  useSelectVideoQuality,
  VideoQuality,
} from '../../../../hooks/sdk/useSelectVideoQuality';
import { FormField } from '../../../ui/FormField';
import { Select } from '../../../ui/Select';
import { BaseSdkProps } from '../../Base';

interface Props extends BaseSdkProps {
  /** Label shown for video quality selection, by default it is "Video quality" */
  label?: string;
  /** Label shown in the dropdown when no video quality has been selected yet, by default it is "Select video quality" */
  labelForUnselected?: string;
}

export const QualitySelection: React.FC<Props> = ({
  label = 'Video quality',
  labelForUnselected = 'Select video quality',
  ...rest
}) => {
  const selectVideoQuality = useSelectVideoQuality();
  const [videoQuality, setVideoQuality] = useState('unselected');
  const qualityOptions = [
    {
      label: labelForUnselected,
      value: 'unselected',
    },
    {
      label: VIDEO_INPUT_QUALITY['720p'],
      value: '720p',
    },
    {
      label: VIDEO_INPUT_QUALITY['540p'],
      value: '540p',
    },
    {
      label: VIDEO_INPUT_QUALITY['360p'],
      value: '360p',
    },
  ];

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
      {...rest}
    />
  );
};

export default QualitySelection;
