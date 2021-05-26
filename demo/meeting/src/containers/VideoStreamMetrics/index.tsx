// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  useMediaStreamMetrics,
  useAudioVideo,
  PopOverHeader
} from 'amazon-chime-sdk-component-library-react';

import MediaStatsList from '../../components/MediaStatsList/index';
import MetricItem from '../../components/MediaStatsList/MetricItem';
import { StyledMediaMetricsWrapper } from '../../components/MediaStatsList/Styled';

function isValidMetric(metric: any) {
  return typeof metric === 'number' && !Number.isNaN(metric);
}

interface Props {
  /** The Chime attendee ID */
  attendeeId: string;
}

export const VideoStreamMetrics: React.FC<Props> = ({ attendeeId }) => {
  const audioVideo = useAudioVideo();
  const { videoStreamMetrics } = useMediaStreamMetrics();
  const streamMetric = videoStreamMetrics[attendeeId];
  const ssrcArray = streamMetric ? Object.keys(streamMetric) : [];
  const showMetric =
    audioVideo && attendeeId && streamMetric && ssrcArray.length !== 0;
  return (
    <StyledMediaMetricsWrapper>
      {showMetric && (
        <>
          <PopOverHeader title={'Video Statistics'} />
          <MediaStatsList>
            <MetricItem
              metricName="Bit rate (kbps)"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(streamMetric[ssrc].videoDownstreamBitrate)
                  ? Math.trunc(
                      streamMetric[ssrc].videoDownstreamBitrate / 1000
                    ).toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Packet Loss"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamPacketLossPercent
                )
                  ? Math.trunc(
                      streamMetric[ssrc].videoDownstreamPacketLossPercent
                    ).toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Rate"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamFramesDecodedPerSecond
                )
                  ? streamMetric[
                      ssrc
                    ].videoDownstreamFramesDecodedPerSecond.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamFrameHeight
                )
                  ? streamMetric[ssrc].videoDownstreamFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamFrameWidth
                )
                  ? streamMetric[ssrc].videoDownstreamFrameWidth.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamGoogFrameHeight
                )
                  ? streamMetric[ssrc].videoDownstreamGoogFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoDownstreamGoogFrameWidth
                )
                  ? streamMetric[ssrc].videoDownstreamGoogFrameWidth.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Bit rate (kbps)"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(streamMetric[ssrc].videoUpstreamBitrate)
                  ? Math.trunc(
                      streamMetric[ssrc].videoUpstreamBitrate / 1000
                    ).toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Packets Sent"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoUpstreamPacketsSent
                )
                  ? streamMetric[ssrc].videoUpstreamPacketsSent.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Rate"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoUpstreamFramesEncodedPerSecond
                )
                  ? streamMetric[
                      ssrc
                    ].videoUpstreamFramesEncodedPerSecond.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoUpstreamFrameHeight
                )
                  ? streamMetric[ssrc].videoUpstreamFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(streamMetric[ssrc].videoUpstreamFrameWidth)
                  ? streamMetric[ssrc].videoUpstreamFrameWidth.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoUpstreamGoogFrameHeight
                )
                  ? streamMetric[ssrc].videoUpstreamGoogFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return isValidMetric(
                  streamMetric[ssrc].videoUpstreamGoogFrameWidth
                )
                  ? streamMetric[ssrc].videoUpstreamGoogFrameWidth.toString()
                  : '';
              })}
            />
          </MediaStatsList>
        </>
      )}
    </StyledMediaMetricsWrapper>
  );
};

export default VideoStreamMetrics;
