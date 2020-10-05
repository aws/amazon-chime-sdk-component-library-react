// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import { DefaultBrowserBehavior } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { ContentTile } from '../../ui/ContentTile';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {}

export const ContentShare: React.FC<Props> = ({ className, ...rest }) => {
  const audioVideo = useAudioVideo();
  const { tileId, mediaUrl, paused } = useContentShareState();
  const contentShareVideoElRef = useRef<HTMLVideoElement | null>(null);
  const hiddenVideoPlayElRef = useRef<HTMLVideoElement | null>(null);
  const defaultBrowserBehaviour: DefaultBrowserBehavior = new DefaultBrowserBehavior();

  useEffect(() => {
    if (!mediaUrl || !audioVideo || !hiddenVideoPlayElRef.current) {
      return;
    }
    const playVideoElement = hiddenVideoPlayElRef.current;

    const playVideoAndShare = async () => {
      playVideoElement.src = mediaUrl;
      await playVideoElement.play();

      // create mediastream
      let mediaStream: MediaStream;
      if (defaultBrowserBehaviour.hasFirefoxWebRTC()) {
        // @ts-ignore
        mediaStream = playVideoElement.mozCaptureStream();
      } else {
        // @ts-ignore
        mediaStream = playVideoElement.captureStream();
      }
      audioVideo.startContentShare(mediaStream);
    };
    playVideoAndShare();

    return () => {
      playVideoElement.pause();
    };
  }, [mediaUrl, audioVideo]);

  useEffect(() => {
    if (!mediaUrl || !hiddenVideoPlayElRef.current) {
      return;
    }
    paused
      ? hiddenVideoPlayElRef.current.pause()
      : hiddenVideoPlayElRef.current.play();
  }, [paused, mediaUrl]);

  useEffect(() => {
    if (!audioVideo || !contentShareVideoElRef.current || !tileId) {
      return;
    }

    audioVideo.bindVideoElement(tileId, contentShareVideoElRef.current);

    return () => {
      const tile = audioVideo.getVideoTile(tileId);
      if (tile) {
        audioVideo.unbindVideoElement(tileId);
      }
    };
  }, [audioVideo, tileId]);

  return (
    <>
      {mediaUrl && (
        <video ref={hiddenVideoPlayElRef} style={{ display: 'none' }} />
      )}
      {tileId ? (
        <ContentTile
          crossOrigin="anonymous"
          objectFit="contain"
          className={className || ''}
          {...rest}
          ref={contentShareVideoElRef}
        />
      ) : null}
    </>
  );
};

export default ContentShare;
