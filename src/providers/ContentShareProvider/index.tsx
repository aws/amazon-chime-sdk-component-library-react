// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { ContentShareControlContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useLogger } from '../LoggerProvider';
import {
  ContentActionType,
  ContentShareState,
  initialState,
  reducer,
} from './state';

// Define the supported range for content shares
const MIN_SUPPORTED_CONTENT_SHARES = 1;
const MAX_SUPPORTED_CONTENT_SHARES = 2;

const ContentShareContext = createContext<ContentShareState | null>(null);
const ContentShareControlContext =
  createContext<ContentShareControlContextType | null>(null);

/**
 * Provider for content sharing functionality.
 * @param maxContentShares - Maximum number of concurrent content shares allowed. Default is 1.
 * Currently supported range is 1-2. Values outside this range will be clamped.
 * If set to 1, only one content share is allowed at a time, and newer shares will take precedence.
 */
export const ContentShareProvider: React.FC<
  React.PropsWithChildren<{
    maxContentShares?: number;
  }>
> = ({ children, maxContentShares = 1 }) => {
  const audioVideo = useAudioVideo();
  const logger = useLogger();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    paused,
    isLocalUserSharing,
    isLocalShareLoading,
    canStartContentShare,
  } = state;
  const localUserTileIdRef = useRef<number | null>(null);
  const localAttendeeId = (audioVideo as any)?.audioVideoController
    ?.realtimeController?.state?.localAttendeeId;

  const validatedMaxContentShares = useMemo(() => {
    return Math.max(
      MIN_SUPPORTED_CONTENT_SHARES,
      Math.min(maxContentShares, MAX_SUPPORTED_CONTENT_SHARES)
    );
  }, [maxContentShares]);

  useEffect(() => {
    if (maxContentShares > MAX_SUPPORTED_CONTENT_SHARES) {
      logger.warn(
        `ContentShareProvider: maxContentShares value ${maxContentShares} exceeds the currently` +
          ` supported maximum of ${MAX_SUPPORTED_CONTENT_SHARES}.` +
          `The value has been set to ${validatedMaxContentShares} instead.`
      );
    } else if (maxContentShares < MIN_SUPPORTED_CONTENT_SHARES) {
      logger.warn(
        `ContentShareProvider: maxContentShares value ${maxContentShares} is below the minimum` +
          ` of ${MIN_SUPPORTED_CONTENT_SHARES}. The value has been set to ${validatedMaxContentShares} instead.`
      );
    }
  }, [maxContentShares, validatedMaxContentShares]);

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
        const isLocalUser = baseAttendeeId === localAttendeeId;

        if (
          validatedMaxContentShares === 1 &&
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
        const isLocalUser = tileId === localUserTileIdRef.current;
        if (isLocalUser) {
          localUserTileIdRef.current = null;
        }

        dispatch({
          type: ContentActionType.REMOVE,
          payload: {
            isLocalUser,
            tileId,
          },
        });
      },
    };

    const contentShareObserver = {
      contentShareDidStop: () => {
        dispatch({
          type: ContentActionType.DID_STOP,
          payload: {
            localAttendeeId: (audioVideo as any)?.audioVideoController
              ?.realtimeController?.state?.localAttendeeId,
          },
        });
      },
    };

    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
      dispatch({ type: ContentActionType.RESET });
    };
  }, [audioVideo, localAttendeeId, validatedMaxContentShares]);

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
  }, [audioVideo, isLocalShareLoading]);

  const toggleContentShare = useCallback(
    async (source?: string | MediaStream): Promise<void> => {
      if (!audioVideo) {
        return;
      }

      if (isLocalUserSharing || isLocalShareLoading) {
        audioVideo.stopContentShare();
      } else {
        if (source && typeof source === 'string') {
          await audioVideo.startContentShareFromScreenCapture(source);
        } else if (source && source instanceof MediaStream) {
          await audioVideo.startContentShare(source);
        } else {
          await audioVideo.startContentShareFromScreenCapture();
        }
        dispatch({ type: ContentActionType.STARTING });
      }
    },
    [audioVideo, isLocalUserSharing, isLocalShareLoading]
  );

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

  useEffect(() => {
    dispatch({
      type: ContentActionType.UPDATE_CAN_START,
      payload: {
        maxContentShares: validatedMaxContentShares,
      },
    });
  }, [isLocalUserSharing, state.tiles.length, validatedMaxContentShares]);

  const controlsValue: ContentShareControlContextType = useMemo(
    () => ({
      paused,
      isLocalUserSharing,
      isLocalShareLoading,
      toggleContentShare,
      togglePauseContentShare,
      canStartContentShare,
    }),
    [
      paused,
      isLocalUserSharing,
      isLocalShareLoading,
      toggleContentShare,
      togglePauseContentShare,
      canStartContentShare,
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

export const useContentShareState = (): ContentShareState => {
  const contentShareState = useContext(ContentShareContext);

  if (!contentShareState) {
    throw new Error(
      'useContentShareState must be used within a ContentShareProvider'
    );
  }

  return contentShareState;
};

export const useContentShareControls = (): ContentShareControlContextType => {
  const context = useContext(ContentShareControlContext);

  if (!context) {
    throw new Error(
      'useContentShareControlContext must be used within ContentShareControlProvider'
    );
  }
  return context;
};
