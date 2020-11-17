# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed

- Fixed ModalBody component to allow custom classNames
- Fixed PopOver components to allow custom classNames
- Fixed small visual errors in chat componnets.
- Fixed broken snapshot tests for Badge component.
- Fixed slight spacing issue in ChatBubbleContainer.
- Fixed issue where checkmark in PopOverItem wouldn't change on hover/focus.
- Removed unused import in ChatBubble component.

### Added

- Added Lock and Pin icons
- Export Chat components and utilities
- Added Attachment, Dock, and Emoji picker icons

### Changed

- Changed ChatBubbleContainer props to be more flexible.
- Changed Record icon
- Slight style changes to Modal and PopOver components.
- Changed Badge props to be more flexible.
- Changed PopOver component styling.

### Removed

- Removed DateHeader component

## [1.4.0] - 2020-11-06

### Fixed

- Docs rename variable `rosterArray` from the attendees list to `attendees`
- Add base styles to ChannelList
- Fixed createChatBubbleList unit test that was incorrectly named and not running
- Fixed TS error inside /InfiniteList/index.tsx.

### Added

- Add `tabIndex` to BaseProps
- Add `Like`, `Dislike`, `Feedback` icons
- Add `isSelected` prop to NavBarItem
- Add optional children to RosterHeader for custom element rendering
- Add optional `icon` property for `Radio` and `RadioGroup` to allow for rendering an icon instead of a label
- Add Document icon and MessageAttachment components.
- Add stories and tests for all ChatBubble components.
- Add class to DateHeader component.
- Add Attachment icon
- Added passthrough for a react node in the subtitle of PopOverHeader
- Add `buttonProps` passthrough for `RosterCell` and `PopOverMenu`

### Changed

- Changed ChannelList props to accept and children instead of PopOverItem props.
- Added extra scroll functionality to the InfiniteList component when a new message is sent.
- Changed Message type to only include needed properties.
- Changed ChatBubble to composed components to support redact and edit.
- Changed RosterCell to support extra icons and menus when running late
- Changed ChatBubble component props for simplicity.

### Removed

- Removed createChatBubbleList function.
- Removed exports and stories for unreleased chat components

## [1.3.0] - 2020-10-09

### Fixed

- Fixed `useToggleLocalMute` not working when mounted before audioVideo initialized
- Fixed missing `audioVideo` deps in `useLocalAudioInputActivityPreview`
- Fixed `leadingIcon` alignment in `SearchInput`
- Rename icon (ContentShare > ScreenShare) to fix conflicting names
- Remove unused import in Select
- Temporarily removed ChannelList component snapshot test
- [Demo] Fixed so a user leaves a meeting when they press the back button in the browser or navigate back to home

### Added

- Add `useLocalAudioInputActivityPreview` hook for direct access to microphone input value
- Add chat message component
- Add `isSelected` prop to `ControlBarButton` component
- Add `UpAndDownCaret` icon component
- Add channel list component for chat
- Add `children` prop for ControlBarItem to allow for custom PopOver content
- Added styleMessageList function
- Added Chat DateHeader component
- Added formatDate utility function

### Changed

- Adjust clear behavior and minor styling of inputs
- Changed RosterCell CSS to ensure vertical alignment of icons
- [DEMO] Upgrade `webpack-dev-server` to fix `node-forge` security vulnerability alert
- Updated `Select` caret icon
- Allow layout prop for VideoTileGrid
- Changed Message component to ChatBubble and moved InfiniteList to /Chat/MessageList

### Removed

## [1.2.0] - 2020-09-04

### Added

- Add PostLogger support to MeetingProvider
- Add `useBandwidthMetrics` hook, add bandwidth stats to demo
- Add missing exported hooks to index.ts
- Add documentation for UserActivityProvider and RosterProvider

### Changed

- [Demo] Default to nearest available region
- [Docs] Upgrade storybook to v6
- Update Device selector to use hooks instead of local state

### Removed

### Fixed

- Fixed `css` prop not taking precedence over media queries
- Fixed incorrect device permission status
- Fixed `useAttendeeStatus` returning incorrect video state for local user when mounting

## [1.1.0] - 2020-08-14

### Added

- Add Github documentation link to README
- Add SDK log level selection ability to demo and library

### Changed

- Added npm run build to the github actions publishing workflow
- Improve consistency and accuracy of docs for Hooks and Providers
- Fix `npm run build:release` running on windows OS
- Update Storybook to 5.3
- Improve docs for SDK components
- Portrait video support, minor style fixes
- [Demo] Update demo dependencies

### Removed

### Fixed

- Fixed reversed labels for mute/unmute control in `AudioInputControl`
- Fixed `PreviewVideo` component when selecting new video input device
- Fixed incorrect Storybook docs rendering

## [1.0.3] - 2020-08-04

### Added

- Add NPM and CI Flow badge to README

### Changed

- Move StyledSystem to peer dependencies

### Removed

### Fixed

## [1.0.2] - 2020-08-04

### Added

### Changed

### Removed

### Fixed

## [1.0.1] - 2020-08-04

### Added

### Changed

### Removed

### Fixed

## [1.0.0] - 2020-08-04

### Added

- Test script to run /Modal/index.test.tsx and /Button/PrimaryButton/index.test.tsx in playwright across 3 browsers
- Add Play, Pause and Sound disabled SVG icons
- Add initial roster components
- Add connected components to lib directory
- Add types required in `AudioOutputProvider`
- Add sound disabled to `AudioOutputControl`
- Add `LocalAudioOutputProvider` to `MeetingView`
- Add `ContentShareControlProvider` for content share control methods
- Add `device-utils` needed in audio, video providers in library connected components
- Add audio, video device types to types in library
- Add `useToggleLocalMute` to demo
- Add `Modal`, `ModalButtonGroup` to library `src/index`
- Add code style checking script
- Add postbuild script
- RemoteVideos, RemoteVideo components
- CSS reset, public domain version
- Set up customized MDX documentation and add docs for Badge component
- Add patch version bump for each merge
- Add docs for Button component, re-organize docs
- Add docs for all Form components
- Add mic volume indicator component
- Add serverless setup for the meeting demo
- Add publish script.
- ActiveSpeaker, ActiveTile providers and hooks
- Add docs for PopOver component
- Add github action workflow that automates publishing to npm
- Add docs for Grid component
- Add docs for the Modal component
- Add docs for Heading and ControlBar components
- Add SDK components documentation
- Add docs for Flex component
- Add Navbar component
- Add github actions workflow check for changes to workflows with 'push' or 'pull_request' trigger types
- Add docs for MeetingProvider and hooks
- Add docs or Label and Portal components
- Add docs for Navbar, Roster and Notification components
- Add notification `Severity`, `ActionType` enums to index exports
- Add notification `NotificationType`, `Action` interfaces to index exports
- Add docs for `MeetingControls`
- Add introduction documentation
- Add styles around `DeviceSelection` in demo
- Add documentation around `DeviceSelection` and `useAudioInputActivityPreview` hook
- Add docs for all icon components
- Added documentation for Modal component again, after being reverted
- Add RosterAttendee component, connected MicVolumeIndicator
- Add docs for Themes
- Add theme switcher to demo nav
- Add docs for local devices and meeting status providers
- Add docs for VideoGrid and VideoTile components
- Add `Grid` unit test.
- Add a story to display all icons in one place for reference
- Add versioning tag to demo app
- Add third party dependency attributes to NOTICE file
- Add component to manage visibility of controlbar
- Add third party licence text
- Add InfiniteList container component

### Changed

- Added delay for more consistent animation snapshotting with playwright.
- `npm run test` script changed to only include /components and /utils
- Update prebuild script to trigger git actions on git push event
- Changed relative imports and `MeetingView` to accomodate imports of connected components from library
- Updated the `ContentShareControl` with SDK components
- Changed `ScreenShare` to `ContentShare` in library and demo
- Update `AudioInputControl` to use hooks and SDK components
- Updated end meeting control, meeting controls container in demo app with SDK components
- Changed `Modal` to `ModalButtonGroup` in ModalButtonGroup component
- Changed `endMeeting` to call `leaveMeeting` and avoid cleanups with both calls in demo `MeetingManager`
- `npm run build:release` will run code style check as part of the build.
- Update `RosterHeader` for filtering
- Import components relatively using alias
- Update demo app README
- Update `Modal` to SDK Modal component and minor change to `Card` component in the demo
- Updating demo with basic video grid
- Add enforcement of passing test coverage thresholds.
- Update codestyle script to ignore non-source files within `demo/meeting` app.
- Moved components into /ui directory
- Change license from ISC to Apache-2.0
- Move provider, hooks and connected components from demo to library
- Add clear button to input component
- SIP Meeting implementation and related imports
- Update import in `useDevicePermissionStatus` hook
- Renamed `MeetingControlsContainer` to `MeetingControls`
- Changed play, pause icons in `ContentShareControl` to popover actions
- Changed IconButton props to accept dynamic width and height
- Changed test script so you can properly test one file
- Changed jest exclude config to exclude playwright tests
- Changed disabled microphone icon prop to muted
- Changed modal size properties to theme object
- Update grid to support active speaker
- Updated prebuild script to ignore CHANGELOG verification for BOT submitted PR's
- Added `npm run build:publish` script
- Changed `prebuild:publish' to run npm install prior to running scripts to make sure all dependencies are available
- Update roster with mobile design
- [Desktop only] Integrate navbar, roster toggle in demo
- Take callback for fetching attendees. Take in meeting/attendee info for joining meeting
- Update Home view index file name
- Provide fallback message when no devices are found
- Rename `NotificationProvider` hooks
- Update publish github action to deploy storybook documentation
- Remake `AudioActivityPreview` into `useLocalAudioInputActivityPreview` hook
- Refactor styles from SDK Component `DeviceSelection` and move them to demo
- Moved `ActivityBar` from library to demo, since it seemed more tightly related our demo
- Updated package.json to state sdk as peer dependency
- Stop local video, if enabled, when selecting "none" as video input source
- Add volume indicator, stop local video when selecting none as video source
- Add redirection to home on page refresh in demo
- Changed `NotificationGroup` minor styles
- Updated VideoTileGrid to take in prop for fallback view. Updated demo meeting view with meeting info
- Use route HOME constant as BASE_URL to replace runtime BASE_URL generation
- Make Microphone red when connection is poor. Adjust MicActivity %s
- Updated Portal storybook documentation to only show documentation without visual documentation
- Change className to include `ch-` prefix for all UI components
- Change `data-testid` in some components to maintain consistency
- Use MeetingManager to maintain active speakers
- Change storybook layouts so that there's a more consistent look
- Add `useMeetingStatus` hook
- Renamed `MeetingManager` subscriptions for consistency
- Improve Storybook documentaions according to the guidance of technical writing
- NOTICE includes correct copyright text
- LICENSE includes full Apache license
- Update typescript build tree to exclude test-helper and demo's folder from library build process
- Changed hard coded labels in components to take labels in prop and updated related docs
- Updated `ContentTile` static color to refer theme color

### Removed

- Removed active state button tests.
- 'styled-reset' package due to license incompatibility
- Reverted `Add docs for the Modal component` commit to fix CSSProperties compatibility error
- Removed `MeetingStatusProvider`
- Removed minor version bumping for each merge.

### Fixed

- Fixed prebuild for PR and Push
- Fix react state update errors for `MeetingStatusProvider`, `MeetingRoster` and `MeetingJoinDetails`
- Fix roster showing stale attendees
- `AudioActivityPreview` to show mic progress track on audio input device change
- Fixed release execution bug
- Fixed bug in verdaccio clean up
- Fix demo application not allowing to select video / audio via popover
- Fixed some demo layout issues
- Fixed issue in demo when reselecting a device in the control bar
- Fix roster not including attendees when rejoining meeting
- Fix mobile portrait local video being too large
- Fix content share not resetting when leaving a meeting
- Fix demo form, add display names back to form components
- Fix race condition where content share would stop but grey bg would persist
- Fix end meeting
- Fix video grid, input bugs on iOS
- Fix microphone poorConnection SVG warning in devtools
- Fix search input snapshot tests for new layout

## [0.1.1] - 2020-06-16
