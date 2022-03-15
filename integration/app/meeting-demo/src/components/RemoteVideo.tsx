// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';

type Props = {
  enabled: boolean;
  attendeeName?: string;
  videoEleRef: (instance: HTMLVideoElement | null) => void;
};

const RemoteVideo: React.FC<Props> = ({ videoEleRef, enabled }) => (
  <video
    style={{
      display: enabled ? 'block' : 'none',
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    }}
    ref={videoEleRef}
  />
);

export default RemoteVideo;
