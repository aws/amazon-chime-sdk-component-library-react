// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioVideoFacade,
  CheckAudioInputFeedback,
  CheckAudioOutputFeedback,
  CheckVideoInputFeedback,
  CheckCameraResolutionFeedback,
  CheckNetworkUDPConnectivityFeedback,
  CheckNetworkTCPConnectivityFeedback,
  CheckAudioConnectivityFeedback,
  CheckVideoConnectivityFeedback,
  CheckContentShareConnectivityFeedback,
  MeetingReadinessChecker,
} from 'amazon-chime-sdk-js';

import MeetingManager from '../MeetingProvider/MeetingManager';

type VideoQuality = {
  width: number;
  height: number;
};

export class AppCheckerManager {
  meetingManager: MeetingManager | null = null;
  meetingReadinessChecker: MeetingReadinessChecker | null = null;
  audioVideo: AudioVideoFacade | null = null;
  selectedAudioInput: string | null = null;
  selectedAudioOutput: string | null = null;
  selectedVideoInput: string | null = null;

  constructor(
    meetingManager: MeetingManager,
    selectedAudioInput: string,
    selectedAudioOutput: string,
    selectedVideoInput: string
  ) {
    this.meetingManager = meetingManager;
    this.audioVideo = this.meetingManager.audioVideo;
    this.meetingReadinessChecker = this.meetingManager.meetingReadinessChecker;
    this.selectedAudioInput = selectedAudioInput;
    this.selectedAudioOutput = selectedAudioOutput;
    this.selectedVideoInput = selectedVideoInput;
  }

  async checkAudioOutput(callback: () => Promise<boolean>): Promise<string> {
    const selectedAudioOutput = await this.getSelectedAudioOutput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkAudioOutput(selectedAudioOutput!, callback);
    return CheckAudioOutputFeedback[result];
  }

  async checkAudioInput(): Promise<string> {
    const selectedAudioInput = await this.getSelectedAudioInput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkAudioInput(selectedAudioInput!);
    return CheckAudioInputFeedback[result];
  }

  async checkVideoInput(): Promise<string> {
    const selectedVideoInput = await this.getSelectedVideoInput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkVideoInput(selectedVideoInput!);
    return CheckVideoInputFeedback[result];
  }

  async checkCameraResolution(videoQuality: VideoQuality): Promise<string> {
    const selectedVideoInput = await this.getSelectedVideoInput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkCameraResolution(selectedVideoInput!, videoQuality.width, videoQuality.height);
    return CheckCameraResolutionFeedback[result];
  }

  async checkNetworkUDP(): Promise<string> {
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkNetworkUDPConnectivity();
    return CheckNetworkUDPConnectivityFeedback[result];
  }

  async checkNetworkTCP(): Promise<string> {
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkNetworkTCPConnectivity();
    return CheckNetworkTCPConnectivityFeedback[result];
  }

  async checkAudioConnectivity(): Promise<string> {
    const selectedAudioInput = await this.getSelectedAudioInput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkAudioConnectivity(selectedAudioInput!);
    return CheckAudioConnectivityFeedback[result];
  }

  async checkVideoConnectivity(): Promise<string> {
    const selectedVideoInput = await this.getSelectedVideoInput();
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkVideoConnectivity(selectedVideoInput!);
    return CheckVideoConnectivityFeedback[result];
  }

  async checkContentShare(): Promise<string> {
    if (!this.meetingReadinessChecker) {
      return 'Failed';
    }
    const result = await this.meetingReadinessChecker.checkContentShareConnectivity();
    return CheckContentShareConnectivityFeedback[result];
  }

  private getSelectedAudioOutput = async (): Promise<MediaDeviceInfo | null> => {
    if (!this.audioVideo || !this.selectedAudioOutput) {
      return null;
    }
    const devices = await this.audioVideo.listAudioOutputDevices();
    return this.getSelectedDevice(devices, this.selectedAudioOutput);
  }

  private getSelectedAudioInput = async (): Promise<MediaDeviceInfo | null> => {
    if (!this.audioVideo || !this.selectedAudioInput) {
      return null;
    }
    const devices = await this.audioVideo.listAudioInputDevices();
    return this.getSelectedDevice(devices, this.selectedAudioInput);
  }

  private getSelectedVideoInput = async (): Promise<MediaDeviceInfo | null> => {
    if (!this.audioVideo || !this.selectedVideoInput) {
      return null;
    }
    const devices = await this.audioVideo.listVideoInputDevices();
    return this.getSelectedDevice(devices, this.selectedVideoInput);
  }

  private getSelectedDevice = (devices: MediaDeviceInfo[], selectedDeviceId: string): MediaDeviceInfo | null => {
    for (let i = 0; i < devices.length; i++) {
      if (devices[i].deviceId === selectedDeviceId) {
        return devices[i];
      }
    }
    return null;
  }
}

export default AppCheckerManager;
