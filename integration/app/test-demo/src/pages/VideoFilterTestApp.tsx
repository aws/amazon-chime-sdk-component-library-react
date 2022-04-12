import React, { ChangeEvent, useEffect, useState } from 'react';
import { BackgroundBlurOptions, LogLevel } from 'amazon-chime-sdk-js';
import {
  MeetingProvider,
  useBackgroundBlur,
  BackgroundBlurProvider,
  ControlBar,
  useVideoInputs,
  useLocalVideo,
  useMeetingStatus,
  MeetingStatus,
  VideoTileGrid,
  FormField,
  Select,
  VideoInputBackgroundBlurControl,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import MeetingInfo from '../components/MeetingInfo';
import MeetingLeaveControl from '../components/MeetingLeaveControl';
import MeetingForm from '../containers/MeetingForm';

export const VideoFilterTestApp: React.FC = () => {
  const defaultOptions: BackgroundBlurOptions = {
    blurStrength: 20,
    filterCPUUtilization: 20,
    reportingPeriodMillis: 1000,
  };
  const [backgroundBlurOptions, setBackgroundBlurOptions] = useState<BackgroundBlurOptions>(defaultOptions);

  const setBlurStrength = (newBlurStrength: number): void => {
    console.log(`Setting blur strength to ${newBlurStrength} - should re-initialize the bg blur provider`);
    const options = { ...backgroundBlurOptions, blurStrength: newBlurStrength };
    setBackgroundBlurOptions(options);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '70%', margin: 'auto' }}>
      <BackgroundBlurProvider options={backgroundBlurOptions}>
        <MeetingProvider {...{ logLevel: LogLevel.INFO }}>
          <h3 data-testid='app-name'>Video Filter Test</h3>
          <Meeting onBlurStrengthChanged={(newBlurStrength) => setBlurStrength(newBlurStrength)} />
        </MeetingProvider>
      </BackgroundBlurProvider>
    </div>
  )
};

interface Props {
  onBlurStrengthChanged: (blurStrength: number) => void;
}

const Meeting: React.FC<Props> = ({ onBlurStrengthChanged }) => {
  const { isBackgroundBlurSupported, createBackgroundBlurDevice } = useBackgroundBlur();
  const meetingManager = useMeetingManager();
  const { selectedDevice } = useVideoInputs();
  const { toggleVideo } = useLocalVideo();
  const meetingStatus = useMeetingStatus();
  const [blurStrength, setBlurStrength] = useState<string>('20');

  useEffect(() => {
    const addBackgroundBlur = async () => {
      try {
        if (
          isBackgroundBlurSupported &&
          meetingStatus === MeetingStatus.Succeeded &&
          selectedDevice
        ) {
          console.log('Creating background blur device called');
          const chosenVideoTransformDevice = await createBackgroundBlurDevice(selectedDevice);
          console.log(chosenVideoTransformDevice);
          await meetingManager.startVideoInputDevice(chosenVideoTransformDevice);
          toggleVideo();
        }
      } catch (error) {
        console.error('Failed to add Background Blur');
      }
    };
    addBackgroundBlur();
  }, [
    isBackgroundBlurSupported,
    meetingStatus,
    meetingManager,
    meetingManager.startVideoInputDevice,
  ]);

  const updateBlurStrength = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setBlurStrength(e.target.value);
    console.log('Updated to blurStrength:' + e.target.value);
    const newBlurStrength = parseInt(e.target.value);
    onBlurStrengthChanged(newBlurStrength);
  }

  return (
    <>
      <MeetingInfo />
      {meetingStatus !== MeetingStatus.Succeeded ?
        <MeetingForm /> :
        <>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: 'auto' }}>
            <ControlBar
              layout='undocked-horizontal'
              css='margin-bottom: 1rem;'
              showLabels
            >
              <VideoInputBackgroundBlurControl />
              <FormField
                field={Select}
                label='Blur Strength'
                value={blurStrength}
                onChange={updateBlurStrength}
                options={[{ value: '20', label: '20' }, { value: '40', label: '40' }, { value: '60', label: '60' }]}
              />
              <MeetingLeaveControl />
            </ControlBar>
            <div style={{ height: '30rem', width: '100%' }}>
              <VideoTileGrid />
            </div>
          </div>
        </>}
    </>
  )
};

