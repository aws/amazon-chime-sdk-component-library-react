// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Components
export { Badge } from './components/ui/Badge';
export { Button } from './components/ui/Button/';
export { PrimaryButton } from './components/ui/Button/PrimaryButton';
export { SecondaryButton } from './components/ui/Button/SecondaryButton';
export { IconButton } from './components/ui/Button/IconButton';
export { Checkbox } from './components/ui/Checkbox';
export { ControlBar } from './components/ui/ControlBar';
export { ControlBarButton } from './components/ui/ControlBar/ControlBarItem';
export { Flex } from './components/ui/Flex';
export { FormField } from './components/ui/FormField';
export { Heading } from './components/ui/Heading';
export * from './components/ui/icons';
export { Input } from './components/ui/Input';
export { SearchInput } from './components/ui/Input/SearchInput';
export { InputWrapper } from './components/ui/Input/InputWrapper';
export { Label } from './components/ui/Label';
export { Modal } from './components/ui/Modal';
export { ModalBody } from './components/ui/Modal/ModalBody';
export { ModalButton } from './components/ui/Modal/ModalButton';
export { ModalButtonGroup } from './components/ui/Modal/ModalButtonGroup';
export { ModalHeader } from './components/ui/Modal/ModalHeader';
export { Navbar } from './components/ui/Navbar';
export { NavbarHeader } from './components/ui/Navbar/NavbarHeader';
export { NavbarItem } from './components/ui/Navbar/NavbarItem';
export { Notification } from './components/ui/Notification';
export { NotificationGroup } from './components/ui/NotificationGroup';
export { PopOver } from './components/ui/PopOver';
export { PopOverHeader } from './components/ui/PopOver/PopOverHeader';
export { PopOverItem } from './components/ui/PopOver/PopOverItem';
export { PopOverSeparator } from './components/ui/PopOver/PopOverSeparator';
export { PopOverSubMenu } from './components/ui/PopOver/PopOverSubMenu';
export { Portal } from './components/ui/Portal';
export { Radio } from './components/ui/Radio';
export { RadioGroup } from './components/ui/RadioGroup';
export { Select } from './components/ui/Select';
export { Textarea } from './components/ui/Textarea';
export { VideoGrid } from './components/ui/VideoGrid';
export { VideoTile } from './components/ui/VideoTile/';
export { Grid } from './components/ui/Grid';
export { Cell } from './components/ui/Grid/Cell';
export { Roster } from './components/ui/Roster';
export { RosterHeader } from './components/ui/Roster/RosterHeader';
export { RosterGroup } from './components/ui/Roster/RosterGroup';
export { RosterCell } from './components/ui/Roster/RosterCell';
export { UserActivityManager } from './components/ui/UserActivityManager';
export { ChannelList } from './components/ui/Chat/ChannelList';
export { ChannelItem } from './components/ui/Chat/ChannelList/ChannelItem';
export { ChatBubble } from './components/ui/Chat/ChatBubble';
export { EditableChatBubble } from './components/ui/Chat/ChatBubble/EditableChatBubble';
export { ChatBubbleContainer } from './components/ui/Chat/ChatBubble/ChatBubbleContainer';
export { InfiniteList } from './components/ui/Chat/InfiniteList';
export { MessageAttachment } from './components/ui/Chat/MessageAttachment';
export { formatDate, formatTime } from './components/ui/Utilities';

// SDK components
export {
  CameraSelection,
  MicSelection,
  SpeakerSelection,
  QualitySelection,
} from './components/sdk/DeviceSelection';
export {
  AudioInputControl,
  AudioOutputControl,
  ContentShareControl,
  VideoInputControl,
} from './components/sdk/MeetingControls';
export { ContentShare } from './components/sdk/ContentShare';
export { LocalVideo } from './components/sdk/LocalVideo';
export { PreviewVideo } from './components/sdk/PreviewVideo';
export { RemoteVideo } from './components/sdk/RemoteVideo';
export { RemoteVideos } from './components/sdk/RemoteVideos';
export { FeaturedRemoteVideos } from './components/sdk/FeaturedRemoteVideos';
export { VideoTileGrid } from './components/sdk/VideoTileGrid';
export { MicrophoneActivity } from './components/sdk/MicrophoneActivity';
export { RosterAttendee } from './components/sdk/RosterAttendee';

// Constants
export { KEY_CODES } from './constants';

// Contexts
export {
  ControlBarContext,
  useControlBarContext,
} from './components/ui/ControlBar/ControlBarContext';
export {
  ModalContext,
  useModalContext,
} from './components/ui/Modal/ModalContext';
export {
  useNotificationState,
  useNotificationDispatch,
} from './providers/NotificationProvider';
export { AudioVideoContext } from './providers/AudioVideoProvider';

// Hooks
export { useClickOutside } from './hooks/useClickOutside';
export { useTabOutside } from './hooks/useTabOutside';
export { useUniqueId } from './hooks/useUniqueId';
export { useFocusIn } from './hooks/useFocusIn';
export { useMouseMove } from './hooks/useMouseMove';
export { useApplyVideoObjectFit } from './hooks/useApplyVideoObjectFit';
export { useElementAspectRatio } from './hooks/useElementAspectRatio';

export { useMeetingManager } from './providers/MeetingProvider';
export { useAudioVideo } from './providers/AudioVideoProvider';
export { useRosterState } from './providers/RosterProvider';
export { useRemoteVideoTileState } from './providers/RemoteVideoTileProvider';
export { useFeaturedTileState } from './providers/FeaturedVideoTileProvider';
export {
  useAudioInputs,
  useVideoInputs,
  useAudioOutputs,
} from './providers/DevicesProvider';
export { useLocalAudioOutput } from './providers/LocalAudioOutputProvider';
export { useLocalVideo } from './providers/LocalVideoProvider';
export {
  useContentShareState,
  useContentShareControls,
} from './providers/ContentShareProvider';

// SDK Hooks
export { useAttendeeStatus } from './hooks/sdk/useAttendeeStatus';
export { useAttendeeAudioStatus } from './hooks/sdk/useAttendeeAudioStatus';
export { useSelectVideoQuality } from './hooks/sdk/useSelectVideoQuality';
export { useSelectVideoInputDevice } from './hooks/sdk/useSelectVideoInputDevice';
export { useActiveSpeakersState } from './hooks/sdk/useActiveSpeakersState';
export { useToggleLocalMute } from './hooks/sdk/useToggleLocalMute';
export { useMeetingStatus } from './hooks/sdk/useMeetingStatus';
export { useLocalAudioInputActivity } from './hooks/sdk/useLocalAudioInputActivity';
export { useLocalAudioInputActivityPreview } from './hooks/sdk/useLocalAudioInputActivityPreview';
export { useBandwidthMetrics } from './hooks/sdk/useBandwidthMetrics';

// Providers
export { NotificationProvider } from './providers/NotificationProvider';
export { MeetingProvider } from './providers/MeetingProvider';
export { LocalAudioOutputProvider } from './providers/LocalAudioOutputProvider';
export { LocalVideoProvider } from './providers/LocalVideoProvider';
export { ContentShareProvider } from './providers/ContentShareProvider';
export { AudioVideoProvider } from './providers/AudioVideoProvider';
export { RosterProvider } from './providers/RosterProvider';
export { DevicesProvider } from './providers/DevicesProvider';
export { RemoteVideoTileProvider } from './providers/RemoteVideoTileProvider';
export { FeaturedVideoTileProvider } from './providers/FeaturedVideoTileProvider';
export {
  UserActivityProvider,
  useUserActivityState,
} from './providers/UserActivityProvider';

// Themes
export { lightTheme, darkTheme, GlobalStyles, StyledReset } from './theme';

// Types
export { VideoQuality } from './hooks/sdk/useSelectVideoQuality';

// enums
export { MeetingStatus } from './types/index';
export { Severity, ActionType } from './providers/NotificationProvider';

// Class
export { MeetingManager } from './providers/MeetingProvider/MeetingManager';

// Interface
export { NotificationType, Action } from './providers/NotificationProvider';

// Utilities
export { Versioning } from './versioning/Versioning';
