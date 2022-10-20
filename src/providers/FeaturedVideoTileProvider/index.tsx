// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useMeetingManager } from '../MeetingProvider';
import { useRemoteVideoTileState } from '../RemoteVideoTileProvider';

interface FeaturedTileState {
  tileId: number | null;
}

const TILE_TRANSITION_DELAY = 1500;

const FeaturedTileContext = createContext<FeaturedTileState | null>(null);

const FeaturedVideoTileProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const { attendeeIdToTileId } = useRemoteVideoTileState();
  const activeTileRef = useRef<number | null>(null);
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const timeout = useRef<number | null>(null);
  const pendingAttendee = useRef<string | null>(null);

  useEffect(() => {
    const activeSpeakerCallback = (activeAttendees: string[]) => {
      const activeId = activeAttendees[0];

      if (activeId === pendingAttendee.current) {
        return;
      }

      pendingAttendee.current = activeId;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (!activeId) {
        activeTileRef.current = null;
        setActiveTile(null);
        return;
      }

      const tileId = attendeeIdToTileId[activeId];

      if (!tileId) {
        if (activeTileRef.current) {
          timeout.current = window.setTimeout(() => {
            activeTileRef.current = null;
            setActiveTile(null);
          }, TILE_TRANSITION_DELAY);
        }

        return;
      }

      if (tileId === activeTileRef.current) {
        return;
      }

      // Set featured tile immediately if there is no current featured tile.
      // Otherwise, delay it to avoid tiles jumping around too frequently
      if (!activeTileRef.current) {
        activeTileRef.current = tileId;
        setActiveTile(tileId);
      } else {
        timeout.current = window.setTimeout(() => {
          activeTileRef.current = tileId;
          setActiveTile(tileId);
        }, TILE_TRANSITION_DELAY);
      }
    };

    meetingManager.subscribeToActiveSpeaker(activeSpeakerCallback);

    return () =>
      meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCallback);
  }, [attendeeIdToTileId]);

  const value = useMemo(
    () => ({
      tileId: activeTile,
    }),
    [activeTile]
  );

  return (
    <FeaturedTileContext.Provider value={value}>
      {children}
    </FeaturedTileContext.Provider>
  );
};

function useFeaturedTileState(): FeaturedTileState {
  const state = useContext(FeaturedTileContext);

  if (!state) {
    throw new Error(
      'useFeaturedTileState must be used within an FeaturedVideoTileProvider'
    );
  }

  return state;
}

export { FeaturedVideoTileProvider, useFeaturedTileState };
