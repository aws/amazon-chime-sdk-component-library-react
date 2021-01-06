// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { VideoTileState } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../MeetingProvider';
import { useAudioVideo } from '../AudioVideoProvider';

import { videoInputSelectionToDevice } from '../../utils/device-utils';
import { LocalVideoContextType } from '../../types';

const Context = createContext<LocalVideoContextType | null>(null);

const LocalVideoProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [tileId, setTileId] = useState<number | null>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioVideo.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }

    return () => {
      setIsVideoEnabled(false);
    };
  }, [audioVideo]);

  const toggleVideo = useCallback(async (): Promise<void> => {
    if (isVideoEnabled || !meetingManager.selectedVideoInputDevice) {
      audioVideo?.stopLocalVideoTile();
      setIsVideoEnabled(false);
    } else {
      await audioVideo?.chooseVideoInputDevice(
        videoInputSelectionToDevice(meetingManager.selectedVideoInputDevice)
      );
      audioVideo?.startLocalVideoTile();
      setIsVideoEnabled(true);
    }
  }, [audioVideo, isVideoEnabled, meetingManager.selectedVideoInputDevice]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const videoTileDidUpdate = (tileState: VideoTileState) => {
      if (
        !tileState.localTile ||
        !tileState.tileId ||
        tileId === tileState.tileId
      ) {
        return;
      }

      setTileId(tileState.tileId);
    };

    audioVideo.addObserver({
      videoTileDidUpdate,
    });
  }, [audioVideo, tileId]);

  const value = useMemo(() => ({ isVideoEnabled, toggleVideo, tileId }), [
    isVideoEnabled,
    toggleVideo,
    tileId,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useLocalVideo = (): LocalVideoContextType => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useLocalVideo must be used within LocalVideoProvider');
  }

  return context;
};

export { LocalVideoProvider, useLocalVideo };
