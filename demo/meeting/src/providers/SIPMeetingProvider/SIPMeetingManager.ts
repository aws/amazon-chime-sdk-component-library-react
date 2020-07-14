// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { MeetingManager } from 'amazon-chime-sdk-component-library-react';

import { AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER } from '../../constants';

export class SIPMeetingManager {
  private meetingManager: MeetingManager | null;

  private region: string;

  constructor(theMeetingManager: MeetingManager | null) {
    this.meetingManager = theMeetingManager;
    this.region = this.meetingManager?.region || 'us-east-1';
  }

  getSIPURI = async (
    meetingId: string,
    voiceConnectorId: string
  ): Promise<string> => {
    try {
      const json = await this.meetingManager?.joinMeeting(
        meetingId,
        AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER,
        this.region
      );
      const joinToken = json.JoinInfo.Attendee.JoinToken;
      return `sip:${AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER}@${voiceConnectorId};transport=tls;X-joinToken=${joinToken}`;
    } catch (error) {
      throw new Error(error);
    }
  };
}