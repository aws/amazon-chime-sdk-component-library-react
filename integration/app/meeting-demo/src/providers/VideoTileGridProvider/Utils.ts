import {
  DefaultModality,
  TargetDisplaySize,
  VideoPreference,
  VideoPreferences,
  VideoPriorityBasedPolicy,
} from 'amazon-chime-sdk-js';
import { Layout } from '../../types';
import { AttendeeState, GridState, VideoSourceState } from './state';

type VideoSourceWithType = { attendeeId: string; type: VideoSourceType };

enum VideoSourceType {
  CONTENT_SHARE = 'contentShare',
  ACTIVE_SPEAKER = 'activeSpeaker',
  OTHER = 'other',
}

export const isContentShare = (sourceId: string): boolean =>
  new DefaultModality(sourceId).hasModality(DefaultModality.MODALITY_CONTENT);

export const calculateVideoSourcesToBeRendered = (
  gridState: GridState,
  videoSourceState: VideoSourceState,
  attendeeStates: { [attendeeId: string]: AttendeeState }
): VideoSourceWithType[] => {
  const { layout, isZoomed, threshold } = gridState;
  const {
    activeSpeakersWithCameraSource,
    cameraSources,
    contentShareId,
    hasLocalVideo,
  } = videoSourceState;
  const videoSources: VideoSourceWithType[] = [];
  let commonSources: string[];

  // First, add content share
  for (const attendeeId of Object.keys(attendeeStates)) {
    if (isContentShare(attendeeId) && attendeeStates[attendeeId].videoEnabled) {
      videoSources.push({ attendeeId, type: VideoSourceType.CONTENT_SHARE });
    }
  }

  // Second, add active speakers
  let activeSpeakers: string[] = [];
  let maximumNumberOfActiveSpeakers = 0;

  if (activeSpeakersWithCameraSource.length > 0) {

    if (layout === Layout.Gallery) {
      maximumNumberOfActiveSpeakers = 1;
    }
    if (layout === Layout.Featured) {
      maximumNumberOfActiveSpeakers =
        4 - (hasLocalVideo ? 1 : 0) - (contentShareId ? 1 : 0);
    }

    activeSpeakers = activeSpeakersWithCameraSource.slice(0, maximumNumberOfActiveSpeakers);

    videoSources.push(
      ...activeSpeakers.map(attendeeId => ({
        attendeeId,
        type: VideoSourceType.ACTIVE_SPEAKER,
      }))
    );

    commonSources = cameraSources.filter(
      id => !activeSpeakers.includes(id)
    );
  } else {
    commonSources = cameraSources;
  }


  // Last, add common video sources
  let gridSize = 0;

  if (layout === Layout.Gallery) {
    if (isZoomed) {
      gridSize = threshold;
    } else {
      gridSize = Number.MAX_SAFE_INTEGER;
    }
  }

  if (layout === Layout.Featured) {
    gridSize = 4;
  }

  const numberOfAvailableTiles = gridSize - (hasLocalVideo ? 1 : 0) - (contentShareId ? 1 : 0) - activeSpeakers.length;

  videoSources.push(
    ...commonSources
      .slice(0, numberOfAvailableTiles)
      .map(attendeeId => ({ attendeeId, type: VideoSourceType.OTHER }))
  );

  return videoSources;
};

export const updateDownlinkPreferences = (
  gridState: GridState,
  videoSourceState: VideoSourceState,
  attendeeStates: { [attendeeId: string]: AttendeeState },
  priorityBasedPolicy: VideoPriorityBasedPolicy | undefined
): void => {

  if (!priorityBasedPolicy) {
    return;
  }
  const { layout, threshold } = gridState;
  const { hasLocalVideo } = videoSourceState;
  const videoPreferences = VideoPreferences.prepare();
  let targetDisplaySize: TargetDisplaySize;

  const videoSourcesToBeRendered = calculateVideoSourcesToBeRendered(
    gridState,
    videoSourceState,
    attendeeStates
  );

  const numberOfTiles =
    videoSourcesToBeRendered.length + (hasLocalVideo ? 1 : 0);

  if (numberOfTiles <= threshold) {
    targetDisplaySize = TargetDisplaySize.High;
  } else {
    targetDisplaySize = TargetDisplaySize.Low;
  }

  for (const videoSource of videoSourcesToBeRendered) {
    const { attendeeId, type } = videoSource;

    switch (type) {
    case VideoSourceType.CONTENT_SHARE:
      videoPreferences.add(
        new VideoPreference(attendeeId, 1, TargetDisplaySize.High)
      );
      break;

    case VideoSourceType.ACTIVE_SPEAKER:
      videoPreferences.add(
        new VideoPreference(
          attendeeId,
          1,
          layout === Layout.Featured
            ? TargetDisplaySize.High
            : targetDisplaySize
        )
      );
      break;

    default:
      videoPreferences.add(
        new VideoPreference(attendeeId, 2, targetDisplaySize)
      );
      break;
    }
  }
  priorityBasedPolicy.chooseRemoteVideoSources(videoPreferences.build());
};
