// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  onClose() {},
  labelID: '',
  dismissible: true,
});

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalContext;
