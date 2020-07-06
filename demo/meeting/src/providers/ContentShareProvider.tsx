// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';
import { useMeetingManager, useAudioVideo } from '../../../../src';

type ContentShareState = {
  activeContentTileId: number | null;
  isRemoteUserSharing: boolean;
  isLocalUserSharing: boolean;
  isSomeoneSharing: boolean;
  sharingAttendeeId: string | null;
};

const initialState: ContentShareState = {
  activeContentTileId: null,
  isRemoteUserSharing: false,
  isLocalUserSharing: false,
  isSomeoneSharing: false,
  sharingAttendeeId: null,
};

export const ContentShareContext = createContext<ContentShareState>(
  initialState
);

const ContentShareProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [contentShareState, setContentShareState] = useState(initialState);
  const { isLocalUserSharing, activeContentTileId } = contentShareState;

  useEffect(() => {
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
        const localAttendeeId =
          meetingManager?.configuration?.credentials?.attendeeId;
        const isLocalUser = baseAttendeeId === localAttendeeId;

        if (!isLocalUser && isLocalUserSharing) {
          audioVideo?.stopContentShare();
        }

        if (isLocalUser) {
          setContentShareState((localState: ContentShareState) => ({
            ...localState,
            activeContentTileId: tileState.tileId,
            isLocalUserSharing: true,
            isSomeoneSharing: true,
            sharingAttendeeId: baseAttendeeId
          }));
        } else {
          setContentShareState((localState: ContentShareState) => ({
            ...localState,
            activeContentTileId: tileState.tileId,
            isRemoteUserSharing: true,
            isSomeoneSharing: true,
            sharingAttendeeId: baseAttendeeId
          }));
        }
      },
      videoTileWasRemoved: (tileId: number) => {
        if (tileId === activeContentTileId) {
          setContentShareState(initialState);
        }
      }
    };

    const contentShareObserver = {
      contentShareDidStart: () => {
        setContentShareState((localState: ContentShareState) => ({
          ...localState,
          isLocalUserSharing: true
        }));
      },
      contentShareDidStop: () => {
        setContentShareState((localState: ContentShareState) => ({
          ...localState,
          isLocalUserSharing: false
        }));
      }
    };
    audioVideo?.addObserver(videoObserver);
    audioVideo?.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo?.removeObserver(videoObserver);
      audioVideo?.removeContentShareObserver(contentShareObserver);
    };
  }, [activeContentTileId, isLocalUserSharing]);

  return (
    <ContentShareContext.Provider value={contentShareState}>
      {children}
    </ContentShareContext.Provider>
  );
};

export function useContentShare(): ContentShareState {
  const contentShareContext = useContext(ContentShareContext);
  return contentShareContext;
}

export default ContentShareProvider;
