// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  onClose() {},
  labelID: '',
});

export const useModalContext = () => {
  return useContext(ModalContext);
}

export default ModalContext;
