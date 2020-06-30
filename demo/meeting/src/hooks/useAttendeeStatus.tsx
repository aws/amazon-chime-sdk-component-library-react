import { useEffect, useState } from 'react';
import { AudioVideoObserver, DefaultModality } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../providers/AudioVideoProvider';
import useAttendeeRealtimeAudio from './useAttendeeRealtimeAudio';

interface RosterAttendeeStatus {
  muted: boolean;
  videoEnabled: boolean;
  sharingContent: boolean;
  signalStrength: number;
}

const useAttendeeStatus = (attendeeId: string): RosterAttendeeStatus => {
  const audioVideo = useAudioVideo();
  const audioState = useAttendeeRealtimeAudio(attendeeId);

  const [videoTileId, setVideoTileId] = useState<number | null>(() => {
    if (!audioVideo) {
      return null;
    }

    const tiles = audioVideo.getAllVideoTiles();
    const videoTile = tiles.find(tile => {
      const state = tile.state();
      return !state.isContent && state.boundAttendeeId === attendeeId;
    });

    return videoTile ? videoTile.state().tileId : null;
  });

  const [contentTileId, setContentTileId] = useState<number | null>(() => {
    if (!audioVideo) {
      return null;
    }

    const tiles = audioVideo.getAllVideoTiles();
    const videoTile = tiles.find(tile => {
      const state = tile.state();
      if (!state.boundAttendeeId || !state.isContent) {
        return false;
      }
      const baseId = new DefaultModality(state.boundAttendeeId).base();
      return baseId === attendeeId;
    });

    return videoTile ? videoTile.state().tileId : null;
  });

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer: AudioVideoObserver = {
      videoTileDidUpdate: state => {
        if (state.boundAttendeeId !== attendeeId) {
          return;
        }

        if (state.localTile && videoTileId && !state.boundVideoStream) {
          setVideoTileId(null);
          return;
        }

        if (videoTileId || !state.tileId || state.isContent) {
          return;
        }

        setVideoTileId(state.tileId);
      },
      videoTileWasRemoved: (tileId: number) => {
        if (tileId === videoTileId) {
          setVideoTileId(null);
        }
      }
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo, videoTileId, attendeeId]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer: AudioVideoObserver = {
      videoTileDidUpdate: state => {
        if (!state.isContent || !state.boundAttendeeId || contentTileId) {
          return;
        }

        const baseId = new DefaultModality(state.boundAttendeeId).base();

        if (baseId !== attendeeId) {
          return;
        }

        setContentTileId(state.tileId);
      },
      videoTileWasRemoved: (tileId: number) => {
        if (tileId === contentTileId) {
          setContentTileId(null);
        }
      }
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo, contentTileId, attendeeId]);

  const videoEnabled = typeof videoTileId === 'number' && videoTileId > -1;
  const sharingContent =
    typeof contentTileId === 'number' && contentTileId > -1;

  return {
    ...audioState,
    videoEnabled,
    sharingContent
  };
};

export default useAttendeeStatus;
