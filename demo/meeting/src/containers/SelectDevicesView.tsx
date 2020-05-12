import React, { useContext, useEffect } from 'react';

import RowItem from '../components/RowItem';
import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import TestSound from '../meeting/TestSound';

const SelectDevicesView: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext)!;
  const meetingId = meetingManager?.meetingId;
  const attendeeName = meetingManager?.attendeeName;

  useEffect(() => {
    populateAllDeviceLists();
  }, [meetingManager ?.audioInputDevices]);
  
  //TODO: need to add join progress bar, and switch to in-meeting view
  const handleJoinMeeting = async () => {
    await meetingManager.join();
  }
  
  const handleTestSound = (e: React.FormEvent) => {
    e.preventDefault();
    const audioOutput = document.getElementById('audio-output') as HTMLSelectElement;
    new TestSound(audioOutput.value);
  }

  const populateAllDeviceLists = async() => {
    await populateAudioInputList();
    await populateVideoInputList();
    await populateAudioOutputList();
  }
    
  const populateDeviceList = (
    elementId: string,
    genericName: string,
    devices: MediaDeviceInfo[],
    additionalOptions: string[]
  ) =>  {
    const list = document.getElementById(elementId) as HTMLSelectElement;
    while (list.firstElementChild) {
      list.removeChild(list.firstElementChild);
    }
    for (let i = 0; i < devices.length; i++) {
      const option = document.createElement('option');
      list.appendChild(option);
      option.text = devices[i].label || `${genericName} ${i + 1}`;
      option.value = devices[i].deviceId;
    }
    if (additionalOptions.length > 0) {
      const separator = document.createElement('option');
      separator.disabled = true;
      separator.text = '──────────';
      list.appendChild(separator);
      for (const additionalOption of additionalOptions) {
        const option = document.createElement('option');
        list.appendChild(option);
        option.text = additionalOption;
        option.value = additionalOption;
      }
    }
    if (!list.firstElementChild) {
      const option = document.createElement('option');
      option.text = 'Device selection unavailable';
      list.appendChild(option);
    }
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

  const populateVideoInputList = async() => {
    const genericName = 'Camera';
    const additionalDevices = ['None', 'Blue', 'SMPTE Color Bars'];
    populateDeviceList(
      'video-input',
      genericName,
      meetingManager?.videoInputDevices!,
      additionalDevices
    );
  }

  const populateAudioOutputList = async () =>  {
    const genericName = 'Speaker';
    const additionalDevices: string[] = [];
    populateDeviceList(
      'audio-output',
      genericName,
      meetingManager?.audioOutputDevices!,
      additionalDevices
    );
  }

  // TODO: add audio progress bar and video review tile
  return (
    <div className="container">
      <h1>Select devices</h1>
      <RowItem 
        col1Label="Microphone"
        col1child={<select id="audio-input" onChange={e => meetingManager.setAudioInput(e.target.value)}/>}
        col2Label="Preview"
        col2child={<span id="audio-preview"></span>}
      />
      <RowItem 
        col1Label="Camera"
        col1child={<select id="video-input" onChange={e => meetingManager.setVideoInput(e.target.value)}/>}
        col2child={<span id="video-preview"></span>}
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
  </div>
  );
}

export default SelectDevicesView;
