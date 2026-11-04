// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { act, render, waitFor } from '@testing-library/react';
import { ConsoleLogger, DeviceChangeObserver } from 'amazon-chime-sdk-js';
import React from 'react';

import {
  AudioInputProvider,
  useAudioInputs,
} from '../../../src/providers/DevicesProvider/AudioInputProvider';
import { MeetingContext } from '../../../src/providers/MeetingProvider';
import { MeetingManager } from '../../../src/providers/MeetingProvider/MeetingManager';
import { DeviceLabels } from '../../../src/types';

const mic1 = { deviceId: 'mic-1', label: 'Mic 1' } as MediaDeviceInfo;
const mic2 = { deviceId: 'mic-2', label: 'Mic 2' } as MediaDeviceInfo;

function makeController(): any {
  return {
    listAudioInputDevices: jest.fn().mockResolvedValue([mic1]),
    listVideoInputDevices: jest.fn().mockResolvedValue([]),
    listAudioOutputDevices: jest.fn().mockResolvedValue([]),
    startAudioInput: jest.fn().mockResolvedValue({}),
    stopAudioInput: jest.fn().mockResolvedValue(undefined),
    stopVideoInput: jest.fn().mockResolvedValue(undefined),
    chooseAudioOutput: jest.fn().mockResolvedValue(undefined),
    setDeviceLabelTrigger: jest.fn(),
    addDeviceChangeObserver: jest.fn(),
    removeDeviceChangeObserver: jest.fn(),
  };
}

let selectedInUi: unknown;
const SelectedReader = (): null => {
  selectedInUi = useAudioInputs().selectedDevice;
  return null;
};

// Mounts AudioInputProvider on a persisted controller and runs the device setup page, which
// selects and starts mic-1. Returns the provider's device-change observer.
async function setUp(): Promise<{
  controller: any;
  meetingManager: MeetingManager;
  observer: DeviceChangeObserver;
}> {
  const controller = makeController();
  const meetingManager = new MeetingManager(
    new ConsoleLogger('test'),
    controller
  );
  render(
    <MeetingContext.Provider value={meetingManager}>
      <AudioInputProvider>
        <SelectedReader />
      </AudioInputProvider>
    </MeetingContext.Provider>
  );
  await waitFor(() =>
    expect(controller.addDeviceChangeObserver).toHaveBeenCalled()
  );
  const observer: DeviceChangeObserver =
    controller.addDeviceChangeObserver.mock.calls[0][0];

  meetingManager.invokeDeviceProvider(DeviceLabels.AudioAndVideo);
  // act() so the provider re-renders with the published selection.
  await act(async () => {
    await meetingManager.listAndSelectDevices();
  });
  expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
  return { controller, meetingManager, observer };
}

describe('AudioInputProvider with a persisted device controller', () => {
  it('starts the next device on a device change while the mic is in use', async () => {
    const { controller, observer } = await setUp();
    controller.startAudioInput.mockClear();

    // mic-1 is unplugged on the device setup page.
    await act(async () => {
      await observer.audioInputsChanged?.([mic2]);
    });

    expect(controller.startAudioInput).toHaveBeenCalledWith('mic-2');
  });

  it('does not restart the mic on a device change after leave()', async () => {
    const { controller, meetingManager, observer } = await setUp();

    // leave() stops the mic and keeps the selection.
    await meetingManager.leave();
    expect(controller.stopAudioInput).toHaveBeenCalled();
    controller.startAudioInput.mockClear();

    // A device is plugged in while the user is out of the meeting.
    await act(async () => {
      await observer.audioInputsChanged?.([mic1, mic2]);
    });

    // The mic stopped by leave() must stay stopped.
    expect(controller.startAudioInput).not.toHaveBeenCalled();

    // Back on the device setup page, listAndSelectDevices restarts the mic once.
    await meetingManager.listAndSelectDevices();
    expect(controller.startAudioInput).toHaveBeenCalledTimes(1);
  });

  it('keeps the selection current when the selected mic is unplugged after leave()', async () => {
    const { controller, meetingManager, observer } = await setUp();
    await meetingManager.leave();
    controller.startAudioInput.mockClear();

    // mic-1 is unplugged while the user is out of the meeting.
    controller.listAudioInputDevices.mockResolvedValue([mic2]);
    await act(async () => {
      await observer.audioInputsChanged?.([mic2]);
    });

    // The UI shows the fallback device, and the mic stays stopped.
    expect(selectedInUi).toBe('mic-2');
    expect(controller.startAudioInput).not.toHaveBeenCalled();

    // Back on the device setup page, the fallback device is started.
    await meetingManager.listAndSelectDevices();
    expect(controller.startAudioInput).toHaveBeenCalledTimes(1);
    expect(controller.startAudioInput).toHaveBeenCalledWith('mic-2');
  });
});
