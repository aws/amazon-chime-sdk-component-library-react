// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useState, useContext, useEffect } from 'react';
import { AudioVideoFacade } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../../providers/MeetingProvider';

type AudioVideoValue = AudioVideoFacade | null;

export const AudioVideoContext = createContext<AudioVideoValue>(null);

const AudioVideoProvider: React.FC = ({ children }) => {
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

const useAudioVideo = (): AudioVideoValue => {
  const audioVideo = useContext(AudioVideoContext);

  return audioVideo;
};

export { useAudioVideo, AudioVideoProvider };
