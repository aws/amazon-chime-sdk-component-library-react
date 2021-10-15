// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useRef } from 'react';

function useMemoCompare<T>(
  next: any,
  compare: (prev: T | undefined, next: T | undefined) => boolean
) {
  const previousRef = useRef();
  const previous = previousRef.current;
  const isEqual = compare(previous, next);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });
  return isEqual ? previous : next;
}

export default useMemoCompare;
