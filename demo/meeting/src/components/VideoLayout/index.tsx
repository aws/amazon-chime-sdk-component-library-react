// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  useContentShare,
  ContentShare,
  LocalVideo
} from 'amazon-chime-sdk-component-library-react';

import RemoteVideoGrid from '../../containers/RemoteVideoGrid';
import { StyledLayout } from './Styled';

const VideoLayout: React.FC = () => {
  const { isSomeoneSharing } = useContentShare();

  return (
    <StyledLayout contentActive={isSomeoneSharing}>
      <div className="videos">
        <RemoteVideoGrid />
      </div>
      {isSomeoneSharing && (
        <div className="content">
          <ContentShare />
        </div>
      )}
      <LocalVideo className="local-video" />
    </StyledLayout>
  );
};

export default VideoLayout;
