// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect } from 'react';
import { ClientMetricReport } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

function isValidMetric(metric: any) {
  return typeof metric === 'number' && !Number.isNaN(metric);
}

interface MediaStreamMetrics {
  audioPacketsSentFractionLossPercent: number | null; // Percentage of audio packets lost (1s) from client to server
  audioPacketsReceivedFractionLossPercent: number | null; // Percentage of audio packets lost from server to client
  availableOutgoingBandwidth: number | null;
  availableIncomingBandwidth: number | null;
  videoStreamMetrics: { [key: string]: { [key: string]: {[key: string]: number} } }
}

export function useMediaStreamMetrics() {
  const audioVideo = useAudioVideo();
  const [mediaStreamMetrics, setMetrics] = useState<MediaStreamMetrics>({
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
        const metricReport = clientMetricReport.getObservableMetrics();

        let videoStreamMetrics = {};
        let availableOutgoingBandwidth = 0;
        let availableIncomingBandwidth = 0;
        let audioPacketsSentFractionLossPercent = 0;
        let audioPacketsReceivedFractionLossPercent = 0;

        if (isValidMetric(metricReport.audioPacketLossPercent)) {
          audioPacketsSentFractionLossPercent =
            Math.trunc(metricReport.audioPacketLossPercent);
        }

        if (isValidMetric(metricReport.audioPacketsReceivedFractionLoss)) {
          audioPacketsReceivedFractionLossPercent =
            Math.trunc(metricReport.audioPacketsReceivedFractionLoss);
        }

        if (clientMetricReport.getObservableVideoMetrics) {
          videoStreamMetrics = clientMetricReport.getObservableVideoMetrics();
        }

        if (isValidMetric(metricReport.availableSendBandwidth)) {
          availableOutgoingBandwidth =
            metricReport.availableSendBandwidth / 1000;
        } else if (isValidMetric(metricReport.availableOutgoingBitrate)) {
          availableOutgoingBandwidth =
            metricReport.availableOutgoingBitrate / 1000;
        }

        if (isValidMetric(metricReport.availableReceiveBandwidth)) {
          availableIncomingBandwidth =
            metricReport.availableReceiveBandwidth / 1000;
        } else if (isValidMetric(metricReport.availableIncomingBitrate)) {
          availableIncomingBandwidth =
            metricReport.availableIncomingBitrate / 1000;
        }
        setMetrics({
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
