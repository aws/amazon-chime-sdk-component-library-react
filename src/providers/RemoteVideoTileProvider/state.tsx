// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

type tileMap = {
  [key: string]: string;
};

type attendeeMap = {
  [key: string]: number;
};

export type State = {
  tiles: number[];
  tileIdToAttendeeId: tileMap;
  attendeeIdToTileId: attendeeMap;
  size: number;
};

export enum VideoTileActionType {
  UPDATE,
  REMOVE,
  RESET,
}

type UpdateAction = {
  type: VideoTileActionType.UPDATE;
  payload: {
    tileId: number;
    attendeeId: string;
  };
};

type RemoveAction = {
  type: VideoTileActionType.REMOVE;
  payload: {
    tileId: number;
    attendeeId?: string;
  };
};

type ResetAction = {
  type: VideoTileActionType.RESET;
  payload?: any;
};

export type Action = UpdateAction | RemoveAction | ResetAction;

export const initialState: State = {
  tiles: [],
  tileIdToAttendeeId: {},
  attendeeIdToTileId: {},
  size: 0,
};

const removeProperty = (obj: { [key: string]: any }, property: string) => {
  const newState = Object.assign({}, obj);
  delete newState[property];
  return newState;
};

export function reducer(state: State, { type, payload }: Action): State {
  const { tiles, tileIdToAttendeeId, attendeeIdToTileId, size } = state;

  switch (type) {
    case VideoTileActionType.UPDATE: {
      const { tileId, attendeeId = '' } = payload;
      const tileStr = tileId.toString();
      const isPresent = tileIdToAttendeeId[tileStr];

      if (isPresent) {
        return state;
      }

      const newTiles = [...tiles, tileId];
      const tileIds = {
        ...tileIdToAttendeeId,
        [tileStr]: attendeeId,
      };
      const attendeeIds = {
        ...attendeeIdToTileId,
        [attendeeId]: tileId,
      };

      return {
        tiles: newTiles,
        tileIdToAttendeeId: tileIds,
        attendeeIdToTileId: attendeeIds,
        size: size + 1,
      };
    }
    case VideoTileActionType.REMOVE: {
      const { tileId } = payload;
      const attendeeId = tileIdToAttendeeId[tileId];
      const tileStr = tileId.toString();

      if (!attendeeId) {
        return state;
      }

      const newTiles = tiles.filter((id) => tileId !== id);
      const tileIds = removeProperty(tileIdToAttendeeId, tileStr);
      const attendeeIds = removeProperty(attendeeIdToTileId, attendeeId);

      return {
        tiles: newTiles,
        tileIdToAttendeeId: tileIds,
        attendeeIdToTileId: attendeeIds,
        size: size - 1,
      };
    }
    case VideoTileActionType.RESET: {
      return initialState;
    }
    default:
      throw new Error('Incorrect type in VideoProvider');
  }
}
