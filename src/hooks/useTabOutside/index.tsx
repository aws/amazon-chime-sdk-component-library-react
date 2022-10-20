// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { RefObject, useEffect } from 'react';

export function useTabOutside(
  ref: RefObject<HTMLElement>,
  onTabOutside: (e: KeyboardEvent) => void
) {
  const isOutside = () => {
    return (
      !!ref.current &&
      !ref.current.contains(document.activeElement as HTMLElement)
    );
  };

  const keyUp = (e: KeyboardEvent) => {
    if (e.keyCode === 9 && isOutside()) {
      return onTabOutside(e);
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', keyUp);
    return () => {
      document.removeEventListener('keyup', keyUp);
    };
  }),
    [onTabOutside];
}

export default useTabOutside;
