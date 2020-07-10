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

// SDK components
export { RemoteVideos } from './components/sdk/RemoteVideos';
export { DeviceSelection } from './components/sdk/DeviceSelection';
export { 
  AudioInputControl, 
  AudioOutputControl, 
  ContentShareControl, 
  VideoInputControl 
} from './components/sdk/MeetingControlsContainer';
export { ContentShare } from './components/sdk/ContentShare';
export { LocalVideo } from './components/sdk/LocalVideo';

// Constants
export { KEY_CODES } from './constants';

// Contexts
export {
  ControlBarContext,
  useControlBarContext
} from './components/ui/ControlBar/ControlBarContext';
export {
  ModalContext,
  useModalContext
} from './components/ui/Modal/ModalContext';
export {
  useNotificationStateContext,
  useNotificationDispatchContext
} from './providers/NotificationProvider';

// Hooks
export { useClickOutside } from './hooks/useClickOutside';
export { useTabOutside } from './hooks/useTabOutside';
export { useUniqueId } from './hooks/useUniqueId';

export { useAttendeeStatus } from './hooks/sdk/useAttendeeStatus';
export { useAttendeeAudioStatus } from './hooks/sdk/useAttendeeAudioStatus';
export { useActiveSpeaker } from './hooks/sdk/useActiveSpeaker';
export { useSelectVideoQuality } from './hooks/sdk/useSelectVideoQuality';

export { useMeetingManager } from './providers/MeetingProvider';
export { useAudioVideo } from './providers/AudioVideoProvider';
export { useRoster } from './providers/RosterProvider';
export { useVideoTileState } from './providers/VideoTileProvider';
export {
  useAudioInputs,
  useVideoInputs,
  useAudioOutputs
} from './providers/DevicesProvider';
export { useToggleLocalMute } from './hooks/sdk/useToggleLocalMute';
export { useLocalAudioOutput } from './providers/LocalAudioOutputProvider';
export { useLocalVideoToggle } from './providers/LocalVideoToggleProvider';
export { useContentShare } from './providers/ContentShareProvider';
export { useContentShareControls } from './providers/ContentShareControlProvider';
export { useMeetingStatus } from './providers/MeetingStatusProvider';

// Providers
export { NotificationProvider } from './providers/NotificationProvider';
export { MeetingProvider } from './providers/MeetingProvider';
export { LocalAudioOutputProvider } from './providers/LocalAudioOutputProvider';
export { LocalVideoToggleProvider } from './providers/LocalVideoToggleProvider';
export { ContentShareProvider } from './providers/ContentShareProvider';
export { ContentShareControlProvider } from './providers/ContentShareControlProvider';
export { MeetingStatusProvider } from './providers/MeetingStatusProvider';

// Themes
export { lightTheme, darkTheme, GlobalStyles, StyledReset } from './theme';

// Types
export { VideoQuality } from './hooks/sdk/useSelectVideoQuality';

// enums
export { MeetingStatus } from './providers/MeetingStatusProvider';