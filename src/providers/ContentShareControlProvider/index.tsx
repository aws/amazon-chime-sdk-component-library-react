// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, createContext, useCallback, useContext } from 'react';

import { useAudioVideo } from '../AudioVideoProvider';
import { useContentShare } from '../ContentShareProvider';
import { ContentShareControlContextType } from '../../types';

const ContentShareControlContext = createContext<ContentShareControlContextType | null>(
  null
);

const ContentShareControlProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [isContentSharePaused, setIsContentSharePaused] = useState(false);
  const { isLocalUserSharing } = useContentShare();

  const toggleContentShare = useCallback(async (): Promise<void> => {
    if (!audioVideo) {
      return;
    }

    if (isLocalUserSharing) {
      audioVideo.stopContentShare();
    } else {
      await audioVideo.startContentShareFromScreenCapture();
    }
  }, [isLocalUserSharing, audioVideo]);

  const togglePauseContentShare = useCallback((): void => {
    if (!isLocalUserSharing) {
      return;
    }
    setIsContentSharePaused(!isContentSharePaused);
    if (isContentSharePaused) {
      audioVideo?.unpauseContentShare();
    } else {
      audioVideo?.pauseContentShare();
    }
  }, [isContentSharePaused, isLocalUserSharing, audioVideo]);

  const contextValue: ContentShareControlContextType = {
    isContentSharePaused,
    toggleContentShare,
    togglePauseContentShare
  };

  return (
    <ContentShareControlContext.Provider value={contextValue}>
      {children}
    </ContentShareControlContext.Provider>
  );
};

const useContentShareControls = (): ContentShareControlContextType => {
  const context = useContext(ContentShareControlContext);

  if (!context) {
    throw new Error(
      'useContentShareControlContext must be used within ContentShareControlProvider'
    );
  }
  return context;
};

export { ContentShareControlProvider, useContentShareControls };
