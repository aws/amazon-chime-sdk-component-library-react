// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioVideoObserver } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { useAudioVideo } from '../AudioVideoProvider';
import { initialState, reducer, State, VideoTileActionType } from './state';

const Context = createContext<State | null>(null);

const RemoteVideoTileProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer: AudioVideoObserver = {
      videoTileDidUpdate: (tileState): void => {
        if (
          tileState?.boundAttendeeId &&
          tileState?.tileId &&
          !tileState.isContent &&
          !tileState.localTile
        ) {
          const { tileId, boundAttendeeId } = tileState;
          dispatch({
            type: VideoTileActionType.UPDATE,
            payload: {
              tileId,
              attendeeId: boundAttendeeId,
            },
          });
        }
      },
      videoTileWasRemoved: (tileId): void => {
        dispatch({
          type: VideoTileActionType.REMOVE,
          payload: {
            tileId,
          },
        });
      },
    };

    audioVideo.addObserver(observer);
    return () => audioVideo.removeObserver(observer);
  }, [audioVideo]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    return () => dispatch({ type: VideoTileActionType.RESET });
  }, [audioVideo]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useRemoteVideoTileState = (): State => {
  const state = useContext(Context);

  if (!state) {
    throw new Error(
      'useRemoteVideoTileState must be used within a RemoteVideoTileProvider'
    );
  }

  return state;
};

export { RemoteVideoTileProvider, useRemoteVideoTileState };
