// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState } from 'react';

type UseToggleFunc = {
  isActive: boolean;
  toggle: () => void;
};

export default function useToggle(initialState: boolean): UseToggleFunc {
  const [isActive, setIsActive] = useState(initialState);

  function toggle(): void {
    setIsActive(!isActive);
  }

  return {
    isActive,
    toggle
  };
}
