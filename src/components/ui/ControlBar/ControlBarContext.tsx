// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from 'react';

import { ControlBarProps } from '.';

export const ControlBarContext = createContext<ControlBarProps>({
  showLabels: false,
  layout: 'top',
});

export const useControlBarContext = () => {
  return useContext(ControlBarContext);
};

export default ControlBarContext;
