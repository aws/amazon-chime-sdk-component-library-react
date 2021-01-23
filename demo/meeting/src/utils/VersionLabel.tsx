// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Versioning } from 'amazon-chime-sdk-component-library-react';
import { Versioning as SDKVersioning } from 'amazon-chime-sdk-js';

export const VersionLabel = () => {
  const versionTag = `${Versioning.sdkName}@${Versioning.sdkVersion}`;
  const sdkVersionTag = `${SDKVersioning.sdkName}@${SDKVersioning.sdkVersion}`;

  return (
    <span
      style={{
        position: 'absolute',
        bottom: 1,
        right: 1,
        color: '#989da5',
        fontSize: '0.70rem'
      }}
    >
      {versionTag} | {sdkVersionTag}
    </span>
  );
};
