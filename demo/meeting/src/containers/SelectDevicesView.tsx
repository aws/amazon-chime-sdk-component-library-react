import React, { useContext } from 'react';

import RowItem from '../components/RowItem';
import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';

const SelectDevicesView: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const meetingId = meetingManager ?.meetingId;
  const attendeeName = meetingManager?.attendeeName;

  return (
    <div className="container">
      <h1>Select devices</h1>
      <RowItem 
        col1Label="Microphone"
        col1child={<select id="audio-input"></select>}
        col2Label="Preview"
        col2child={<span id="audio-preview"></span>}
      />
      <RowItem 
        col1Label="Camera"
        col1child={<select id="audio-input"></select>}
        col2Label="Preview"
        col2child={<span id="audio-preview"></span>}
      />
      <RowItem 
        col1Label="Camera"
        col1child={<select id="audio-input"></select>}
        col2child={<span id="audio-preview"></span>}
      />
      <RowItem 
        col1child={
          <select id="video-input-quality">
            <option value="360p">360p (nHD) @ 15 fps (600 Kbps max)</option>
            <option value="540p">540p (qHD) @ 15 fps (1.4 Mbps max)</option>
            <option value="720p">720p (HD) @ 15 fps (1.4 Mbps max)</option>
          </select>
        }
      />
      <RowItem 
        col1Label="Speaker"
        col1child={<select id="audio-output"></select>}
        col2child={<button id="test-sound">Test</button>}
      />
      <br />
      <button id="joinButton">Join</button>
      <p>Ready to join meeting <b>{meetingId}</b> as <b>{attendeeName}</b>.</p>
  </div>
  );
}

export default SelectDevicesView;
