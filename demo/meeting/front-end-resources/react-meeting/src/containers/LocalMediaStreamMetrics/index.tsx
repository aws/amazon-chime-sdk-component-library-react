// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  useMediaStreamMetrics,
  useAudioVideo,
  PopOverHeader,
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';

import { MediaStatsList } from '../../components/MediaStatsList';
import MetricItem from '../../components/MediaStatsList/MetricItem';
import { StyledMediaMetricsWrapper } from '../../components/MediaStatsList/Styled';

export const LocalMediaStreamMetrics: React.FC = () => {
  const audioVideo = useAudioVideo();
  if (!audioVideo) {
    return null;
  }
  const {
    audioPacketsSentFractionLossPercent,
    audioPacketsReceivedFractionLossPercent,
    availableIncomingBandwidth,
    availableOutgoingBandwidth,
    videoStreamMetrics
  } = useMediaStreamMetrics();

  const isLocalAudioActive =
    audioPacketsSentFractionLossPercent !== null &&
    audioPacketsReceivedFractionLossPercent !== null;

  const meetingManager = useMeetingManager();
  const localAttendeeId =
    meetingManager.meetingSession?.configuration.credentials?.attendeeId;
  const localVideoStreamMetrics = localAttendeeId
    ? videoStreamMetrics[localAttendeeId]
    : {};
  const ssrcArray = localVideoStreamMetrics
    ? Object.keys(localVideoStreamMetrics)
    : [];

  const isLocalVideoActive = ssrcArray.length !== 0;
  const hasBandwidthInfo =
    availableIncomingBandwidth !== null && availableOutgoingBandwidth !== null;
  return (
    <StyledMediaMetricsWrapper>
      {isLocalAudioActive && (
        <>
          <PopOverHeader title={'Audio statistics'} />
          <MediaStatsList>
            <MetricItem metricName="" metricValues={['Up', 'Down']} />
            <MetricItem
              metricName="1s Loss"
              metricValues={[
                audioPacketsSentFractionLossPercent !== null
                  ? audioPacketsSentFractionLossPercent.toString()
                  : '',
                audioPacketsReceivedFractionLossPercent !== null
                  ? audioPacketsReceivedFractionLossPercent.toString()
                  : ''
              ]}
            />
          </MediaStatsList>
        </>
      )}
      {isLocalVideoActive && (
        <>
          <PopOverHeader title={'Video statistics'} />
          <MediaStatsList>
            <MetricItem
              metricName="Bit rate (kbps)"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc].videoUpstreamBitrate
                  ? Math.trunc(
                      localVideoStreamMetrics[ssrc].videoUpstreamBitrate / 1000
                    ).toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Packets Sent"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc].videoUpstreamPacketsSent
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamPacketsSent.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Rate"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc]
                  .videoUpstreamFramesEncodedPerSecond
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamFramesEncodedPerSecond.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc].videoUpstreamFrameHeight
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc].videoUpstreamFrameWidth
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamFrameWidth.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Height"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc]
                  .videoUpstreamGoogFrameHeight
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamGoogFrameHeight.toString()
                  : '';
              })}
            />
            <MetricItem
              metricName="Frame Width"
              metricValues={ssrcArray.map(ssrc => {
                return localVideoStreamMetrics[ssrc].videoUpstreamGoogFrameWidth
                  ? localVideoStreamMetrics[
                      ssrc
                    ].videoUpstreamGoogFrameWidth.toString()
                  : '';
              })}
            />
          </MediaStatsList>
        </>
      )}
      {hasBandwidthInfo && (
        <>
          <PopOverHeader title={'Bandwidth statistics'} />
          <MediaStatsList>
            <MetricItem metricName="" metricValues={['Outgoing', 'Incoming']} />
            <MetricItem
              metricName="Bandwidth (kbps)"
              metricValues={[
                availableOutgoingBandwidth !== null
                  ? availableOutgoingBandwidth.toString()
                  : '',
                availableIncomingBandwidth !== null
                  ? availableIncomingBandwidth.toString()
                  : ''
              ]}
            />
          </MediaStatsList>
        </>
      )}
    </StyledMediaMetricsWrapper>
  );
};

export default LocalMediaStreamMetrics;
