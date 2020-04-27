import React, { useEffect, useRef } from 'react';

import MeetingManager from './MeetingManager';

const MeetingAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    MeetingManager.bindAudio(audioRef.current);
  });

  return <audio ref={audioRef}></audio>;
};

export default MeetingAudio;
