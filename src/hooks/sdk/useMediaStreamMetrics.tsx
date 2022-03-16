// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ClientMetricReport } from 'amazon-chime-sdk-js';
import { useEffect, useState } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

function isValidMetric(metric: number): boolean {
  return !Number.isNaN(metric);
}

interface MediaStreamMetrics {
  audioPacketsSentFractionLossPercent: number | null; // Percentage of audio packets lost (1s) from client to server
  audioPacketsReceivedFractionLossPercent: number | null; // Percentage of audio packets lost from server to client
  availableOutgoingBandwidth: number | null;
  availableIncomingBandwidth: number | null;
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
          availableOutgoingBitrate,
          availableIncomingBitrate,
        } = clientMetricReport.getObservableMetrics();
        let videoStreamMetrics = {};
        let availableOutgoingBandwidth = 0;
        let availableIncomingBandwidth = 0;
        let audioPacketsSentFractionLossPercent = 0;
        let audioPacketsReceivedFractionLossPercent = 0;

        if (isValidMetric(audioPacketLossPercent)) {
          audioPacketsSentFractionLossPercent = Math.trunc(
            audioPacketLossPercent
          );
        }

        if (isValidMetric(audioPacketsReceivedFractionLoss)) {
          audioPacketsReceivedFractionLossPercent = Math.trunc(
            audioPacketsReceivedFractionLoss
          );
        }

        // TODO: remove if condition after JS SDK 3.0.0-beta.2 is released
        if (clientMetricReport.getObservableVideoMetrics) {
          videoStreamMetrics = clientMetricReport.getObservableVideoMetrics();
        }

        if (isValidMetric(availableOutgoingBitrate)) {
          availableOutgoingBandwidth = availableOutgoingBitrate / 1000;
        }

        if (isValidMetric(availableIncomingBitrate)) {
          availableIncomingBandwidth = availableIncomingBitrate / 1000;
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
