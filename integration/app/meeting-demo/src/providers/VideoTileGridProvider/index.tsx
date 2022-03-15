// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {
  useActiveSpeakersState,
  useAudioVideo,
  useContentShareState,
  useLocalVideo,
  useMeetingManager,
  useRosterState,
} from 'amazon-chime-sdk-component-library-react';
import {
  AudioVideoObserver,
  VideoDownlinkObserver,
  VideoSource,
} from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Layout } from '../../types';
import { useAppState } from '../AppStateProvider';
import {
  Controls,
  initialState,
  reducer,
  State,
  VideoTileGridAction,
} from './state';

const VideoTileGridStateContext = createContext<State | undefined>(undefined);
const VideoTileGridControlContext = createContext<Controls | undefined>(undefined);

const VideoTileGridProvider: React.FC = ({ children }) => {
  const { priorityBasedPolicy } = useAppState();
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const activeSpeakers = useActiveSpeakersState();
  const { roster } = useRosterState();
  const { layout, setLayout } = useAppState();
  const { isVideoEnabled } = useLocalVideo();
  const { isLocalUserSharing, sharingAttendeeId } = useContentShareState();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: VideoTileGridAction.UpdateAttendeeStates,
      payload: { roster },
    });
  }, [roster]);

  useEffect(() => {
    dispatch({
      type: VideoTileGridAction.UpdateActiveSpeakers,
      payload: {
        activeSpeakers,
      },
    });
  }, [activeSpeakers]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const localAttendeeId =
      meetingManager.meetingSession?.configuration.credentials?.attendeeId ||
      null;

    const observer: AudioVideoObserver = {
      remoteVideoSourcesDidChange: (videoSources: VideoSource[]): void => {
        dispatch({
          type: VideoTileGridAction.UpdateVideoSources,
          payload: {
            videoSources,
            localAttendeeId,
          },
        });
      },
    };

    audioVideo.addObserver(observer);

    return (): void => audioVideo.removeObserver(observer);
  }, [audioVideo]);

  useEffect(() => {
    if (!audioVideo || !priorityBasedPolicy) {
      return;
    }

    const observer: VideoDownlinkObserver = {
      tileWillBePausedByDownlinkPolicy: (tileId: number): void => {
        const attendeeId = audioVideo.getVideoTile(tileId)?.state().boundAttendeeId;
        if (attendeeId) {
          dispatch({
            type: VideoTileGridAction.PauseVideoTile,
            payload: { attendeeId },
          });
        }
      },
      tileWillBeUnpausedByDownlinkPolicy: (tileId: number): void => {
        const attendeeId = audioVideo.getVideoTile(tileId)?.state().boundAttendeeId;
        if (attendeeId) {
          dispatch({
            type: VideoTileGridAction.UnpauseVideoTile,
            payload: { attendeeId },
          });
        }
      },
    };

    priorityBasedPolicy.addObserver(observer);
    dispatch( {
      type: VideoTileGridAction.SetPriorityBasedPolicy,
      payload: { policy: priorityBasedPolicy },
    });
    return (): void => priorityBasedPolicy.removeObserver(observer);
  }, [audioVideo]);

  useEffect(() => {
    const localAttendeeId =
      meetingManager.meetingSession?.configuration.credentials?.attendeeId ||
      null;

    dispatch({
      type: VideoTileGridAction.UpdateLocalSourceState,
      payload: {
        isVideoEnabled,
        localAttendeeId,
        isLocalUserSharing,
        sharingAttendeeId,
      },
    });
  }, [
    isLocalUserSharing,
    isVideoEnabled,
    meetingManager.meetingSession,
    sharingAttendeeId,
  ]);

  useEffect(() => {
    dispatch({
      type: VideoTileGridAction.UpdateLayout,
      payload: {
        layout,
      },
    });
  }, [layout]);

  useEffect(() => {
    if (sharingAttendeeId && layout === Layout.Gallery) {
      setLayout(Layout.Featured);
      dispatch({
        type: VideoTileGridAction.UpdateLayout,
        payload: {
          layout,
        },
      });
    }
  }, [sharingAttendeeId]);

  const zoomIn = (): void => dispatch({ type: VideoTileGridAction.ZoomIn });

  const zoomOut = (): void => dispatch({ type: VideoTileGridAction.ZoomOut });

  const controls: Controls = {
    zoomIn,
    zoomOut,
  };

  return (
    <VideoTileGridStateContext.Provider value={state}>
      <VideoTileGridControlContext.Provider value={controls}>
        {children}
      </VideoTileGridControlContext.Provider>
    </VideoTileGridStateContext.Provider>
  );
};

const useVideoTileGridState = (): State => {
  const state = useContext(VideoTileGridStateContext);

  if (!state) {
    throw new Error(
      'useVideoTileGridState must be used within a VideoTileGridProvider'
    );
  }

  return state;
};
const useVideoTileGridControl = (): Controls => {
  const context = useContext(VideoTileGridControlContext);

  if (!context) {
    throw new Error(
      'useVideoTileGridControl must be used within VideoTileGridProvider'
    );
  }
  return context;
};
export { VideoTileGridProvider, useVideoTileGridState, useVideoTileGridControl };
