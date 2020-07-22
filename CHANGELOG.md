# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Removed

- Removed active state button tests.
- 'styled-reset' package due to license incompatibility
- Reverted `Add docs for the Modal component` commit to fix CSSProperties compatibility error

### Fixed

- Fixed prebuild for PR and Push
- Fix react state update errors for `MeetingStatusProvider`, `MeetingRoster` and `MeetingJoinDetails`
- Fix roster showing stale attendees
- `AudioActivityPreview` to show mic progress track on audio input device change
- Fixed release execution bug
- Fixed bug in verdaccio clean up

## [0.1.1] - 2020-06-16
