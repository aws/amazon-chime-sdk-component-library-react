// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect } from 'react';
import { ClientMetricReport } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

function isValidMetric(metric: any) {
  return typeof metric === 'number' && !Number.isNaN(metric);
}

interface BandwidthMetrics {
  availableOutgoingBandwidth: number | null;
  availableIncomingBandwidth: number | null;
}

export function useBandwidthMetrics() {
  const audioVideo = useAudioVideo();
  const [metrics, setMetrics] = useState<BandwidthMetrics>({
    availableOutgoingBandwidth: null,
    availableIncomingBandwidth: null,
  });

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer = {
      metricsDidReceive(clientMetricReport: ClientMetricReport): void {
        const metricReport = clientMetricReport.getObservableMetrics();

        let availableOutgoingBandwidth = null;
        let availableIncomingBandwidth = null;

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
          availableOutgoingBandwidth,
          availableIncomingBandwidth,
        });
      },
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo]);

  return metrics;
}

export default useBandwidthMetrics;
