import React, { createContext, useContext, useEffect, useState } from 'react';
import { DefaultModality, VideoTileState } from 'amazon-chime-sdk-js';
import { useMeetingManager } from '../../../../src';

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
  sharingAttendeeId: null
};

export const ContentShareContext = createContext<ContentShareState>(
  initialState
);

const ContentShareProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
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
          meetingManager?.audioVideo?.stopContentShare();
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

    const screenShareObserver = {
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
    meetingManager?.addObserver(videoObserver);
    meetingManager?.audioVideo?.addContentShareObserver(screenShareObserver);

    return () => {
      meetingManager?.removeObserver(videoObserver);
      meetingManager?.audioVideo?.removeContentShareObserver(
        screenShareObserver
      );
    };
  }, [activeContentTileId, isLocalUserSharing]);

  return (
    <ContentShareContext.Provider value={contentShareState}>
      {children}
    </ContentShareContext.Provider>
  );
};

export function useContentShareContext(): ContentShareState {
  const contentShareContext = useContext(ContentShareContext);
  if (!contentShareContext) {
    throw new Error(
      'useContentShareContext must be used within ContentShareProvider'
    );
  }
  return contentShareContext;
}

export default ContentShareProvider;
