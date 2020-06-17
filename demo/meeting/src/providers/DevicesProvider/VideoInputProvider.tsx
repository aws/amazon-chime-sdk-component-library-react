import React, { createContext, useEffect, useState, useContext } from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';

const Context = createContext<MediaDeviceInfo[] | null>(null);

const VideoInputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      videoInputsChanged: (newvideoInputs: MediaDeviceInfo[]) => {
        console.log('VideoInputProvider - video inputs updated');
        setVideoInputs(newvideoInputs);
      },
    };

    async function initVideoInput() {
      if (!audioVideo) {
        return;
      }

      const devices = await audioVideo.listVideoInputDevices();

      if (isMounted) {
        setVideoInputs(devices);
        audioVideo.addDeviceChangeObserver(observer);
      }
    }

    initVideoInput();

    return () => {
      isMounted = false;
      audioVideo?.removeDeviceChangeObserver(observer);
    };
  }, [audioVideo]);

  return <Context.Provider value={videoInputs}>{children}</Context.Provider>;
};

const useVideoInputs = (): MediaDeviceInfo[] => {
  const videoInputs = useContext(Context);

  if (!videoInputs) {
    throw new Error('useVideoInputs must be used within VideoInputProvider');
  }

  return videoInputs;
};

export { VideoInputProvider, useVideoInputs };
