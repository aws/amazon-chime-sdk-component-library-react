// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect } from 'react';
import { ClientMetricReport } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

function isValidMetric(metric: any) {
  return typeof metric === 'number' && !Number.isNaN(metric);
}

interface VideoMetrics {
  videoDownstreamBitrate: number;
  videoDownstreamPacketLossPercent: number;
  videoDownstreamFramesDecodedPerSecond: number;
  videoDownstreamFrameHeight: number;
  videoDownstreamFrameWidth: number;
  videoDownstreamGoogFrameHeight: number;
  videoDownstreamGoogFrameWidth: number;
  videoUpstreamBitrate: number;
  videoUpstreamPacketsSent: number;
  videoUpstreamFramesEncodedPerSecond: number;
  videoUpstreamFrameHeight: number;
  videoUpstreamFrameWidth: number;
  videoUpstreamGoogFrameHeight: number;
  videoUpstreamGoogFrameWidth: number;
}

interface MediaStreamMetrics {
  audioPacketsSentFractionLossPercent: number | null; // Percentage of audio packets lost (1s) from client to server
  audioPacketsReceivedFractionLossPercent: number | null; // Percentage of audio packets lost from server to client
  availableOutgoingBandwidth: number | null;
  availableIncomingBandwidth: number | null;
  videoStreamMetrics: { [attendeeId: string]: { [ssrc: string]: VideoMetrics } };
}

export function useMediaStreamMetrics() {
  const audioVideo = useAudioVideo();
  const [mediaStreamMetrics, setMediaStreamMetrics] = useState<MediaStreamMetrics>({
    audioPacketsSentFractionLossPercent: null,
    audioPacketsReceivedFractionLossPercent: null,
    availableOutgoingBandwidth: null,
    availableIncomingBandwidth: null,
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
          availableSendBandwidth,
          availableReceiveBandwidth,
          availableOutgoingBitrate,
          availableIncomingBitrate,
        } = clientMetricReport.getObservableMetrics();
        let videoStreamMetrics = {};
        let availableOutgoingBandwidth = 0;
        let availableIncomingBandwidth = 0;
        let audioPacketsSentFractionLossPercent = 0;
        let audioPacketsReceivedFractionLossPercent = 0;

        if (isValidMetric(audioPacketLossPercent)) {
          audioPacketsSentFractionLossPercent =
            Math.trunc(audioPacketLossPercent);
        }

        if (isValidMetric(audioPacketsReceivedFractionLoss)) {
          audioPacketsReceivedFractionLossPercent =
            Math.trunc(audioPacketsReceivedFractionLoss);
        }

        if (clientMetricReport.getObservableVideoMetrics) {
          videoStreamMetrics = clientMetricReport.getObservableVideoMetrics();
        }

        if (isValidMetric(availableSendBandwidth)) {
          availableOutgoingBandwidth =
            availableSendBandwidth / 1000;
        } else if (isValidMetric(availableOutgoingBitrate)) {
          availableOutgoingBandwidth =
            availableOutgoingBitrate / 1000;
        }

        if (isValidMetric(availableReceiveBandwidth)) {
          availableIncomingBandwidth =
            availableReceiveBandwidth / 1000;
        } else if (isValidMetric(availableIncomingBitrate)) {
          availableIncomingBandwidth =
            availableIncomingBitrate / 1000;
        }
        setMediaStreamMetrics({
          audioPacketsSentFractionLossPercent,
          audioPacketsReceivedFractionLossPercent,
          availableOutgoingBandwidth,
          availableIncomingBandwidth,
          videoStreamMetrics,
        });
      },
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo]);

  return mediaStreamMetrics;
}

export default useMediaStreamMetrics;
