// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ClientMetricReport } from 'amazon-chime-sdk-js';
import { useEffect, useState } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

interface MediaStreamMetrics {
  audioPacketsSentFractionLossPercent: number | null; // Percentage of audio packets lost (1s) from client to server
  audioPacketsReceivedFractionLossPercent: number | null; // Percentage of audio packets lost from server to client
  audioSpeakerDelayMs: number | null;
  audioUpstreamRoundTripTimeMs: number | null;
  audioUpstreamJitterMs: number | null;
  audioDownstreamJitterMs: number | null;
  currentRoundTripTimeMs: number | null;
  availableOutgoingBandwidth: number | null;
  availableIncomingBandwidth: number | null;
  rtcStatsReport: RTCStatsReport | null;
  videoStreamMetrics: {
    [attendeeId: string]: { [ssrc: string]: { [key: string]: number } };
  };
}

export function useMediaStreamMetrics(): MediaStreamMetrics {
  const audioVideo = useAudioVideo();
  const [mediaStreamMetrics, setMediaStreamMetrics] =
    useState<MediaStreamMetrics>({
      audioPacketsSentFractionLossPercent: null,
      audioPacketsReceivedFractionLossPercent: null,
      audioSpeakerDelayMs: null,
      audioUpstreamRoundTripTimeMs: null,
      audioUpstreamJitterMs: null,
      audioDownstreamJitterMs: null,
      currentRoundTripTimeMs: null,
      availableOutgoingBandwidth: null,
      availableIncomingBandwidth: null,
      rtcStatsReport: null,
      videoStreamMetrics: {},
    });

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer = {
      metricsDidReceive(clientMetricReport: ClientMetricReport): void {
        const {
          audioPacketLossPercent,
          audioPacketsReceivedFractionLoss,
          audioSpeakerDelayMs,
          audioUpstreamRoundTripTimeMs,
          audioUpstreamJitterMs,
          audioDownstreamJitterMs,
          currentRoundTripTimeMs,
          availableOutgoingBitrate,
          availableIncomingBitrate,
        } = clientMetricReport.getObservableMetrics();

        // Return 0 if the metric value is NaN, otherwise return its integer part.
        setMediaStreamMetrics({
          audioPacketsSentFractionLossPercent: audioPacketLossPercent | 0,
          audioPacketsReceivedFractionLossPercent:
            audioPacketsReceivedFractionLoss | 0,
          audioSpeakerDelayMs: audioSpeakerDelayMs | 0,
          audioUpstreamRoundTripTimeMs: audioUpstreamRoundTripTimeMs | 0,
          audioUpstreamJitterMs: audioUpstreamJitterMs | 0,
          audioDownstreamJitterMs: audioDownstreamJitterMs | 0,
          currentRoundTripTimeMs: currentRoundTripTimeMs | 0,
          availableOutgoingBandwidth: (availableOutgoingBitrate / 1000) | 0,
          availableIncomingBandwidth: (availableIncomingBitrate / 1000) | 0,
          rtcStatsReport: clientMetricReport.getRTCStatsReport(),
          videoStreamMetrics: clientMetricReport.getObservableVideoMetrics(),
        });
      },
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo]);

  return mediaStreamMetrics;
}

export default useMediaStreamMetrics;
