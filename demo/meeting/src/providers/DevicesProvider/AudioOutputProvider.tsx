import React, { createContext, useEffect, useState, useContext } from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';

const AudioOutputContext = createContext<MediaDeviceInfo[]>([]);

const AudioOutputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      audioOutputsChanged: (newAudioOutput: MediaDeviceInfo[]) => {
        console.log('AudioOutputProvider - audio outputs updated');
        setAudioOutputs(newAudioOutput);
      },
    };

    async function initAudioOutput() {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listAudioOutputDevices();

      if (isMounted) {
        setAudioOutputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    initAudioOutput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
    };
  }, [audioVideo]);

  return (
    <AudioOutputContext.Provider value={audioOutputs}>
      {children}
    </AudioOutputContext.Provider>
  );
};

const useAudioOutputs = (): MediaDeviceInfo[] => {
  const audioOutputs = useContext(AudioOutputContext);

  if (!audioOutputs) {
    throw new Error('useAudioOutputs must be used within AudioOutputProvider');
  }

  return audioOutputs;
};

export { AudioOutputProvider, useAudioOutputs };
