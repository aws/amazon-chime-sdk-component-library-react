export enum VidelTileType {
  TILE_UPDATED,
  TILE_DELETED,
}

interface Action {
  type: VidelTileType;
  payload: any;
}

export const initialState = {
  state: {},
  localVideoId: "",
  remoteVideoId: "",
  attendeeName: "",
};

export function reducer(state: any | null, action: Action) {
  switch (action.type) {
    case VidelTileType.TILE_UPDATED: {
      const { tileId, ...rest } = action.payload;
      return {
        ...state,
        [tileId!]: {
          ...rest,
        },
        [state[tileId]?.localTile ? 'localVideoId' : 'remoteVideoId']: tileId
      };
    }
    case VidelTileType.TILE_DELETED: {
      const { [action.payload]: omit, ...rest } = state;
      return {
        ...rest,
      };
    }
    default: {
      return state;
    }
  }
}
  