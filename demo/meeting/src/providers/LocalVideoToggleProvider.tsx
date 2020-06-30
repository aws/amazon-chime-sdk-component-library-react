import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import { useAudioVideo } from './AudioVideoProvider';
import { videoInputSelectionToDevice } from '../utils/DeviceUtils';
import { useMeetingManager } from './MeetingProvider';
import { LocalVideoToggleContextType } from '../types';

const Context = createContext<LocalVideoToggleContextType | null>(null);

const LocalVideoToggleProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  useEffect(() => {
    if (audioVideo?.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }
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

  const value = useMemo(() => ({ isVideoEnabled, toggleVideo }), [
    isVideoEnabled,
    toggleVideo,
  ]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useLocalVideoToggle = (): LocalVideoToggleContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'useLocalVideoToggle must be used within LocalVideoToggleProvider'
    );
  }
  return context;
};

export { LocalVideoToggleProvider, useLocalVideoToggle };
