// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ChangeEvent, FormEvent } from 'react';
import {
  Flex,
  Input,
  Heading,
  FormField,
  PrimaryButton
} from 'amazon-chime-sdk-component-library-react';

type SIPMeetingFormProps = {
  meetingId: string;
  voiceConnectorId: string;
  onChangeMeetingId: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeVoiceConnectorId: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
};

export default function SIPMeetingForm({
  meetingId,
  voiceConnectorId,
  onChangeMeetingId,
  onChangeVoiceConnectorId,
  handleSubmit
}: SIPMeetingFormProps) {
  return (
    <form>
      <Heading tag="h1" level={4} css="margin-bottom: 1rem">
        Join a meeting via SIP
      </Heading>
      <FormField
        field={Input}
        label="Meeting Id"
        value={meetingId}
        fieldProps={{
          name: 'meetingId',
          placeholder: 'Enter Meeting Id'
        }}
        onChange={onChangeMeetingId}
      />

      <FormField
        field={Input}
        label="Voice Connector ID"
        value={voiceConnectorId}
        fieldProps={{
          name: 'voiceConnectorId',
          placeholder: 'Enter Voice Connector Id'
        }}
        infoText="You will need a SIP client in order to join the meeting."
        onChange={onChangeVoiceConnectorId}
      />

      <Flex
        container
        layout="fill-space-centered"
        style={{ marginTop: '2.5rem' }}
      >
        <PrimaryButton label="Get SIP URI" onClick={handleSubmit} />
      </Flex>
    </form>
  );
}
