import React, { ChangeEvent, FormEvent } from 'react';
import {
  FormField,
  Input,
  PrimaryButton,
} from 'amazon-chime-sdk-component-library-react';

import { StyledForm } from './Styled';

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
  handleSubmit,
}: SIPMeetingFormProps) {
  return (
    <StyledForm className="SIPMeetingForm">
      <h1>Join a meeting via SIP</h1>
      <FormField
        field={Input}
        label="Meeting Id"
        value={meetingId}
        fieldProps={{
          name: 'meetingId',
          placeholder: 'Enter Meeting Id',
        }}
        onChange={onChangeMeetingId}
        layout="stack"
      />

      <FormField
        field={Input}
        label="Voice Connector ID"
        value={voiceConnectorId}
        fieldProps={{
          name: 'voiceConnectorId',
          placeholder: 'Enter Voice Connector Id',
        }}
        onChange={onChangeVoiceConnectorId}
        layout="stack"
      />

      <PrimaryButton
        className="btn-submit"
        label="Get SIP URI"
        onClick={handleSubmit}
      />
      <p>You will need a SIP client in order to join the meeting.</p>
    </StyledForm>
  );
}
