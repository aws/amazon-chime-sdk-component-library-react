// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import useAttendeeAudioStatus from '../../../hooks/sdk/useAttendeeAudioStatus';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import MicVolumeIndicator from '../../ui/MicVolumeIndicator';
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

    const callback = (
      _: string,
      volume: number | null,
      __: boolean | null,
      ___: number | null
    ) => {
      if (bgEl.current) {
        bgEl.current.style.transform = `scaleY(${volume})`;
      }
    };

    audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, callback);

    return () =>
      audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId, callback);
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
