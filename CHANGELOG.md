// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.2.0] - 2022-05-04

### Added

### Removed

### Changed

### Fixed

## [3.1.0] - 2022-04-11

### Added

- Add `audioSpeakerDelayMs`, `audioUpstreamRoundTripTimeMs`, `audioUpstreamJitterMs`, `audioDownstreamJitterMs` and `currentRoundTripTimeMs` metrics to `useMediaStreamMetrics` hook. Also add `rtcStatsReport` to expose the original [`RTCStatsReport`](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport) from [RTCPeerConnection.getStats()](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats).

### Removed

### Changed

- Improve "Handle Device Permission" guide in Quick Starts.
- Upgrade `storybook` to a fixed `6.5.0-alpha.64` with `webpack v5` to fix security vulnerabilities and issues with external HTTP link rendering.
- Update integration test demo to install `amazon-chime-sdk-component-library-react` from local instead of from npm. Update corresponding GitHub Action and scripts.

### Fixed

- Fix command line sample to install latest node dependencies in migration guides.
- Clarify `setIsVideoEnabled` usage in `LocalVideoProvider` and `useLocalVideo` docs.

## [3.0.0] - 2022-03-17

Amazon Chime SDK React Components Library v3 is here !! 🎉🎉🎉

Amazon Chime SDK React Components Library v3 includes major improvements for component style customization, `MeetingProvider/MeetingManager` configuration, device management, WebRTC metrics and logger.

- **Component style customization**: Improve components for easier customization of style. Check out our [styling guide](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/styling-guide--page) for more information.
- **`MeetingProvider/MeetingManager` configuration**: Improve `MeetingProvider`, `MeetingManager` and `MeetingManager.join()` API to allow configuring a meeting session right before joining a meeting instead of when `MeetingProvider` mounts.
- **Device management**: Improve `types` for device selection components to better support basic and transformed devices. Remove `useSelectAudioInputDevice`, `useSelectVideoInputDevice`, and `useSelectAudioOutputDevice` hooks to standardize device selection through `MeetingManager` and throw error when selection fails.
- **WebRTC metrics**: Publish the standardized WebRTC metrics for all supported browsers. Deprecate `useBandwidthMetrics` hook in favor of `useMediaStreamMetrics` hook.
- **Logger**: Add `LoggerProvider` and `useLogger` components to enable universal logging in component library.

Below is a list of all changes in Amazon Chime SDK React Components Library v3. Please refer to the [Migration from 2.0 to 3.0](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/docs/migration-to-v3--page) for more information.

### Added

- Add `LoggerProvider` and `useLogger` components to enable universal logging in component library.
- Add a new interface `MeetingManagerJoinOptions` containing `deviceLabels`, `eventController`, `enableWebAudio`, and `activeSpeakerPolicy` properties. This interface is used for optional parameter `options` of `MeetingManager.join()` API.
- Add new method `selectVideoInputDevice(device: VideoInputDevice)` in `MeetingManager`. This method only updates the `MeetingManager.selectedVideoInputDevice` with the given `device` and publish this update via `selectedVideoInputDeviceObservers`. The original `selectedVideoInputDevice` method in V2 has been renamed to `startVideoInputDevice` in V3.
- Extend and enable style customizing capabilities on the SDK components.
- Add documentation for device management change.

### Removed

- Remove logging of the video transform device to avoid circular structure error.
- Remove preset device selection options ("None" and "440 Hz" for audio input device. "None", "Blue", and "SMTP Color Bars" for video input device). Remove `appendSampleDevices` from Props of `CameraSelection`, `MicSelection`, `AudioInputControl`, `AudioInputVFcontrol`, and `VideoInputControl`. Remove `DeviceConfig` type. Remove `additionalDevices` from Props of `useAudioInputs` and `useVideoInputs` hook.
- Remove `useSelectAudioInputDevice`, `useSelectAudioOutputDevice` and `useSelectVideoInputDevice` hook.
- Remove use of the deprecated `enableUnifiedPlanForChromiumBasedBrowsers` configuration variable.
- Remove all deprecated `MeetingSessionStatusCode`.  
- Remove legacy metrics `videoDownstreamGoogFrameHeight`, `videoDownstreamGoogFrameWidth`, `videoUpstreamGoogFrameHeight` and `videoUpstreamGoogFrameWidth` from the `videoStreamMetrics` returned by the `useMediaStreamMetrics` hook to adopt to Amazon Chime SDK for JavaScript V3 changes ([aws/amazon-chime-sdk-js#2086](https://github.com/aws/amazon-chime-sdk-js/pull/2086)).
- Remove `MeetingSessionConfiguration` properties from `MeetingProvider` props.
- Remove `deviceLabels`, `eventController`, `logLevel`, `postLogConfig`, `logger`, `enableWebAudio`, and `activeSpeakerPolicy` from `MeetingProvider` props.
- Deprecate `useBandwidthMetrics` hook as we already have `useMediaStreamMetrics`.

### Changed

- Update the `selectedDeviceId: string | null` to `selectedDevice: Device | TransformDevice`.
- Update `MeetingManager` to use new `EventController` API.
- Update `amazon-chime-sdk-js` dependency to v3.
- Update the `compilerOptions.target` in `tsconfig.json` from `es5` to `ES2015 (ES6)`.
- Update the `ChannelList` UI component to take in optional `lastChannelMessage` and `lastChannelMessageTimestamp` parameters. If any of them is set, it will display more detailed channel item view with last message content or timestamp.
- Update `MeetingManager.join()` API to have a require parameter `meetingSessionConfiguration: MeetingSessionConfiguration` and an optional parameter `options?: MeetingManagerJoinOptions`. With `meetingSessionConfiguration` parameter builders have direct access to `MeetingSessionConfiguration` which allows more flexibility to customize the `MeetingSession`. With `options` parameter, builders can easily config the `enableWebAudio`, `logger`, `activeSpeakerPolicy`, `deviceLabels` and `eventController` before joining the meeting.
- Rename `selectAudioInputDevice` to `startAudioInputDevice`, `selectVideoInputDevice` to `startVideoInputDevice`, and `selectAudioOutputDevice` to `startAudioOutputDevice`.
- Rename `DevicePermissionStatus.UNSET` to `DevicePermissionStatus.UNTRIGGERED` and `DevicePermissionStatus` to `DeviceLabelTriggerStatus`.
- Rename `useDevicePermissionStatus` to `useDeviceLabelTriggerStatus`.
- Rename `devicePermissionsObservers` to `deviceLabelTriggerStatusObservers` and corresponding `subscribe`, `unsubscribe`, and `publish` functions.
- Rename `deviceLabelTriggerChangeObservers` to `deviceLabelTriggerObservers` and corresponding `subscribe`, `unsubscribe`, and `publish` functions.
- Rename the `global` property of `DefaultTheme` interface to `globalStyle` to avoid conflict with reserved keyword `global`.
- Revert "Add Observer to select input device error" ([PR #493](https://github.com/aws/amazon-chime-sdk-component-library-react/pull/493)). `useAudioInputs` and `useVideoInputs` hook no longer return `selectDeviceError`. `selectAudioInputDevice`, `selectVideoInputDevice`, and `selectAudioOutputDevice` method of `MeetingManager` now throw error when failed. The device selection methods returned by `useSelectAudioInputDevice`, `useSelectVideoInputDevice`, and `useSelectAudioOutputDevice` hook are built on top of these `MeetingManager` methods, thus now they throw error when failed as well.

### Fixed

## [3.0.0-beta.0] - 2022-03-15

### Added

- Add styling guide documentation for customizing SDK and UI component CSS.
- Extend and enable style customizing capabilities on the SDK components.
- Add `MeetingSessionConfiguration` as a required parameter to `MeetingManager.join()` method. With this change the builders have direct access to `MeetingSessionConfiguration`, this will allow more flexibility to customize the `MeetingSession`.
- Add `MeetingManagerJoinOptions` as a new interface for the `options` parameter of the `MeetingManager.join` method.
- Add `deviceLabels`, `eventController`, `logLevel`, `postLoggerConfig`, `logger`, `enableWebAudio`, and `activeSpeakerPolicy` to `MeetingManagerJoinOptions` interface.

### Changed

- Update `MeetingManager` to use new `EventController` API.
- Update `amazon-chime-sdk-js` dependency to v3 beta.
- Update the `compilerOptions.target` in `tsconfig.json` from `es5` to `ES2015 (ES6)`.
- Rename the `global` property of `DefaultTheme` Interface to `globalStyle` to avoid conflict with reserved keyword `global`.
- Change `Versioning.ts` to read from Git instead of manually hard-coded. This is the same behavior in `amazon-chime-sdk-js`.
- Update the ChannelList UI component to take in optional `lastChannelMessage` and `lastChannelMessageTimestamp` parameters. If any of them is set, it will display more detailed channel item view with last message content or timestamp.

### Removed

- Remove use of the deprecated `enableUnifiedPlanForChromiumBasedBrowsers` configuration variable.
- Remove all deprecated `MeetingSessionStatusCode`.  
- Remove legacy metrics `videoDownstreamGoogFrameHeight`, `videoDownstreamGoogFrameWidth`, `videoUpstreamGoogFrameHeight` and `videoUpstreamGoogFrameWidth` from the `videoStreamMetrics` returned by the `useMediaStreamMetrics` hook to adopt to Amazon Chime SDK for JavaScript V3 changes ([aws/amazon-chime-sdk-js#2086](https://github.com/aws/amazon-chime-sdk-js/pull/2086)).
- Deprecate `useBandwidthMetrics` hook as we already have `useMediaStreamMetrics`.
- Remove `MeetingSessionConfiguration` properties from `MeetingProvider` props.
- Remove `deviceLabels`, `eventController`, `logLevel`, `postLogConfig`, `logger`, `enableWebAudio`, and `activeSpeakerPolicy` from `MeetingProvider` props.

### Fixed

## [2.15.0] - 2022-02-03

### Fixed

- Fix a bug in `BackgroundBlurProvider` and `BackgroundReplacementProvider` where the options objects are updated and causing re-rendering and destroying previous processor.
- Fix a bug in `PreviewVideo` where the PreviewVideo component did not start when `audioVideo` changed.

### Added

- Add Amazon Chime Echo Reduction feature. Allow builders to supply the response from a `CreateMeeting` or `CreateMeetingWithAttendees` call when adding a `VoiceFocusProvider` to the component tree. This enables optional features like Amazon Chime Echo Reduction to be added to devices when turning on Amazon Voice Focus.
- Add `videoAvailabilityDidChange` as an audio observer in `LocalVideoProvider` and a new state `hasReachedVideoLimit` to disable the video button when the video limit is reached.
- Add `keepLastFrameWhenPaused` as an optional parameter to allow to keep the last frame of the video when a remote video is paused via the pauseVideoTile.

### Changed

### Removed

## [2.14.0] - 2022-01-20

### Fixed

### Added

- Add `BackgroundReplacementProvider` provider to support background replacement.

### Changed

### Removed

## [2.13.0] - 2022-01-06

### Fixed

### Added

- Add `activeSpeakerPolicy` and `videoUplinkBandwidthPolicy` to `MeetingProvider` props.

### Changed

- Change `additionalDevices` to a prop in `AudioInputControl`, `VideoInputControl`, `AudioInputVFControl`, `MicSelection`, and `CameraSelection` components to allow option to turn off that configuration.
- Add `reconnectTimeoutMs` as an optional parameter to `MeetingManagerConfig` to manage the timeout for reconnection.

### Removed

## [2.12.0] - 2021-11-19

### Fixed

- Fix the issue that Amazon Voice Focus does not get applied on new devices mid-meeting.

### Added

- Add `BackgroundBlurCheckbox` component to allow selecting background blur video filter for the `PreviewVideo` component.

### Changed

- The `PreviewVideo` component will listen to the `selectedVideoInputTransform` state, which means it can display regular `Device` video streams, along with `VideoTransformDevice` video streams as well.
- `VideoInputBackgroundBlurControl` component is initialized with the `selectedVideoInputTransformDevice`.

### Removed

## [2.11.1] - 2021-10-25

### Fixed

- Revert back to publishing `audioVideo` update after listing devices. Publishing earlier before listing devices breaks `useAudioInputs`, `useAudioOutputs` and `useVideoInputs` hooks. The reason is device change observers may fail to get added to `audioVideo` based on builders implementation. Hence, falling back to what existed earlier.

### Added

### Changed

### Removed

## [2.11.0] - 2021-10-21

### Fixed

- Fix the issue that `AudioVideoObserver` was not removed as expected in `LocalVideoProvider`.
- Fix `eventDidReceive` observer removal in `MeetingManager`.

### Added

- Add Eslint rules to enforce code style and fix issues.
- Add logs for Amazon Voice Focus components.
- Add FAQ link on audio outputs not available in FireFox and Safari.
- Add `BackgroundBlurProvider` which provides a background blur video transform device.
- Add `VideoInputBackgroundBlurControl` component which includes a checkbox for enabling background blur.
- Add `unsubscribeFromSelectedVideoInputTransformDevice` which subscribes to changes to selected video devices.
- Add `subscribeFromSelectedVideoInputTransformDevice`.
- Add `publishSelectedVideoInputTransformDevice` which publishes a `Device | VideoTransformDevice` depending on what video device was chosen.

### Changed

- Update `useSelectVideoInputDevice` hook documentation and usage example.
- Update package.json to include NPM 8.
- Update `meetingManager.selectVideoInputDevice` to accept `VideoTransformDevice` as a parameter.

### Removed

## [2.10.1] - 2021-10-05

### Fixed

### Added

### Removed

- Revert the commit: Add Amazon Voice Focus to default device to fix the breaking issue [#636](https://github.com/aws/amazon-chime-sdk-component-library-react/issues/636)

## [2.10.0] - 2021-09-29

### Fixed

- Fix the issue that Amazon Voice Focus does not get applied on new devices mid-meeting.
- Fix the issue where we call `meetingManager.leave` an additional time when we call `meetingManager.leave`.
- Remove the observer in `LocalVideoProvider` when it is unmounted to fix memory leak.

### Added

- Add `activeSpeakerPolicy` and `videoUplinkBandwidthPolicy` in `MeetingManagerConfig` to allow builders to pass in custom policies.
- For more flexibility, allow passing `MeetingManagerConfig` to `meetingManager.join` method. Passing the config here would override config passed through `MeetingProvider` props.
- Add more details in the `AudioInputProvider` on storybook.
- Add `MeetingStatus.Left` and set it when explicitly leaving the meeting.
- Publish `MeetingStatus.Failed` when `audioVideoDidStop` gets triggered with one of the Failure types of `MeetingSessionStatus`.
- Add `Terminal Failure` Meeting Status.

### Changed

- Remove the audio video observers in the `audioVideoDidStop()` function instead of `leave()` function in the `MeetingManager`.
- Update `VoiceFocusProvider` and `useVoiceFocus` documentation in the storybook.

### Removed

- Remove setting the `MeetingStatus` to `MeetingStatus.Loading` when we call `meetingManager.leave`.

## [2.9.1] - 2021-09-02

### Fixed

### Added

### Changed

- Remove the year in the copy right checker.

### Removed

## [2.9.0] - 2021-08-28

### Fixed

### Added

- Add [MeetingEventProvider](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/sdk-providers-meetingeventprovider--page) and [useMeetingEvent](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/sdk-hooks-usemeetingevent--page) hook to receive meeting events from `amazon-chime-sdk-js`. Please check [Amazon Chime SDK for JavaScript meeting events guide](https://aws.github.io/amazon-chime-sdk-js/modules/meetingevents.html) for more information on meeting events.
- Add optional parameter `enableWebAudio: boolean` in the config of meeting manager to decide whether to enable Web Audio in the device controller.
- Extend the ability to accept `Device` and `AudioTransformDevice` as audio input in meeting manager.
- Add a new provider [VoiceFocusProvider](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/sdk-providers-voicefocusprovider--page) to initialize noise suppression and transform a normal audio input device to an Amazon Voice Focus transform device.
- Add a new UI component [AudioInputVFControl](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/sdk-components-meetingcontrols-audioinputvfcontrol--page) to provide Amazon Voice Focus option to users.
- Add CSS for `disabled` props on `PopOverItem`.
- [Doc] Add documentation for `AudioInputVFControl` component within `MeetingControls` in the story book.
- [Doc] Add documentation for `VoiceFocusProvider` provider in the story book.
- [Doc] Add documentation for [useVoiceFocus](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/sdk-hooks-usevoicefocus--page) hook in the story book.

### Changed

- Change the input type of `useSelectAudioInputDevice` hook from string to `Device` and `AudioTransformDevice`.
- Add `meetingManagerConfig: ManagerConfig` object to `MeetingManager` and use it in `initializeMeetingSession` method. We will use values from `meetingManagerConfig: ManagerConfig` directly instead of class level variables.

### Removed

## [2.8.0] - 2021-07-28

### Fixed

- Exclude the uuid module from the Rollup bundle so that the Chime SDK React Components Library uses the uuid module from the builder's node_modules.
- [Doc] Fix the broken hyperlinks in storybook and slightly improve the storybook.

### Added

- Add optional parameter `deviceLabels: DeviceLabels | DeviceLabelTrigger` in `meetingManager.listAndSelectDevices()` to let builder indicate the type of devices they want to select.
- Add optional parameter `logger` and `videoDownlinkBandwidthPolicy` in `ManagerConfig` to pass in the `Logger` object and `VideoDownlinkBandwidthPolicy` object that you want to be used in the meeting session.
- [Doc] Add several how-to docs in storybook.

### Changed

- The `listAndSelectDevices()` method in `MeetingManager` now selects the devices based on its parameter `deviceLabels` instead of the existence of device label.
- [Doc] Rename the "How-tos" section in storybook to "Quick Starts" as well the file name.

### Removed

- Migrate Meeting Demo app to amazon-chime-sdk repo under aws-sample. The new meeting demo is [here](https://github.com/aws-samples/amazon-chime-sdk/tree/main/apps/meeting).

## [2.7.0] - 2021-07-14

### Fixed

### Added

- [Doc] Add explanation for the limitation of the `useDevicePermissionStatus` hook in storybook.
- [Doc] Add how-to doc for view-only mode in storybook.
- Add support to override event reporter for client event ingestion once enabled in the Amazon Chime SDK for JavaScript. For more information check the [Client Event Ingestion guide](https://aws.github.io/amazon-chime-sdk-js/modules/clientevent_ingestion.html) in the Amazon Chime SDK for JavaScript.
- Add new function `setIsVideoEnabled` in `useLocalVideo` hook.
- [Doc] Add how-to doc for `useMediaStreamMetrics` hook in storybook.

### Changed

- Set the `isVideoEnabled` to `false` when stopping video preview.

### Removed

## [2.6.0] - 2021-06-16

### Fixed

### Added

- Add `sourceId` as an optional parameter in the `toggleContentShare` function to specify which screen to share.
- [Doc] Add a new page, a "How-tos" section in the story book to show use-cases with sample code.
- In `MeetingManager`, add optional parameter `deviceLabels: DeviceLabels | DeviceLabelTrigger` in `join()` method, and add `invokeDeviceProvider(deviceLabels: DeviceLabels)` method to control the device permission request. Builder could pass a `deviceLabels` of type `DeviceLabels` to select the devices from which the browser requests permission when joining the meeting. Builder could also pass a `deviceLabels` of `DeviceLabelTrigger` type, to set their customized `deviceLabelTrigger` which is triggered to get the device info. Builder could call `invokeDeviceProvider(deviceLabels: DeviceLabels)` to trigger the device permission prompts. For example, builder wants to implement a view-only mode and no device permission prompts are triggered during the whole process. Builder could first call `meetingManager.join(DeviceLabels.None)` to join a meeting. Later they can trigger the device permission prompts by calling `meetingManager.invokeDeviceProvider(DeviceLabels.AudioAndVideo)` to get the full access to devices.

### Changed

### Removed

## [2.5.0] - 2021-05-27

### Fixed

- [Demo] Fix post logging in the demo meeting app.

### Added

- [Doc] Add documentation in introduction on how to use `MeetingSessionPostLogger` to post Amazon Chime SDK for JavaScript logs.
- Add `useMediaStreamMetrics` hook to expose audio, video and bandwidth data.

### Changed

### Removed

## [2.4.0] - 2021-05-12

### Fixed

- Add or remove event listener only when `el.current` reference is valid in `useFocusIn` and `useMouseMove` hooks.
- Fix bug related to `PreviewVideo` component not releasing media stream when unmounted.
- Correct `IconButton` border in dark theme.

### Added

- Added optional props to specify icon titles in the `AudioInputControl` and `ContentShareControl` components.
- Added optional props to specify the dropdown text that shows when no video quality is selected, in the `QualitySelection` component.
- Added observer to `selectAudioInputDeviceError` and `selectVideoInputDeviceError` to deliver the error from SDK level to client application level.

### Changed

- Change `package-lock` to V2 to support NPM 7.
- Update `engines` field in `package.json` to include Node 16.
- Bump `hosted-git-info` version.

### Removed

## [2.3.0] - 2021-04-12

### Fixed

- Add browser flag for node resolve in rollup config.
- Fix device permission doc to remove reference to meetingStatus

### Added

- Added support for optional keys to pass extra data in the `AttendeeResponse`.

### Changed

### Removed

## [2.2.0] - 2021-03-23

### Fixed

- Fix incorrect type definitions in date formatting.
- Fix the Jest configuration to not use the deprecated `tsConfig` spelling of `tsconfig`.
- Fix removeEventListener bug for WithTooltip.
- Reset `isAudioOn` state to `true` when `LocalAudioOutputProvider` unmounts.

### Added

- Added a step in release script to create a test react app, install latest version of component app as dependency and build the test app.
- Added some key properties to `ModalButtonGroup`, which quiets some React warnings.
- Added an optional prop `onPopOverClick` to pass a callback function to the `PopOver` UI component. This callback will be called when the `PopOver` UI component is clicked.
- Added `--no-fail-on-empty-changeset` flag in deploy script to not fail for empty changeset.
- Add `WithTooltip` docs, warning log if no container is found, and some additional flexibility.

### Changed

- Bumped react and react-dom version to 17.
- Updated versions of testing-library family of packages.
- Corrected the detection of `yesterday` in said code.
- Wraped actions in tests with `act`, as React requests.

### Removed

- [Demo] Removed call `await MeetingManager.leave()` on `endMeetingForAll` button click.

## [2.1.1] - 2021-03-10

### Fixed

- Fix getAttendee populate name even after the attendee has left the meeting

## [2.1.0] - 2021-02-24

### Fixed

- Fixed the `MicrophoneActivity` component's `className` prop
  overridden by the `MicVolumeIndicator` component `className`.
- NotificatonGroups don't accept pointer-events.
- Clean up timeouts when `useFocusIn` and `useMouseMove` hooks are unmounted.

### Added

- Allow the `PopOver` UI component to stay open for multiple clicks.
- Added `WithTooltip()` HOC and updated `RosterHeader`, `RosterCell`, `PopOverMenu`,
  `PopOver`, `NavbarItem`, `ControlbarItem`, and `ChatBubbleConatiner` to support tooltips.
- Added documentation for components that support tooltips, exposed `WithTooltip` component and related interfaces/types.

### Changed

- Render roster without waiting for getAtendee callback.
- Update `MeetingProvider` and corresponding documentation to support
  re-usable `MeetingManager` instance.

### Removed

## [2.0.1] - 2020-2-11

### Fixed

- [Docs] Fix broken link in RosterAttendee story

### Added

### Changed

### Removed

## [2.0.0] - 2020-2-11

### Fixed

- Fix LocalVideo not rendering on initial attempt
- Fix inconsistent snapshot for EditableChatBubble
- [Docs] Fix mdx style rendering
- Confirm video device exists when requesting user device permission

### Added

- Add JoinedFromAnotherDevice meeting status

### Changed

- Allow property passthough to IconButton in NavbarItem

### Removed

## [2.0.0] - 2020-2-8

### Fixed

- Fix icon preventing clicks on `Select` components
- Fix Github Actions build-storybook error
- [Docs] Fix ContentShare docs
- Fix non-overridable Mic prop in `RosterAttendee`
- Fix incorrect fill-rule property on `ZoomIn` and `ZoomOut`
- [Demo] Fix closing roster from stopping active speaker detection.
- Fix serverless deploy script to work on Windows
- [Tests] Update outdated snapshots
- [Chat Demo] Fix double API calls on channel click.
- NotificatonGroups don't accept pointer-events

### Added

- Add `useSelectAudioInputDevice`, `useSelectAudioOutputDevice` hooks
- Added Echo icon
- Added poorConnection property to DeskPhone icon
- Added optional 'id' prop for ui components
- Added optional `timestamp` prop in ChatBubble
- Added forwardRef for ChatBubbleContainer
- Added optional img to MessageAttachment
- Added a classname to PopOverMenu component for styling access
- Added forwardRef for Textarea
- Added `useDevicePermissionStatus` hook as an exported component from the library.
- Added a "dismissible" prop to Modal to optionally allow persistent modals
- Added ZoomIn and ZoomOut icons
- Added style variants to Caution icon

### Changed

- Update Jest major version
- Changed RosterHeader 'title' prop to all for elements as well as strings
- Changed senderName to optional in ChatBubble
- Moved children inside of a div in ChatBubble
- Changed `MeetingManager` to strictly enforce `DevicePermissionStatus` type.
- Update `realtimeUnsubscribeFromVolumeIndicator` interface to also accept a callback param.
- Refactored NavBar to allow static width
- Refactored NavBarItem to use IconButton directly
- Change control bar theme opacity to 1
- [Chat Demo] Rename misspelled file names and imports
- Set amazon-chime-sdk-js in package.json dependencies

### Removed

- Remove playwright tests, scripts, and dependency
- Removed content in ChatBubble
- Removed showName in ChatBubble
- Removed unused import statements from NavBar

## [1.6.1] - 2020-12-25

### Fixed

- Fix meeting manager to handle `setSinkId` error

## [1.6.0] - 2020-12-14

### Fixed

- Remove needless camera selection when joining meeting
- [Demo] Fix demo test speakers

### Added

- [Demo] Add Chat Demo app

### Changed

- Allow arbitrary to be passed to RosterProvider
- Allow for simlucast configuration in MeetingProvider
- Updated button focus states to increase their accessibility
- [Documentation] Update README with solutions of common issues

### Removed

## [1.5.0] - 2020-11-20

### Fixed

- Fixed ModalBody component to allow custom classNames
- Fixed PopOver components to allow custom classNames
- Fixed small visual errors in chat componnets.
- Fixed broken snapshot tests for Badge component.
- Fixed slight spacing issue in ChatBubbleContainer.
- Fixed issue where checkmark in PopOverItem wouldn't change on hover/focus.
- Removed unused import in ChatBubble component.
- Fix InfiniteList to make it more flexible.
- Fix Popover Submenu being hidden.

### Added

- Added Lock and Pin icons
- Export Chat components and utilities
- Added Attachment, Dock, and Emoji picker icons
- Added HandRaise and ListHandRaise icons
- Added ConnectionProblem icon
- Added linkColors for incoming and outgoing chat in chatBubble

### Changed

- Changed ChatBubbleContainer props to be more flexible.
- Changed Record icon
- Slight style changes to Modal and PopOver components.
- Changed Badge props to be more flexible.
- Changed PopOver component styling.
- Bumped chime-sdk-js version to 1.22.
- Added try/catch block to MeetingManager leave() function.
- [Demo] Changed handling audio binding asynchronously.

### Removed

- Removed DateHeader component
- [Demo] Removed use of depricated methods.
- [Demo] Removed call MeetingManager.leave() on leave button click. (duplicate)

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
