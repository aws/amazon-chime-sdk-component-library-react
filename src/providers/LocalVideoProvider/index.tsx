// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioVideoObserver, VideoTileState } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LocalVideoContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';

const Context = createContext<LocalVideoContextType | null>(null);

const LocalVideoProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isReachVideoLimit, setIsReachVideoLimit] = useState(false);
  const [tileId, setTileId] = useState<number | null>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioVideo.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }

    const observer: AudioVideoObserver = {
      videoAvailabilityDidChange: (availability) => {
        if (!availability.canStartLocalVideo) {
          setIsReachVideoLimit(true);
        } else {
          setIsReachVideoLimit(false);
        }
        console.log(
          'video availability changed: canStartLocalVideo ',
          availability.canStartLocalVideo
        );
      },
    };
    audioVideo.addObserver(observer);

    return () => {
      setIsVideoEnabled(false);
      audioVideo.removeObserver(observer);
    };
  }, [audioVideo]);

  useEffect(() => {
    if (isReachVideoLimit) {
      console.warn('Reach the number of maximum active videos');
    }
  }, [isReachVideoLimit]);

  const toggleVideo = useCallback(async (): Promise<void> => {
    if (isVideoEnabled || !meetingManager.selectedVideoInputTransformDevice) {
      audioVideo?.stopLocalVideoTile();
      setIsVideoEnabled(false);
    } else if (!isReachVideoLimit) {
      await audioVideo?.chooseVideoInputDevice(
        meetingManager.selectedVideoInputTransformDevice
      );
      audioVideo?.startLocalVideoTile();
      setIsVideoEnabled(true);
    } else {
      console.error('Video limit is reached and can not turn on more videos!');
    }
  }, [
    audioVideo,
    isVideoEnabled,
    isReachVideoLimit,
    meetingManager.selectedVideoInputTransformDevice,
  ]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer: AudioVideoObserver = {
      videoTileDidUpdate: (tileState: VideoTileState) => {
        if (
          !tileState.localTile ||
          !tileState.tileId ||
          tileId === tileState.tileId
        ) {
          return;
        }

        setTileId(tileState.tileId);
      },
    };
    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo, tileId]);

  const value = useMemo(
    () => ({ tileId, isVideoEnabled, setIsVideoEnabled, toggleVideo }),
    [tileId, isVideoEnabled, setIsVideoEnabled, toggleVideo]
  );

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
