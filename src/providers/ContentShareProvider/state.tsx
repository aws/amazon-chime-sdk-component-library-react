// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { VideoTileState } from 'amazon-chime-sdk-js';

export enum ContentActionType {
  STARTING,
  DID_STOP,
  UPDATE,
  TOGGLE_PAUSE,
  REMOVE,
  DENIED,
  RESET,
}

type StartingAction = {
  type: ContentActionType.STARTING;
  payload?: any;
};

type DidStopAction = {
  type: ContentActionType.DID_STOP;
  payload?: any;
};

type UpdateAction = {
  type: ContentActionType.UPDATE;
  payload: UpdatePayload;
};

type UpdatePayload = {
  isLocalUser: boolean;
  tileState: VideoTileState;
};

type TogglePauseAction = {
  type: ContentActionType.TOGGLE_PAUSE;
  payload?: any;
};

type RemoveAction = {
  type: ContentActionType.REMOVE;
  payload: number;
};

type DeniedAction = {
  type: ContentActionType.DENIED;
  payload?: any;
};

type ResetAction = {
  type: ContentActionType.RESET;
  payload?: any;
};

export type Action =
  | StartingAction
  | DidStopAction
  | UpdateAction
  | TogglePauseAction
  | RemoveAction
  | DeniedAction
  | ResetAction;

export type ContentShareState = {
  tileId: number | null;
  paused: boolean;
  isLocalShareLoading: boolean;
  isLocalUserSharing: boolean;
  sharingAttendeeId: string | null;
};

export const initialState: ContentShareState = {
  tileId: null,
  paused: false,
  isLocalUserSharing: false,
  isLocalShareLoading: false,
  sharingAttendeeId: null,
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
      const { isLocalUser, tileState } = payload as UpdatePayload;
      const { tileId } = state;

      if (
        tileId === tileState.tileId ||
        (tileId && tileId > tileState.tileId!)
      ) {
        return state;
      }

      return {
        paused: false,
        tileId: tileState.tileId!,
        isLocalShareLoading: false,
        isLocalUserSharing: isLocalUser,
        sharingAttendeeId: tileState.boundAttendeeId,
      };
    }
    case ContentActionType.REMOVE: {
      const { tileId } = state;

      if (tileId !== payload) {
        return state;
      }

      return initialState;
    }
    case ContentActionType.DID_STOP: {
      const { isLocalUserSharing } = state;

      if (isLocalUserSharing) {
        return initialState;
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
    default:
      throw new Error('Incorrect type in VideoProvider');
  }
}
