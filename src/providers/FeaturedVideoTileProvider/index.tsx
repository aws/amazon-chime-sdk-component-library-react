// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useRef
} from 'react';

import { useActiveSpeakers } from '../ActiveSpeakersProvider';
import { useVideoTileState } from '../VideoTileProvider';

const FeaturedTileContext = createContext<number | null>(null);

const FeaturedVideoTileProvider: React.FC = ({ children }) => {
  const { attendeeIdToTileId } = useVideoTileState();
  const activeAttendees = useActiveSpeakers();
  const activeTileRef = useRef<number | null>(null);
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const activeId = activeAttendees[0];

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
        timeout.current = setTimeout(() => {
          activeTileRef.current = null;
          setActiveTile(null);
        }, 2500);
      }

      return;
    }

    if (tileId === activeTileRef.current) {
      return;
    }

    activeTileRef.current = tileId;
    setActiveTile(tileId);
  }, [attendeeIdToTileId, activeAttendees]);

  return (
    <FeaturedTileContext.Provider value={activeTile}>
      {children}
    </FeaturedTileContext.Provider>
  );
};

function useFeaturedTile(): number | null {
  const featuredTile = useContext(FeaturedTileContext);

  if (featuredTile === undefined) {
    throw new Error(
      'useFeaturedTile must be used within an FeaturedVideoTileProvider'
    );
  }

  return featuredTile;
}

export { FeaturedVideoTileProvider, useFeaturedTile };
