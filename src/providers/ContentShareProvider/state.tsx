// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { VideoTileState } from 'amazon-chime-sdk-js';

import { AttendeeMap, TileMap } from '../../types';

export enum ContentActionType {
  STARTING,
  DID_STOP,
  UPDATE,
  TOGGLE_PAUSE,
  REMOVE,
  DENIED,
  RESET,
  UPDATE_CAN_START,
}

type EmptyPayload = Record<string, never>;

type StartingPayload = EmptyPayload;
type DidStopPayload = {
  localAttendeeId: string;
};
type UpdatePayload = {
  isLocalUser: boolean;
  tileState: VideoTileState;
};
type TogglePausePayload = EmptyPayload;
type RemovePayload = {
  tileId: number;
  isLocalUser: boolean;
};
type DeniedPayload = EmptyPayload;
type ResetPayload = EmptyPayload;
type UpdateCanStartPayload = {
  maxContentShares: number;
};

// Action types
export type Action =
  | { type: ContentActionType.STARTING; payload?: StartingPayload }
  | { type: ContentActionType.DID_STOP; payload: DidStopPayload }
  | { type: ContentActionType.UPDATE; payload: UpdatePayload }
  | { type: ContentActionType.TOGGLE_PAUSE; payload?: TogglePausePayload }
  | { type: ContentActionType.REMOVE; payload: RemovePayload }
  | { type: ContentActionType.DENIED; payload?: DeniedPayload }
  | { type: ContentActionType.RESET; payload?: ResetPayload }
  | {
      type: ContentActionType.UPDATE_CAN_START;
      payload: UpdateCanStartPayload;
    };

/**
 * ContentShareState represents the state of content sharing in a meeting.
 * It includes both backward compatibility properties for single content share
 * and new properties for supporting multiple content shares.
 */
export type ContentShareState = {
  paused: boolean;
  isLocalShareLoading: boolean;
  isLocalUserSharing: boolean;
  canStartContentShare: boolean;

  /**
   * @deprecated Use tiles, tileIdToAttendeeId, and attendeeIdToTileId instead.
   * This will be removed in a future version.
   */
  tileId: number | null;

  /**
   * @deprecated Use tiles, tileIdToAttendeeId, and attendeeIdToTileId instead.
   * This will be removed in a future version.
   */
  sharingAttendeeId: string | null;

  tiles: number[];
  tileIdToAttendeeId: TileMap;
  attendeeIdToTileId: AttendeeMap;
};

export const initialState: ContentShareState = {
  paused: false,
  isLocalUserSharing: false,
  isLocalShareLoading: false,
  canStartContentShare: true,
  tileId: null,
  sharingAttendeeId: null,
  tiles: [],
  tileIdToAttendeeId: {},
  attendeeIdToTileId: {},
};

const addTileToCollections = (
  state: ContentShareState,
  tileId: number,
  attendeeId: string
): {
  tiles: number[];
  tileIdToAttendeeId: TileMap;
  attendeeIdToTileId: AttendeeMap;
} => {
  return {
    tiles: [...state.tiles, tileId],
    tileIdToAttendeeId: {
      ...state.tileIdToAttendeeId,
      [tileId.toString()]: attendeeId,
    },
    attendeeIdToTileId: {
      ...state.attendeeIdToTileId,
      [attendeeId]: tileId,
    },
  };
};

const removeTileFromCollections = (
  state: ContentShareState,
  tileId: number
): {
  tiles: number[];
  tileIdToAttendeeId: TileMap;
  attendeeIdToTileId: AttendeeMap;
  removedAttendeeId: string | undefined;
} => {
  const attendeeId = state.tileIdToAttendeeId[tileId.toString()];

  if (!attendeeId) {
    return {
      tiles: state.tiles,
      tileIdToAttendeeId: state.tileIdToAttendeeId,
      attendeeIdToTileId: state.attendeeIdToTileId,
      removedAttendeeId: undefined,
    };
  }

  const newTiles = state.tiles.filter((id) => id !== tileId);

  const newTileIdToAttendeeId = { ...state.tileIdToAttendeeId };
  delete newTileIdToAttendeeId[tileId.toString()];

  const newAttendeeIdToTileId = { ...state.attendeeIdToTileId };
  delete newAttendeeIdToTileId[attendeeId];

  return {
    tiles: newTiles,
    tileIdToAttendeeId: newTileIdToAttendeeId,
    attendeeIdToTileId: newAttendeeIdToTileId,
    removedAttendeeId: attendeeId,
  };
};

const handleBackwardCompatibilityForDeprecatedProps = (
  state: ContentShareState,
  tiles: number[],
  tileIdToAttendeeId: TileMap,
  removedAttendeeId?: string
): {
  tileId: number | null;
  sharingAttendeeId: string | null;
} => {
  // If the removed attendee is not the current sharing attendee, keep the current values
  if (removedAttendeeId && removedAttendeeId !== state.sharingAttendeeId) {
    return {
      tileId: state.tileId,
      sharingAttendeeId: state.sharingAttendeeId,
    };
  }

  // If there are no tiles left, set both to null
  if (tiles.length === 0) {
    return {
      tileId: null,
      sharingAttendeeId: null,
    };
  }

  // Find the tile with the highest ID to maintain backward compatibility
  // Ensure tileId and sharingAttendeeId point to the most recently started content share
  // New created tile Id has higher tileId
  // eslint-disable-next-line max-len
  // Ref: https://github.com/aws/amazon-chime-sdk-js/blob/7b0bca1be2ba848cb5833aa3013d16dd39c9920a/src/videotilecontroller/DefaultVideoTileController.ts#L181
  const highestTileId = Math.max(...tiles);
  return {
    tileId: highestTileId,
    sharingAttendeeId: tileIdToAttendeeId[highestTileId.toString()],
  };
};

export function reducer(
  state: ContentShareState,
  { type, payload }: Action
): ContentShareState {
  switch (type) {
    case ContentActionType.STARTING: {
      return {
        ...state,
        isLocalShareLoading: true,
      };
    }
    case ContentActionType.UPDATE: {
      const { isLocalUser, tileState } = payload;
      const tileIdToUpdate = tileState.tileId!;
      const attendeeIdToUpdate = tileState.boundAttendeeId!;

      // Skip updates to existing content share tiles
      // This ensures we only process new content shares and ignore updates to existing ones
      // (such as video quality changes, pauses/resumes at the video tile level, etc.)
      if (state.tileIdToAttendeeId[tileIdToUpdate.toString()]) {
        return state;
      }

      const collections = addTileToCollections(
        state,
        tileIdToUpdate,
        attendeeIdToUpdate
      );

      const deprecatedProps = handleBackwardCompatibilityForDeprecatedProps(
        state,
        collections.tiles,
        collections.tileIdToAttendeeId
      );

      return {
        ...state,
        ...collections,
        ...deprecatedProps,
        isLocalShareLoading: isLocalUser ? false : state.isLocalShareLoading,
        isLocalUserSharing: isLocalUser ? true : state.isLocalUserSharing,
      };
    }
    case ContentActionType.REMOVE: {
      const { tileId: tileIdToRemove, isLocalUser } = payload;

      const {
        tiles,
        tileIdToAttendeeId,
        attendeeIdToTileId,
        removedAttendeeId,
      } = removeTileFromCollections(state, tileIdToRemove);

      if (!removedAttendeeId) {
        return state;
      }

      const deprecatedProps = handleBackwardCompatibilityForDeprecatedProps(
        state,
        tiles,
        tileIdToAttendeeId,
        removedAttendeeId
      );

      return {
        ...state,
        tiles,
        tileIdToAttendeeId,
        attendeeIdToTileId,
        ...deprecatedProps,
        isLocalUserSharing: isLocalUser ? false : state.isLocalUserSharing,
        paused: isLocalUser ? false : state.paused,
      };
    }
    case ContentActionType.DID_STOP: {
      const { isLocalUserSharing } = state;
      const { localAttendeeId } = payload;

      if (isLocalUserSharing) {
        // If local user stopped sharing, remove their content share
        const localAttendeeTileId = state.attendeeIdToTileId[localAttendeeId];

        if (localAttendeeTileId) {
          const {
            tiles,
            tileIdToAttendeeId,
            attendeeIdToTileId,
            removedAttendeeId,
          } = removeTileFromCollections(state, localAttendeeTileId);

          const deprecatedProps = handleBackwardCompatibilityForDeprecatedProps(
            state,
            tiles,
            tileIdToAttendeeId,
            removedAttendeeId
          );

          return {
            ...state,
            tiles,
            tileIdToAttendeeId,
            attendeeIdToTileId,
            ...deprecatedProps,
            isLocalUserSharing: false,
            paused: false,
            isLocalShareLoading: false,
          };
        }
      }

      return {
        ...state,
        isLocalShareLoading: false,
        isLocalUserSharing: false,
        paused: false,
      };
    }
    case ContentActionType.TOGGLE_PAUSE: {
      if (!state.isLocalUserSharing) {
        return state;
      }

      return {
        ...state,
        paused: !state.paused,
      };
    }
    case ContentActionType.DENIED: {
      if (!state.isLocalShareLoading) {
        return state;
      }

      return {
        ...state,
        isLocalShareLoading: false,
      };
    }

    case ContentActionType.RESET: {
      return initialState;
    }
    case ContentActionType.UPDATE_CAN_START: {
      const { maxContentShares } = payload;
      return {
        ...state,
        canStartContentShare:
          !state.isLocalUserSharing && state.tiles.length < maxContentShares,
      };
    }
    default:
      throw new Error('Incorrect type in ContentShareProvider');
  }
}
