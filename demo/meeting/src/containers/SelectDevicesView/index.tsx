import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';

import {
  PrimaryButton,
  Select,
} from 'amazon-chime-sdk-component-library-react';
import {
  MeetingManager,
  MeetingContext,
} from '../../providers/MeetingProvider';
import { getErrorContext } from '../../providers/ErrorProvider';
import LocalVideo from '../LocalVideo';
import ProgressBar from '../../components/ProgressBar';
import routes from '../../constants/routes';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import { populateDeviceList } from '../../utils/DeviceUtils';
import getFormattedOptionsForSelect from '../../utils/select-options-format';
import TestSound from '../../utils/TestSound';
import { VIDEO_INPUT, AUDIO_INPUT, VIDEO_INPUT_QUALITY } from '../../constants';
import { StyledContainer } from './Styled';

const SelectDevicesView: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext)!;
  const history = useHistory();
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const meetingId = meetingManager?.meetingId;
  const attendeeName = meetingManager?.attendeeName;
  const [audioPercent, setAudioPercent] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioInputEl = useRef<HTMLSelectElement>(null);
  const audioOutputEl = useRef<HTMLSelectElement>(null);
  const videoInputEl = useRef<HTMLSelectElement>(null);
  const [audioInputValue, setAudioInputValue] = useState('');
  const [videoInputValue, setVideoInputValue] = useState('');
  const [audioOutputValue, setAudioOutputValue] = useState('');
  const [videoInputQualityValue, setVideoInputQualityValue] = useState('540p');

  useEffect(() => {
    populateAllDeviceLists();
  }, []);

  const handleJoinMeeting = async () => {
    setIsLoading(true);
    const previewEle = document.getElementById('video-preview') as HTMLVideoElement;
    try {
      history.push(`${routes.MEETING}/${meetingId}`);
      meetingManager?.audioVideo?.stopVideoPreviewForVideoInput(previewEle);
      await meetingManager.join();
    } catch(error) {
      updateErrorMessage(error.message);
    }
  }
  
  const handleTestSound = (e: React.FormEvent) => {
    e.preventDefault();
    if (audioOutputEl.current !== null) {
      new TestSound(audioOutputEl.current.value);
    }
  }

  const setAudioInput = async (audioInput: string) => {
    setAudioInputValue(audioInput);
    await meetingManager.setAudioInput(audioInput);
    startAudioPreview();
  }

  const setVideoInput = async (videoInput: string) => {
    setVideoInputValue(videoInput);
    await meetingManager.setVideoInput(videoInput);
    const previewEle = document.getElementById('video-preview') as HTMLVideoElement;
    await meetingManager.startVideoPreview(previewEle);
  }
  
  const populateAllDeviceLists = async () => {
    await populateAudioInputList();
    await populateVideoInputList();
    await populateAudioOutputList();

    // Start preview with default media input
    const previewEle = document.getElementById('video-preview') as HTMLVideoElement;
    await meetingManager.startVideoPreview(previewEle);
    startAudioPreview();
  }

  const populateAudioInputList = async () => {
    const genericName = 'Microphone';
    const additionalDevices = [AUDIO_INPUT.NONE, AUDIO_INPUT[440]];
    if (audioInputEl.current !== null) {
      populateDeviceList(
        audioInputEl.current,
        genericName,
        meetingManager?.audioInputDevices!,
        additionalDevices
      );
    }
  };

  const populateVideoInputList = async () => {
    const genericName = 'Camera';
    const additionalDevices = [
      VIDEO_INPUT.NONE,
      VIDEO_INPUT.BLUE,
      VIDEO_INPUT.SMPTE,
    ];
    if (videoInputEl.current !== null) {
      populateDeviceList(
        videoInputEl.current,
        genericName,
        meetingManager?.videoInputDevices!,
        additionalDevices
      );
    }
  };

  const populateAudioOutputList = async () => {
    const genericName = 'Speaker';
    const additionalDevices: string[] = [];
    if (audioOutputEl.current !== null) {
      populateDeviceList(
        audioOutputEl.current,
        genericName,
        meetingManager?.audioOutputDevices!,
        additionalDevices
      );
    }
  };

  let analyserNodeCallback = () => {};

  const startAudioPreview = () => {
    const analyserNode = meetingManager?.audioVideo?.createAnalyserNodeForAudioInput();
    if (!analyserNode || !analyserNode.getByteTimeDomainData) {
      return;
    }
    const data = new Uint8Array(analyserNode.fftSize);
    let frameIndex = 0;
    analyserNodeCallback = () => {
      if (frameIndex === 0) {
        analyserNode.getByteTimeDomainData(data);
        const lowest = 0.01;
        let max = lowest;
        for (const f of data) {
          max = Math.max(max, (f - 128) / 128);
        }
        const normalized = (Math.log(lowest) - Math.log(max)) / Math.log(lowest);
        const percent = Math.min(Math.max(normalized * 100, 0), 100);
        setAudioPercent(percent);
      }
      frameIndex = (frameIndex + 1) % 2;
      requestAnimationFrame(analyserNodeCallback);
    };
    requestAnimationFrame(analyserNodeCallback);
  }

  const closeError = (): void => {
    updateErrorMessage('');
  };

  return (
    <StyledContainer>
      <h1>Select Devices</h1>
      <div className="item microphone">
        <p>Microphone</p>
        <Select
          ref={audioInputEl}
          value={audioInputValue}
          options={[]}
          onChange={(e: ChangeEvent<HTMLSelectElement>): Promise<void> | void =>
            setAudioInput(e.target.value)
          }
        />
      </div>
      <div className="item camera">
        <p>Camera</p>
        <Select
          ref={videoInputEl}
          value={videoInputValue}
          options={[]}
          onChange={(e: ChangeEvent<HTMLSelectElement>): Promise<void> | void =>
            setVideoInput(e.target.value)
          }
        />
      </div>
      <div className="item audio-test">
        <p>Microphone Audio Test</p>
        <ProgressBar id="audio-preview" percentage={audioPercent}></ProgressBar>
      </div>
      <div className="item video-preview-container">
        <p>Video Preview</p>
        <LocalVideo id="video-preview"> </LocalVideo>
      </div>
      <div className="item video-input-quality">
        <p>Video Input Quality</p>
        <Select
          value={videoInputQualityValue}
          options={getFormattedOptionsForSelect(VIDEO_INPUT_QUALITY)}
          onChange={(
            e: ChangeEvent<HTMLSelectElement>
          ): Promise<void> | void => {
            setVideoInputQualityValue(e.target.value);
            meetingManager.setVideoInputQuality(e.target.value);
          }}
        />
      </div>
      <div className="item speaker">
        <p>Speaker</p>
        <Select
          ref={audioOutputEl}
          value={audioOutputValue}
          options={[]}
          onChange={(
            e: ChangeEvent<HTMLSelectElement>
          ): Promise<void> | void => {
            meetingManager.setAudioOutput(e.target.value);
            setAudioOutputValue(e.target.value);
          }}
        />
      </div>
      <div className="item test-speaker">
        <PrimaryButton
          className="btn-test-speaker"
          label="Test Speaker"
          onClick={handleTestSound}
        />
      </div>
      <div className="item join-meeting">
        <PrimaryButton
          className="btn-join-meeting"
          label="Join"
          onClick={handleJoinMeeting}
        />
      </div>
      <div className="item footer">
        <p>
          Ready to join meeting <b>{meetingId}</b> as <b>{attendeeName}</b>.
        </p>
      </div>
      {isLoading && <Spinner />}
      {errorMessage && (
        <Modal onClose={closeError}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="Unable to join meeting"
            description="There was an issue in joining this meeting. Check your connectivity and try again."
            smallText={errorMessage}
          />
        </Modal>
      )}
    </StyledContainer>
  );
};

export default SelectDevicesView;
