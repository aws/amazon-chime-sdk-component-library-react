// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { LocalAudioOutputContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useLogger } from '../LoggerProvider';

const Context = createContext<LocalAudioOutputContextType | null>(null);

const LocalAudioOutputProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const logger = useLogger();
  const audioVideo = useAudioVideo();
  const [isAudioOn, setIsAudioOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      (async (element: HTMLAudioElement) => {
        try {
          await audioVideo.bindAudioElement(element);
        } catch (e) {
          logger.error(`Failed to bind audio element. ${e}`);
        }
      })(audioRef.current);
    }
    return (): void => {
      audioVideo.unbindAudioElement();
      setIsAudioOn(true);
    };
  }, [audioVideo]);

  const toggleAudio = useCallback((): void => {
    if (!audioRef.current) {
      return;
    }
    setIsAudioOn(!isAudioOn);
    if (isAudioOn) {
      audioVideo?.unbindAudioElement();
    } else {
      (async (element: HTMLAudioElement) => {
        try {
          await audioVideo?.bindAudioElement(element);
        } catch (e) {
          logger.error(`Failed to bind audio element. ${e}`);
        }
      })(audioRef.current);
    }
  }, [audioRef, audioVideo, isAudioOn]);

  const value = useMemo(
    () => ({ isAudioOn, toggleAudio }),
    [isAudioOn, toggleAudio]
  );

  return (
    <Context.Provider value={value}>
      {children}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </Context.Provider>
  );
};

const useLocalAudioOutput = (): LocalAudioOutputContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'useLocalAudioOutput must be used within LocalAudioOutputProvider'
    );
  }
  return context;
};

export { LocalAudioOutputProvider, useLocalAudioOutput };
