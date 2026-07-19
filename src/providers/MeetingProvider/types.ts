// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  DefaultDeviceController,
  EventController,
} from 'amazon-chime-sdk-js';

/**
 * Construction config for `MeetingManager`. It borrows a `DefaultDeviceController` from the device
 * layer (`DeviceManager.getController()`): `join()` builds its `DefaultMeetingSession` from this
 * controller but the session layer never creates or destroys it. Passed as an object (not a
 * positional arg) so the config can grow without widening the constructor signature.
 */
export interface MeetingManagerConfig {
  deviceController: DefaultDeviceController;
}

/**
 * Options for `MeetingManager.join()`. Session-only concerns: device setup
 * (`deviceLabels` / `skipDeviceSelection`) and Web Audio (`enableWebAudio`) moved to the device
 * layer — do device setup via `DeviceManager.setupDevices()` before `join()`, and set
 * `enableWebAudio` on `DeviceProvider`.
 */
export interface MeetingManagerJoinOptions {
  eventController?: EventController;
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
}

export interface AttendeeResponse {
  name?: string;
  [attribute: string]: any;
}

export type ParsedJoinParams = {
  eventController: EventController | undefined;
  activeSpeakerPolicy: ActiveSpeakerPolicy;
};
