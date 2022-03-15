import { RosterAttendeeType } from 'amazon-chime-sdk-component-library-react';
import {VideoPriorityBasedPolicy, VideoSource} from 'amazon-chime-sdk-js';
import { Layout } from '../../types';
import { isContentShare, updateDownlinkPreferences } from './Utils';

export interface GridState {
  layout: Layout;
  isZoomed: boolean;
  threshold: number;
}

export interface AttendeeState {
  attendeeId: string;
  name: string;
  videoEnabled: boolean;
  bandwidthConstrained: boolean;
}

export interface VideoSourceState {
  cameraSources: string[];
  activeSpeakersWithCameraSource: string[];
  contentShareId: string | null;
  hasLocalVideo: boolean;
  hasLocalContentSharing: boolean;
}

export type State = {
  gridState: GridState;
  attendeeStates: { [attendeeId: string]: AttendeeState };
  videoSourceState: VideoSourceState;
  priorityBasedPolicy: VideoPriorityBasedPolicy | undefined;
};

export const initialState: State = {
  gridState: {
    layout: Layout.Gallery,
    isZoomed: false,
    threshold: 8,
  },
  attendeeStates: {},
  videoSourceState: {
    cameraSources: [],
    activeSpeakersWithCameraSource: [],
    contentShareId: null,
    hasLocalVideo: false,
    hasLocalContentSharing: false,
  },
  priorityBasedPolicy: undefined,
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};

export type Controls = {
  zoomIn: () => void;
  zoomOut: () => void;
};

export enum VideoTileGridAction {
  UpdateAttendeeStates,
  UpdateVideoSources,
  UpdateActiveSpeakers,
  UpdateLocalSourceState,
  UpdateLayout,
  PauseVideoTile,
  UnpauseVideoTile,
  ZoomIn,
  ZoomOut,
  SetPriorityBasedPolicy,
}

type SetPriorityBasedPolicy = {
  type: VideoTileGridAction.SetPriorityBasedPolicy;
  payload: {
    policy: VideoPriorityBasedPolicy | undefined;
  };
}

type UpdateVideoSources = {
  type: VideoTileGridAction.UpdateVideoSources;
  payload: {
    videoSources: VideoSource[];
    localAttendeeId: string | null;
  };
};

type UpdateActiveSpeakers = {
  type: VideoTileGridAction.UpdateActiveSpeakers;
  payload: {
    activeSpeakers: string[];
  };
};

type UpdateLayout = {
  type: VideoTileGridAction.UpdateLayout;
  payload: {
    layout: Layout;
  };
};

type UpdateAttendeeStates = {
  type: VideoTileGridAction.UpdateAttendeeStates;
  payload: {
    roster: RosterType;
  };
};

type UpdateLocalSourceState = {
  type: VideoTileGridAction.UpdateLocalSourceState;
  payload: {
    isVideoEnabled: boolean;
    localAttendeeId: string | null;
    isLocalUserSharing: boolean;
    sharingAttendeeId: string | null;
  };
};

type PauseVideoTile = {
  type: VideoTileGridAction.PauseVideoTile;
  payload: {
    attendeeId: string;
  };
};

type UnpauseVideoTile = {
  type: VideoTileGridAction.UnpauseVideoTile;
  payload: {
    attendeeId: string;
  };
};

type ZoomIn = {
  type: VideoTileGridAction.ZoomIn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

type ZoomOut = {
  type: VideoTileGridAction.ZoomOut;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export type Action =
  | SetPriorityBasedPolicy
  | UpdateVideoSources
  | UpdateLayout
  | UpdateAttendeeStates
  | UpdateLocalSourceState
  | UpdateActiveSpeakers
  | PauseVideoTile
  | UnpauseVideoTile
  | ZoomIn
  | ZoomOut;

export function reducer(state: State, { type, payload }: Action): State {
  const { gridState, attendeeStates, videoSourceState, priorityBasedPolicy } = state;

  switch (type) {
  case VideoTileGridAction.UpdateAttendeeStates: {
    const { roster } = payload;

    // Remove attendee that left the meeting
    for (const attendeeId in attendeeStates) {
      if (!isContentShare(attendeeId) && !(attendeeId in roster)) {
        delete attendeeStates[attendeeId];
      }
    }

    // Add attendee that joined the meeting
    for (const attendeeId in roster) {
      const name = roster[attendeeId]?.name || '';

      if (attendeeId in attendeeStates) {
        attendeeStates[attendeeId].name = name;
      } else {
        attendeeStates[attendeeId] = {
          attendeeId,
          name,
          videoEnabled: false,
          bandwidthConstrained: false,
        } as AttendeeState;
      }
    }

    // Ensure the state of `videoEnabled` in the racing condition of UpdateAttendeeStates and UpdateVideoSources
    for (const attendeeId of videoSourceState.cameraSources) {
      if (attendeeId in attendeeStates) {
        attendeeStates[attendeeId].videoEnabled = true;
      }
    }

    return {
      ...state,
      attendeeStates,
    };
  }

  case VideoTileGridAction.UpdateVideoSources: {
    const { videoSources, localAttendeeId } = payload as { videoSources: VideoSource[]; localAttendeeId: string | null };
    const cameraSources: string[] = [];
    const videoSourceIdSet = new Set(
      videoSources.map(videoSource => videoSource.attendee.attendeeId)
    );

    for (const attendeeId in attendeeStates) {
      // Reset the `videoEnabled` for all remote attendees
      if (!localAttendeeId || attendeeId !== localAttendeeId) {
        attendeeStates[attendeeId].videoEnabled = false;
      }

      // Remove content share from attendeeStates,
      // if content share is not in video sources
      if (
        isContentShare(attendeeId) &&
          !videoSourceIdSet.has(attendeeId)
      ) {
        delete attendeeStates[attendeeId];
      }
    }

    // Update the `videoEnabled` according to `videoSources`
    for (const attendeeId of videoSourceIdSet) {
      if (!(attendeeId in attendeeStates)) {
        if (isContentShare(attendeeId)) {
          attendeeStates[attendeeId] = {
            attendeeId,
            name: 'content share',
            bandwidthConstrained: false,
          } as AttendeeState;
        } else {
          attendeeStates[attendeeId] = {
            attendeeId,
            name: '',
            bandwidthConstrained: false,
          } as AttendeeState;
        }
      }

      attendeeStates[attendeeId].videoEnabled = true;
    }

    // Populate the `cameraSources` based on the order of `attendeeStates`
    for (const attendeeId in attendeeStates) {
      const attendee = attendeeStates[attendeeId];

      if (
        attendee.videoEnabled &&
          !isContentShare(attendee.attendeeId) &&
          attendee.attendeeId !== localAttendeeId
      ) {
        cameraSources.push(attendee.attendeeId);
      }
    }

    // Remove the attendee from `activeSpeakersWithCameraSource`,
    // if this attendee close the camera while still active
    for (const attendeeId in videoSourceState.activeSpeakersWithCameraSource) {
      if (!attendeeStates[attendeeId]?.videoEnabled) {
        videoSourceState.activeSpeakersWithCameraSource.filter(id => id !== attendeeId);
      }
    }

    videoSourceState.cameraSources = cameraSources;
    updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);

    return {
      ...state,
      attendeeStates,
      videoSourceState,
    };
  }

  case VideoTileGridAction.UpdateActiveSpeakers: {
    const { activeSpeakers } = payload;
    const activeSpeakersWithCameraSource = [];
    const { cameraSources } = videoSourceState;

    for (const attendeeId of activeSpeakers) {
      if (
        attendeeStates[attendeeId]?.videoEnabled &&
          cameraSources.includes(attendeeId)
      ) {
        activeSpeakersWithCameraSource.push(attendeeId);
      }
    }

    videoSourceState.activeSpeakersWithCameraSource = activeSpeakersWithCameraSource;
    updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);

    return {
      ...state,
      videoSourceState,
    };
  }

  case VideoTileGridAction.UpdateLocalSourceState: {
    const {
      isVideoEnabled,
      localAttendeeId,
      isLocalUserSharing,
      sharingAttendeeId,
    } = payload;

    videoSourceState.hasLocalVideo = isVideoEnabled;
    videoSourceState.hasLocalContentSharing = isLocalUserSharing;
    videoSourceState.contentShareId = sharingAttendeeId;

    if (localAttendeeId && localAttendeeId in attendeeStates) {
      attendeeStates[localAttendeeId].videoEnabled = isVideoEnabled;
    }

    updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);

    return {
      ...state,
      attendeeStates,
      videoSourceState,
    };
  }

  case VideoTileGridAction.UpdateLayout: {
    const { layout } = payload;
    gridState.layout = layout;
    updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);

    return {
      ...state,
      gridState,
    };
  }

  case VideoTileGridAction.PauseVideoTile: {
    const { attendeeId } = payload;
    if (attendeeId in attendeeStates) {
      attendeeStates[attendeeId].bandwidthConstrained = true;
    }

    return {
      ...state,
      attendeeStates,
    };
  }

  case VideoTileGridAction.UnpauseVideoTile: {
    const { attendeeId } = payload;
    if (attendeeId in attendeeStates) {
      attendeeStates[attendeeId].bandwidthConstrained = false;
    }

    return {
      ...state,
      attendeeStates,
    };
  }

  case VideoTileGridAction.ZoomIn: {
    const { threshold } = gridState;
    const { cameraSources, hasLocalVideo } = videoSourceState;
    const numberOfTiles = cameraSources.length + (hasLocalVideo ? 1 : 0);

    if (numberOfTiles > threshold) {
      gridState.isZoomed = true;
      updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);
    }

    return {
      ...state,
      gridState,
    };
  }

  case VideoTileGridAction.ZoomOut: {
    if (gridState.isZoomed) {
      gridState.isZoomed = false;
      updateDownlinkPreferences(gridState, videoSourceState, attendeeStates, priorityBasedPolicy);
    }

    return {
      ...state,
    };
  }

  case VideoTileGridAction.SetPriorityBasedPolicy: {
    const { policy } = payload as { policy: VideoPriorityBasedPolicy | undefined};

    return {
      ...state,
      ...{ priorityBasedPolicy: policy },
    };
  }

  default:
    throw new Error('Incorrect type in VideoTileGridProvider');
  }
}
