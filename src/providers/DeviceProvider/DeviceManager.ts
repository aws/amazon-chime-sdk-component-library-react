// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioInputDevice,
  DefaultBrowserBehavior,
  DefaultDeviceController,
  DeviceChangeObserver,
  Logger,
  RemovableAnalyserNode,
  VideoInputDevice,
} from 'amazon-chime-sdk-js';

import {
  DeviceLabels,
  DeviceLabelTrigger,
  DeviceLabelTriggerStatus,
} from '../../types';

/**
 * Callback a builder supplies (via the `DeviceProvider` `onDeviceReplacement` prop) to control
 * which device is chosen when the currently selected audio input is lost / a device change occurs.
 * Relocated from the `MeetingProvider`/`DevicesProvider` `onDeviceReplacement` prop.
 */
export type OnDeviceReplacement = (
  nextDevice: string,
  currentDevice: AudioInputDevice | undefined
) => Promise<AudioInputDevice>;

/**
 * Options for {@link DeviceManager}. `enableWebAudio` is a **constructor-only** option on
 * `DefaultDeviceController` (it decides whether Amazon Voice Focus is possible), so it is fixed
 * for the lifetime of the controller this manager owns.
 */
export interface DeviceManagerOptions {
  enableWebAudio?: boolean;
  onDeviceReplacement?: OnDeviceReplacement;
}

function noOpDeviceLabelHook(): Promise<MediaStream> {
  return Promise.resolve(new MediaStream());
}

/**
 * `DeviceManager` is the device-layer counterpart to `MeetingManager`. It owns a standalone
 * `DefaultDeviceController` **and** all device state / observers / methods, so device setup
 * (enumerate / select / preview / mic-level meter / permissions) works **before, during, and
 * after** a meeting — and with no `MeetingProvider` mounted at all.
 *
 * The session layer (`MeetingManager`) **borrows** this controller via {@link getController} to
 * build a `DefaultMeetingSession`; it never creates or destroys it. Media is released with
 * {@link releaseMedia} (typically on `DeviceProvider` unmount), which does not destroy the
 * controller instance — it stays reusable across meetings.
 *
 * Facade-insulation note (per design review): the JS SDK's `AudioVideoFacade` normally shields
 * consumers from `DefaultDeviceController` API changes. Because this layer talks to the controller
 * directly, all controller calls are funneled through this class's methods (a single choke point),
 * and consumers should use those methods rather than reaching through `getController()`. If the JS
 * SDK's `DeviceController` surface changes, update this class — not every call site.
 */
export class DeviceManager {
  selectedAudioOutputDevice: string | null = null;

  selectedAudioOutputDeviceObservers: ((deviceId: string | null) => void)[] =
    [];

  selectedAudioInputDevice: AudioInputDevice | undefined;

  selectedAudioInputDeviceObservers: ((
    device: AudioInputDevice | undefined
  ) => void)[] = [];

  selectedVideoInputDevice: VideoInputDevice | undefined;

  selectedVideoInputDeviceObservers: ((
    device: VideoInputDevice | undefined
  ) => void)[] = [];

  audioInputDevices: MediaDeviceInfo[] | null = null;

  audioOutputDevices: MediaDeviceInfo[] | null = null;

  videoInputDevices: MediaDeviceInfo[] | null = null;

  deviceLabelTriggerStatus = DeviceLabelTriggerStatus.UNTRIGGERED;

  deviceLabelTriggerStatusObservers: ((
    status: DeviceLabelTriggerStatus
  ) => void)[] = [];

  deviceLabelTriggerObservers: (() => void)[] = [];

  private logger: Logger;

  private deviceController: DefaultDeviceController;

  private deviceLabels: DeviceLabels | DeviceLabelTrigger =
    DeviceLabels.AudioAndVideo;

  private onDeviceReplacement?: OnDeviceReplacement;

  constructor(logger: Logger, options?: DeviceManagerOptions) {
    this.logger = logger;
    // `enableWebAudio` is a constructor-only option on DefaultDeviceController, so it is fixed
    // when this manager builds the controller and cannot change for the controller's lifetime.
    this.deviceController = new DefaultDeviceController(logger, {
      enableWebAudio: options?.enableWebAudio ?? false,
    });
    this.onDeviceReplacement = options?.onDeviceReplacement;
  }

  /**
   * Update the `onDeviceReplacement` callback after construction. `DeviceProvider` calls this from an
   * effect keyed on its `onDeviceReplacement` prop, so a builder that changes the prop at runtime is
   * honored instead of the stale value captured when the manager was first created (the manager is
   * created once via `useState`). Kept as a setter (not a constructor-only field) for exactly this reason.
   */
  setOnDeviceReplacement = (
    onDeviceReplacement?: OnDeviceReplacement
  ): void => {
    this.onDeviceReplacement = onDeviceReplacement;
  };

  /**
   * Returns the owned `DefaultDeviceController` so the session layer can build a
   * `DefaultMeetingSession` from it. This is the **only** intended use of the raw controller —
   * device operations should go through this class's methods (see facade-insulation note above).
   */
  getController(): DefaultDeviceController {
    return this.deviceController;
  }

  getDeviceLabels(): DeviceLabels | DeviceLabelTrigger {
    return this.deviceLabels;
  }

  /**
   * Pre-meeting entry point: install the permission/label trigger, then enumerate and
   * default-select devices — all with no `MeetingSession`. Safe to call before a meeting exists.
   */
  async setupDevices(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): Promise<void> {
    this.setupDeviceLabelTrigger(deviceLabels);
    await this.listAndSelectDevices(deviceLabels);
  }

  /**
   * Release the media the controller is holding — stop the mic and camera, then clear the tracked
   * input selections. Stopping mirrors what the JS SDK's own `DefaultDeviceController.destroy()`
   * does (`stopAudioInput()` + `stopVideoInput()`), but this does **not** destroy the controller:
   * the instance stays reusable for a later meeting. Typically invoked on `DeviceProvider` unmount.
   *
   * Resetting `selectedAudio/VideoInputDevice` back to `undefined` is required: the streams are now
   * stopped, so leaving the selections in place would make the next `listAndSelectDevices()` skip
   * re-acquiring them (its guard is `!this.selectedAudioInputDevice`), leaving the mic/camera dead
   * while the UI still shows a device selected. The audio-*output* selection is intentionally left
   * intact — it is only a `setSinkId` choice, holds no live stream, and is convenient to preserve.
   *
   * Declared as an arrow property (like the other device methods) so it can be passed as a bare
   * callback (e.g. a React effect cleanup) without losing `this`.
   *
   * Audio-output (speaker) teardown is intentionally NOT done here. `chooseAudioOutput(null)` only
   * *selects the default output device* (per the JS SDK) — it releases no hardware. The real speaker
   * unbind is `audioVideo.unbindAudioElement()`, a session-layer concern handled by
   * `MeetingManager.leave()`, not the device layer.
   */
  releaseMedia = async (): Promise<void> => {
    try {
      await this.deviceController.stopAudioInput();
      await this.deviceController.stopVideoInput();
    } catch (error) {
      this.logger.error(`DeviceManager failed to release media: ${error}`);
    }
    // Streams are stopped; clear the tracked input selections so a later setupDevices() re-acquires.
    this.selectedAudioInputDevice = undefined;
    this.publishSelectedAudioInputDevice();
    this.selectedVideoInputDevice = undefined;
    this.publishSelectedVideoInputDevice();
  };

  async updateDeviceLists(): Promise<void> {
    this.audioInputDevices =
      (await this.deviceController.listAudioInputDevices()) || [];
    this.videoInputDevices =
      (await this.deviceController.listVideoInputDevices()) || [];
    this.audioOutputDevices =
      (await this.deviceController.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): void {
    /**
     * A builder can set device labels either using `setupDevices` or using `invokeDeviceProvider`.
     * Both use `setupDeviceLabelTrigger`, thus, set the `deviceLabels` in this method.
     */
    this.deviceLabels = deviceLabels;

    let callback: DeviceLabelTrigger;

    if (typeof deviceLabels === 'function') {
      callback = deviceLabels;
    } else if (deviceLabels === DeviceLabels.None) {
      callback = noOpDeviceLabelHook;
    } else {
      const constraints: MediaStreamConstraints = {};

      switch (deviceLabels) {
        case DeviceLabels.Audio:
          constraints.audio = true;
          break;
        case DeviceLabels.Video:
          constraints.video = true;
          break;
        case DeviceLabels.AudioAndVideo:
          constraints.audio = true;
          constraints.video = true;
          break;
      }

      callback = async (): Promise<MediaStream> => {
        this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.IN_PROGRESS;
        this.publishDeviceLabelTriggerStatus();
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const hasVideoInput = devices.some(
            (value) => value.kind === 'videoinput'
          );

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: constraints.audio,
            video: constraints.video && hasVideoInput,
          });

          this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.GRANTED;
          this.publishDeviceLabelTriggerStatus();
          return stream;
        } catch (error) {
          this.logger.error('DeviceManager failed to get device permissions');
          this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.DENIED;
          this.publishDeviceLabelTriggerStatus();
          throw error;
        }
      };
    }

    this.deviceController.setDeviceLabelTrigger(callback);
  }

  async listAndSelectDevices(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): Promise<void> {
    await this.updateDeviceLists();

    // If `deviceLabels` is of `DeviceLabelTrigger` type, no device will be selected.
    // In this case, you need to handle the device selection yourself.
    if (typeof deviceLabels === 'function') return;

    let isAudioDeviceRequested = false;
    let isVideoDeviceRequested = false;

    switch (deviceLabels) {
      case DeviceLabels.None:
        break;
      case DeviceLabels.Audio:
        isAudioDeviceRequested = true;
        break;
      case DeviceLabels.Video:
        isVideoDeviceRequested = true;
        break;
      case DeviceLabels.AudioAndVideo:
        isAudioDeviceRequested = true;
        isVideoDeviceRequested = true;
        break;
    }

    if (
      isAudioDeviceRequested &&
      !this.selectedAudioInputDevice &&
      this.audioInputDevices &&
      this.audioInputDevices.length
    ) {
      // Only record + publish the selection AFTER the input actually starts. If startAudioInput
      // rejects (permission denied / device busy) — reachable pre-meeting via setupDevices() — we
      // must not leave state claiming a mic is active while the controller captured no stream.
      try {
        await this.deviceController.startAudioInput(
          this.audioInputDevices[0].deviceId
        );
        this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
        this.publishSelectedAudioInputDevice();
      } catch (error) {
        this.logger.error(
          `DeviceManager failed to select audio input device on setup: ${error}`
        );
      }
    }
    if (
      isAudioDeviceRequested &&
      !this.selectedAudioOutputDevice &&
      this.audioOutputDevices &&
      this.audioOutputDevices.length
    ) {
      this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
      if (new DefaultBrowserBehavior().supportsSetSinkId()) {
        try {
          await this.deviceController.chooseAudioOutput(
            this.audioOutputDevices[0].deviceId
          );
        } catch (error) {
          this.logger.error(
            `DeviceManager failed to select audio output device on setup: ${error}`
          );
        }
      }
      this.publishSelectedAudioOutputDevice();
    }
    if (
      isVideoDeviceRequested &&
      !this.selectedVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
      this.publishSelectedVideoInputDevice();
    }
  }

  startAudioInputDevice = async (device: AudioInputDevice): Promise<void> => {
    try {
      await this.deviceController.startAudioInput(device);
      this.selectedAudioInputDevice = device;
      this.publishSelectedAudioInputDevice();
    } catch (error) {
      const newError = new Error(
        'DeviceManager failed to select audio input device.'
      );
      if (error instanceof Error) {
        newError.name = error.name;
        newError.message += ' ' + error.message;
      }
      this.logger.error(newError.toString());
      throw newError;
    }
  };

  startAudioOutputDevice = async (deviceId: string): Promise<void> => {
    try {
      await this.deviceController.chooseAudioOutput(deviceId);
      this.selectedAudioOutputDevice = deviceId;
      this.publishSelectedAudioOutputDevice();
    } catch (error) {
      this.logger.error(
        `DeviceManager failed to select audio output device: ${error}`
      );
      throw new Error('DeviceManager failed to select audio output device');
    }
  };

  startVideoInputDevice = async (device: VideoInputDevice): Promise<void> => {
    try {
      await this.deviceController.startVideoInput(device);
      this.selectedVideoInputDevice = device;
      this.publishSelectedVideoInputDevice();
    } catch (error) {
      const newError = new Error(
        'DeviceManager failed to select video input device.'
      );
      if (error instanceof Error) {
        newError.name = error.name;
        newError.message += ' ' + error.message;
      }
      this.logger.error(newError.toString());
      throw newError;
    }
  };

  stopVideoInputDevice = async (): Promise<void> => {
    try {
      await this.deviceController.stopVideoInput();
      this.selectedVideoInputDevice = undefined;
      this.publishSelectedVideoInputDevice();
    } catch (error) {
      this.logger.error(
        `DeviceManager failed to unselect video input device: ${error}`
      );
      throw new Error('DeviceManager failed to unselect video input device');
    }
  };

  selectVideoInputDevice = (device: VideoInputDevice): void => {
    this.selectedVideoInputDevice = device;
    this.publishSelectedVideoInputDevice();
  };

  invokeDeviceProvider = (deviceLabels: DeviceLabels): void => {
    this.setupDeviceLabelTrigger(deviceLabels);
    this.publishDeviceLabelTrigger();
  };

  /**
   * Apply the builder-supplied `onDeviceReplacement` to decide which device to select when the
   * current audio input is lost. Falls back to the proposed device when no callback is provided.
   */
  replaceDevice = async (device: string): Promise<AudioInputDevice> => {
    if (this.onDeviceReplacement) {
      return this.onDeviceReplacement(device, this.selectedAudioInputDevice);
    }
    return device;
  };

  /**
   * ====================================================================
   * Controller pass-throughs (funnel — consumers use these, not getController())
   * ====================================================================
   */

  listAudioInputDevices = (forceUpdate = false): Promise<MediaDeviceInfo[]> =>
    this.deviceController.listAudioInputDevices(forceUpdate);

  listVideoInputDevices = (forceUpdate = false): Promise<MediaDeviceInfo[]> =>
    this.deviceController.listVideoInputDevices(forceUpdate);

  listAudioOutputDevices = (forceUpdate = false): Promise<MediaDeviceInfo[]> =>
    this.deviceController.listAudioOutputDevices(forceUpdate);

  addDeviceChangeObserver = (observer: DeviceChangeObserver): void =>
    this.deviceController.addDeviceChangeObserver(observer);

  removeDeviceChangeObserver = (observer: DeviceChangeObserver): void =>
    this.deviceController.removeDeviceChangeObserver(observer);

  startVideoPreviewForVideoInput = (element: HTMLVideoElement): void =>
    this.deviceController.startVideoPreviewForVideoInput(element);

  stopVideoPreviewForVideoInput = (element: HTMLVideoElement): void =>
    this.deviceController.stopVideoPreviewForVideoInput(element);

  // Stop the video capture stream WITHOUT clearing the tracked selection. Unlike
  // `stopVideoInputDevice()` (which also resets `selectedVideoInputDevice` and publishes), this is
  // the stream-only teardown used e.g. by `PreviewVideo` on unmount so ending a preview does not
  // wipe the user's camera choice for other consumers.
  stopVideoInput = (): Promise<void> => this.deviceController.stopVideoInput();

  createAnalyserNodeForAudioInput = (): RemovableAnalyserNode | null =>
    this.deviceController.createAnalyserNodeForAudioInput();

  /**
   * ====================================================================
   * Subscriptions
   * ====================================================================
   */

  subscribeToSelectedVideoInputDevice = (
    callback: (device: VideoInputDevice | undefined) => void
  ): void => {
    this.selectedVideoInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedVideoInputDevice = (
    callbackToRemove: (device: VideoInputDevice | undefined) => void
  ): void => {
    this.selectedVideoInputDeviceObservers =
      this.selectedVideoInputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedVideoInputDevice = (): void => {
    for (const observer of this.selectedVideoInputDeviceObservers) {
      observer(this.selectedVideoInputDevice);
    }
  };

  subscribeToSelectedAudioInputDevice = (
    callback: (device: AudioInputDevice) => void
  ): void => {
    this.selectedAudioInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioInputDevice = (
    callbackToRemove: (device: AudioInputDevice) => void
  ): void => {
    this.selectedAudioInputDeviceObservers =
      this.selectedAudioInputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedAudioInputDevice = (): void => {
    for (const observer of this.selectedAudioInputDeviceObservers) {
      observer(this.selectedAudioInputDevice);
    }
  };

  subscribeToSelectedAudioOutputDevice = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioOutputDevice = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers =
      this.selectedAudioOutputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedAudioOutputDevice = (): void => {
    for (const observer of this.selectedAudioOutputDeviceObservers) {
      observer(this.selectedAudioOutputDevice);
    }
  };

  subscribeToDeviceLabelTrigger = (callback: () => void): void => {
    this.deviceLabelTriggerObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTrigger = (callbackToRemove: () => void): void => {
    this.deviceLabelTriggerObservers = this.deviceLabelTriggerObservers.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  private publishDeviceLabelTrigger = (): void => {
    for (const callback of this.deviceLabelTriggerObservers) {
      callback();
    }
  };

  subscribeToDeviceLabelTriggerStatus = (
    callback: (permission: DeviceLabelTriggerStatus) => void
  ): void => {
    this.deviceLabelTriggerStatusObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTriggerStatus = (
    callbackToRemove: (permission: DeviceLabelTriggerStatus) => void
  ): void => {
    this.deviceLabelTriggerStatusObservers =
      this.deviceLabelTriggerStatusObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishDeviceLabelTriggerStatus = (): void => {
    for (const observer of this.deviceLabelTriggerStatusObservers) {
      observer(this.deviceLabelTriggerStatus);
    }
  };
}

export default DeviceManager;
