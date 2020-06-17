import React, { useRef, useEffect } from 'react';
import { Heading, Label } from 'amazon-chime-sdk-component-library-react';

import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import QualitySelection from './QualitySelection';
import DeviceInput from '../DeviceInput';

import { StyledVideoPreview, title } from '../Styled';

const CameraSelection = () => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const videoInputs = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    videoEl.current &&
      audioVideo?.startVideoPreviewForVideoInput(videoEl.current);

    return () => {
      videoEl.current &&
        audioVideo?.stopVideoPreviewForVideoInput(videoEl.current);
    };
  }, [audioVideo]);

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

  return (
    <div>
      <Heading as="h2" level="h6" css={title}>
        Video
      </Heading>
      <DeviceInput
        label="Camera source"
        onChange={selectVideoInput}
        devices={videoInputs}
      />
      <QualitySelection />
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Video preview
      </Label>
      <StyledVideoPreview ref={videoEl} />
    </div>
  );
};

export default CameraSelection;
