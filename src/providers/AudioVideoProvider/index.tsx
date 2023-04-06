// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioVideoFacade } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

type AudioVideoValue = AudioVideoFacade | null;

export const AudioVideoContext = createContext<AudioVideoValue>(null);

export const AudioVideoProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const meetingManager = useMeetingManager();
  const [audioVideo, setAudioVideo] = useState<AudioVideoValue>(null);

  useEffect(() => {
    function audioVideoUpdateCb(av: AudioVideoValue) {
      setAudioVideo(av);
    }

    meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);

    return () => meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb);
  }, []);

  return (
    <AudioVideoContext.Provider value={audioVideo}>
      {children}
    </AudioVideoContext.Provider>
  );
};

export const useAudioVideo = (): AudioVideoValue => {
  const audioVideo = useContext(AudioVideoContext);

  return audioVideo;
};
