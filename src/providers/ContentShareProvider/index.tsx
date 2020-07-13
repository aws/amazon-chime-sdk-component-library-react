// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';

import { ContentShareControlProvider } from '../ContentShareControlProvider';
import { useMeetingManager } from '../MeetingProvider';
import { useAudioVideo } from '../AudioVideoProvider';

import { ContentShareState } from '../../types';

const initialState: ContentShareState = {
  activeContentTileId: null,
  isRemoteUserSharing: false,
  isLocalUserSharing: false,
  isSomeoneSharing: false,
  sharingAttendeeId: null
};

const ContentShareContext = createContext<ContentShareState>(initialState);

const ContentShareProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [contentShareState, setContentShareState] = useState(initialState);
  const { isLocalUserSharing, activeContentTileId } = contentShareState;

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
        const localAttendeeId =
          meetingManager?.configuration?.credentials?.attendeeId;
        const isLocalUser = baseAttendeeId === localAttendeeId;

        if (!isLocalUser && isLocalUserSharing) {
          audioVideo.stopContentShare();
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
    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
    };
  }, [audioVideo, activeContentTileId, isLocalUserSharing]);

  return (
    <ContentShareContext.Provider value={contentShareState}>
      <ContentShareControlProvider>{children}</ContentShareControlProvider>
    </ContentShareContext.Provider>
  );
};

const useContentShare = (): ContentShareState => {
  const contentShareContext = useContext(ContentShareContext);
  return contentShareContext;
};

export { ContentShareProvider, useContentShare };
