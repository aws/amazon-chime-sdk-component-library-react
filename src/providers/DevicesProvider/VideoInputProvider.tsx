import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo
} from 'react';
import { DeviceChangeObserver } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';

export const getFormattedDropdownDeviceOptions = (
  jsonObject: any
): FormattedDeviceType[] => {
  const formattedJSONObject = Object.entries(jsonObject).map(entry => ({
    deviceId: entry[0].toLowerCase(),
    label: entry[1] as string
  }));
  return formattedJSONObject;
};

export const VIDEO_INPUT = {
  NONE: 'None',
  BLUE: 'Blue',
  SMPTE: 'SMPTE Color Bars'
};

export type FormattedDeviceType = {
  deviceId: string;
  label: string;
};

export type DeviceType = MediaDeviceInfo | FormattedDeviceType;

export type SelectedDeviceType = string | null;

export type DeviceTypeContext = {
  devices: DeviceType[];
  selectedDevice: SelectedDeviceType;
};

export type LocalVideoToggleContextType = {
  isVideoEnabled: boolean;
  toggleVideo: () => Promise<void>;
};

export type DeviceConfig = {
  additionalDevices?: boolean;
};

const Context = createContext<DeviceTypeContext | null>(null);

const VideoInputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [videoInputs, setVideoInputs] = useState<MediaDeviceInfo[]>([]);
  const meetingManager = useMeetingManager();
  const [selectedVideoInputDevice, setSelectedVideoInputDevice] = useState(
    meetingManager.selectedVideoInputDevice
  );

  useEffect(() => {
    const callback = (updatedVideoInputDevice: string | null): void => {
      setSelectedVideoInputDevice(updatedVideoInputDevice);
    };

    meetingManager.subscribeToSelectedVideoInputDeviceChange(callback);

    return (): void => {
      meetingManager.unsubscribeFromSelectedVideoInputDeviceChange(callback);
    };
  }, [meetingManager]);

  useEffect(() => {
    let isMounted = true;

    const observer: DeviceChangeObserver = {
      videoInputsChanged: (newvideoInputs: MediaDeviceInfo[]) => {
        console.log('VideoInputProvider - video inputs updated');
        setVideoInputs(newvideoInputs);
      }
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

  const contextValue: DeviceTypeContext = useMemo(
    () => ({
      devices: videoInputs,
      selectedDevice: selectedVideoInputDevice
    }),
    [videoInputs, selectedVideoInputDevice]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useVideoInputs = (props?: DeviceConfig): DeviceTypeContext => {
  const needAdditionalIO = props && props.additionalDevices;
  const additionalIOJSON = props && VIDEO_INPUT;
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVideoInputs must be used within VideoInputProvider');
  }

  let { devices } = context;
  const { selectedDevice } = context;

  if (needAdditionalIO) {
    const additionalAudioInputs = getFormattedDropdownDeviceOptions(
      additionalIOJSON
    );
    if (additionalAudioInputs !== null) {
      devices = [...devices, ...additionalAudioInputs];
    }
  }
  return { devices, selectedDevice };
};

export { VideoInputProvider, useVideoInputs };
