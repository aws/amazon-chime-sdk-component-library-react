import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import RowItem from '../components/RowItem';
import LocalVideo from '../components/LocalVideo';
import ProgressBar from '../components/ProgressBar';
import routes from '../constants/routes';
import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import TestSound from '../meeting/TestSound';
import { populateDeviceList } from '../utils/DeviceUtils';
import Modal from '../components/Modal';
import Card from '../components/Card';

const SelectDevicesView: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext)!;
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const meetingId = meetingManager?.meetingId;
  const attendeeName = meetingManager ?.attendeeName;
  const [audioPercent, setAudioPercent] = React.useState(0);

  useEffect(() => {
    populateAllDeviceLists();
  }, []);

  //TODO: need to add join progress bar
  const handleJoinMeeting = async () => {
    try {
      history.push(`${routes.MEETING}/${meetingId}`);
      await meetingManager.join();
    } catch(error) {
      setErrorMessage(error.message);
    }
  }
  
  const handleTestSound = (e: React.FormEvent) => {
    e.preventDefault();
    const audioOutput = document.getElementById('audio-output') as HTMLSelectElement;
    new TestSound(audioOutput.value);
  }

  const setAudioInput = async (audioInput: string) => {
    await meetingManager.setAudioInput(audioInput);
    startAudioPreview();
  }

  const setVideoInput = async (videoInput: string) => {
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
    const additionalDevices = ['None', '440 Hz'];
    populateDeviceList(
      'audio-input',
      genericName,
      meetingManager?.audioInputDevices!,
      additionalDevices
    );
  }

  const populateVideoInputList = async () => {
    const genericName = 'Camera';
    const additionalDevices = ['None', 'Blue', 'SMPTE Color Bars'];
    populateDeviceList(
      'video-input',
      genericName,
      meetingManager?.videoInputDevices!,
      additionalDevices
    );
  }

  const populateAudioOutputList = async () => {
    const genericName = 'Speaker';
    const additionalDevices: string[] = [];
    populateDeviceList(
      'audio-output',
      genericName,
      meetingManager?.audioOutputDevices!,
      additionalDevices
    );
  }

  let analyserNodeCallback = () => {};

  const startAudioPreview = () => {
    const analyserNode = meetingManager ?.audioVideo ?.createAnalyserNodeForAudioInput();
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
    setErrorMessage('');
  };

  // TODO: add audio progress bar and video review tile
  return (
    <div className="container">
      <h1>Select devices</h1>
      <RowItem 
        col1Label="Microphone"
        col1child={<select id="audio-input" onChange={e => setAudioInput(e.target.value)}/>}
        col2Label="Preview"
        col2child={<ProgressBar id="audio-preview" percentage={audioPercent}></ProgressBar>}
      />
      <RowItem 
        col1Label="Camera"
        col1child={<select id="video-input" onChange={e => setVideoInput(e.target.value)}/>}
        col2child={<LocalVideo id="video-preview" style={{width:"137px", height:"82px"}}> </LocalVideo>}
      />
      <RowItem 
        col1child={
          <select
            id="video-input-quality"
            defaultValue="540p"
            onChange={e => meetingManager.setVideoInputQuality(e.target.value)}
          >
            <option value="360p">360p (nHD) @ 15 fps (600 Kbps max)</option>
            <option value="540p">540p (qHD) @ 15 fps (1.4 Mbps max)</option>
            <option value="720p">720p (HD) @ 15 fps (1.4 Mbps max)</option>
          </select>
        }
      />
      <RowItem 
        col1Label="Speaker"
        col1child={<select id="audio-output" onChange={e => meetingManager.setAudioOutput(e.target.value)} />}
        col2child={<button id="test-sound" onClick={handleTestSound}>Test</button>}
      />
      <br />
      <button onClick={handleJoinMeeting}>Join</button>
      <p>Ready to join meeting <b>{meetingId}</b> as <b>{attendeeName}</b>.</p>
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
  </div>
  );
}

export default SelectDevicesView;
