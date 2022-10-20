// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef } from 'react';

import Button, { ButtonProps } from './';

export const SecondaryButton = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <Button variant="secondary" {...props} />
  )
);

export default SecondaryButton;
