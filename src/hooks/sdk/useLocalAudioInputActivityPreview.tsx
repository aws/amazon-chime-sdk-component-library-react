// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import useLocalAudioInputActivity from './useLocalAudioInputActivity';

type TransformScaleDirection = 'horizontal' | 'vertical';

export const useLocalAudioInputActivityPreview = (
  elementRef?: any,
  scaleDirection: TransformScaleDirection | null | undefined = 'horizontal'
) => {
  const cb = useCallback(
    (decimal: number) => {
      if (elementRef.current) {
        elementRef.current.style.transform =
          scaleDirection === 'horizontal'
            ? `scaleX(${decimal})`
            : `scaleY(${decimal})`;
      }
    },
    [scaleDirection]
  );

  useLocalAudioInputActivity(cb);
};

export default useLocalAudioInputActivityPreview;
