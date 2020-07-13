// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useState, useContext, useEffect } from 'react';
import { DefaultActiveSpeakerPolicy } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';

const ActiveSpeakersContext = createContext<string[] | null>(null);

const ActiveSpeakersProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [activeSpeakerIds, setActiveSpeakerIds] = useState<string[]>([]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const callback = (activeSpeakers: string[]): void => {
      setActiveSpeakerIds(activeSpeakers);
    };

    audioVideo.subscribeToActiveSpeakerDetector(
      new DefaultActiveSpeakerPolicy(),
      callback
    );

    return () => audioVideo.unsubscribeFromActiveSpeakerDetector(callback);
  }, [audioVideo]);

  return (
    <ActiveSpeakersContext.Provider value={activeSpeakerIds}>
      {children}
    </ActiveSpeakersContext.Provider>
  );
};

function useActiveSpeakers(): string[] {
  const activeSpeakers = useContext(ActiveSpeakersContext);

  if (!activeSpeakers) {
    throw new Error(
      'useActiveSpeakers must be used within an ActiveSpeakerProvider'
    );
  }

  return activeSpeakers;
}

export { ActiveSpeakersProvider, useActiveSpeakers };
