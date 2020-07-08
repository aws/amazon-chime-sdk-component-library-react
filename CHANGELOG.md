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

### Removed
- Removed active state button tests.

### Fixed
- Fixed prebuild for PR and Push.
- Fix react state update errors for `MeetingStatusProvider`, `MeetingRoster` and `MeetingJoinDetails`
- Fix roster showing stale attendees

## [0.1.1] - 2020-06-16