import React, { createContext, useEffect, useState, useContext } from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';

const Context = createContext<MediaDeviceInfo[] | null>(null);

const AudioInputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioInputsChanged: (newAudioInputs: MediaDeviceInfo[]) => {
        console.log('AudioInputProvider - audio inputs updated');
        setAudioInputs(newAudioInputs);
      },
    };

    async function initAudioInput() {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listAudioInputDevices();

      if (isMounted) {
        setAudioInputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    initAudioInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
    };
  }, [audioVideo]);

  return <Context.Provider value={audioInputs}>{children}</Context.Provider>;
};

const useAudioInputs = (): MediaDeviceInfo[] => {
  const audioInputs = useContext(Context);

  if (!audioInputs) {
    throw new Error('useAudioInputs must be used within AudioInputProvider');
  }

  return audioInputs;
};

export { AudioInputProvider, useAudioInputs };
