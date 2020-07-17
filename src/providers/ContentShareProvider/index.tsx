// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';

import { ContentShareControlContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';

import { ContentShareState } from '../../types';

const initialState: ContentShareState = {
  activeContentTileId: null,
  isRemoteUserSharing: false,
  isLocalUserSharing: false,
  isLocalShareLoading: false,
  isSomeoneSharing: false,
  sharingAttendeeId: null
};

const ContentShareContext = createContext<ContentShareState | null>(null);
const ContentShareControlContext = createContext<ContentShareControlContextType | null>(
  null
);

const ContentShareProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [isContentSharePaused, setIsContentSharePaused] = useState(false);
  const [contentShareState, setContentShareState] = useState<ContentShareState>(
    initialState
  );
  const {
    isLocalUserSharing,
    activeContentTileId,
    isLocalShareLoading
  } = contentShareState;

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const videoObserver = {
      videoTileDidUpdate: (tileState: VideoTileState) => {
        if (
          !tileState.boundAttendeeId ||
          !tileState.isContent ||
          !tileState.tileId
        ) {
          return;
        }

        const { boundAttendeeId } = tileState;
        const baseAttendeeId = new DefaultModality(boundAttendeeId).base();
        const localAttendeeId = (audioVideo as any).audioVideoController
          .realtimeController.state.localAttendeeId;
        const isLocalUser = baseAttendeeId === localAttendeeId;

        if (!isLocalUser && isLocalUserSharing) {
          audioVideo.stopContentShare();
        }

        setContentShareState(localState => ({
          ...localState,
          isLocalShareLoading: false,
          isLocalUserSharing: isLocalUser,
          activeContentTileId: tileState.tileId,
          isRemoteUserSharing: !isLocalUser,
          isSomeoneSharing: true,
          sharingAttendeeId: baseAttendeeId
        }));
      },
      videoTileWasRemoved: (tileId: number) => {
        if (tileId === activeContentTileId) {
          setContentShareState(initialState);
        }
      }
    };

    const contentShareObserver = {
      contentShareDidStart: () => {
        setContentShareState(localState => ({
          ...localState,
          isLocalUserSharing: true
        }));
      },
      contentShareDidStop: () => {
        setContentShareState(localState => ({
          ...localState,
          isLocalShareLoading: false,
          isLocalUserSharing: false
        }));
      }
    };
    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
    };
  }, [audioVideo, activeContentTileId, isLocalUserSharing]);

  useEffect(() => {
    if (!isLocalShareLoading) {
      return;
    }

    const cb = (event: PromiseRejectionEvent) => {
      if (event.reason.name === 'NotAllowedError') {
        setContentShareState(localState => ({
          ...localState,
          isLocalShareLoading: false
        }));
      }
    };

    window.addEventListener('unhandledrejection', cb);
    return () => window.removeEventListener('unhandledrejection', cb);
  }, [isLocalShareLoading]);

  const toggleContentShare = useCallback(async (): Promise<void> => {
    if (!audioVideo) {
      return;
    }

    if (isLocalUserSharing || isLocalShareLoading) {
      audioVideo.stopContentShare();
      setContentShareState(localState => ({
        ...localState,
        isLocalShareLoading: true,
        isLocalUserSharing: false
      }));
    } else {
      audioVideo.startContentShareFromScreenCapture();
      setContentShareState(localState => ({
        ...localState,
        isLocalShareLoading: true
      }));
    }
  }, [audioVideo, isLocalUserSharing, isLocalShareLoading]);

  const togglePauseContentShare = useCallback((): void => {
    if (!audioVideo || !isLocalUserSharing) {
      return;
    }

    if (isContentSharePaused) {
      audioVideo.unpauseContentShare();
    } else {
      audioVideo.pauseContentShare();
    }

    setIsContentSharePaused(currentState => !currentState);
  }, [audioVideo, isContentSharePaused, isLocalUserSharing]);

  const controlsValue: ContentShareControlContextType = useMemo(
    () => ({
      isContentSharePaused,
      isLocalUserSharing,
      isLocalShareLoading,
      toggleContentShare,
      togglePauseContentShare
    }),
    [
      isContentSharePaused,
      toggleContentShare,
      togglePauseContentShare,
      isLocalUserSharing,
      isLocalShareLoading
    ]
  );

  return (
    <ContentShareContext.Provider value={contentShareState}>
      <ContentShareControlContext.Provider value={controlsValue}>
        {children}
      </ContentShareControlContext.Provider>
    </ContentShareContext.Provider>
  );
};

const useContentShareState = (): ContentShareState => {
  const contentShareState = useContext(ContentShareContext);

  if (!contentShareState) {
    throw new Error(
      'useContentShareState must be used within a ContentShareProvider'
    );
  }

  return contentShareState;
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

export { ContentShareProvider, useContentShareState, useContentShareControls };
