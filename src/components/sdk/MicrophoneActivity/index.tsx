// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import MicVolumeIndicator from '../../ui/MicVolumeIndicator';
import useAttendeeAudioStatus from '../../../hooks/sdk/useAttendeeAudioStatus';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The Chime attendee ID */
  attendeeId: string;
}

export const MicrophoneActivity: React.FC<Props> = ({
  attendeeId,
  ...rest
}) => {
  const audioVideo = useAudioVideo();
  const bgEl = useRef<HTMLDivElement>(null);
  const { signalStrength, muted } = useAttendeeAudioStatus(attendeeId);

  useEffect(() => {
    if (!audioVideo || !attendeeId || !bgEl.current) {
      return;
    }

    audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, (_, volume) => {
      if (bgEl.current) {
        bgEl.current.style.transform = `scaleY(${volume})`;
      }
    });

    return () => audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId);
  }, [attendeeId]);

  return (
    <MicVolumeIndicator
      {...rest}
      ref={bgEl}
      muted={muted}
      signalStrength={signalStrength}
    />
  );
};

export default MicrophoneActivity;
