// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';

import {
  reducer,
  initialState,
  ContentShareState,
  ContentActionType,
} from './state';
import { ContentShareControlContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';

const ContentShareContext = createContext<ContentShareState | null>(null);
const ContentShareControlContext = createContext<ContentShareControlContextType | null>(
  null
);

const ContentShareProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { paused, isLocalUserSharing, isLocalShareLoading } = state;
  const localUserTileIdRef = useRef<number | null>(null);

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

        if (
          !isLocalUser &&
          localUserTileIdRef.current &&
          localUserTileIdRef.current < tileState.tileId
        ) {
          audioVideo.stopContentShare();
          localUserTileIdRef.current = null;
        }

        if (isLocalUser) {
          localUserTileIdRef.current = tileState.tileId;
        }

        dispatch({
          type: ContentActionType.UPDATE,
          payload: {
            tileState,
            isLocalUser,
          },
        });
      },
      videoTileWasRemoved: (tileId: number) => {
        if (tileId === localUserTileIdRef.current) {
          localUserTileIdRef.current = null;
        }

        dispatch({
          type: ContentActionType.REMOVE,
          payload: tileId,
        });
      },
    };

    const contentShareObserver = {
      contentShareDidStop: () => {
        dispatch({ type: ContentActionType.DID_STOP });
      },
    };

    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
      dispatch({ type: ContentActionType.RESET });
    };
  }, [audioVideo]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const cb = (event: PromiseRejectionEvent) => {
      if (event.reason.name === 'NotAllowedError') {
        dispatch({ type: ContentActionType.DENIED });
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
    } else {
      audioVideo.startContentShareFromScreenCapture();
      dispatch({ type: ContentActionType.STARTING });
    }
  }, [audioVideo, isLocalUserSharing, isLocalShareLoading]);

  const togglePauseContentShare = useCallback((): void => {
    if (!audioVideo || !isLocalUserSharing) {
      return;
    }

    if (paused) {
      audioVideo.unpauseContentShare();
    } else {
      audioVideo.pauseContentShare();
    }

    dispatch({ type: ContentActionType.TOGGLE_PAUSE });
  }, [audioVideo, paused, isLocalUserSharing]);

  const controlsValue: ContentShareControlContextType = useMemo(
    () => ({
      paused,
      isLocalUserSharing,
      isLocalShareLoading,
      toggleContentShare,
      togglePauseContentShare,
    }),
    [
      paused,
      toggleContentShare,
      togglePauseContentShare,
      isLocalUserSharing,
      isLocalShareLoading,
    ]
  );

  return (
    <ContentShareContext.Provider value={state}>
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
