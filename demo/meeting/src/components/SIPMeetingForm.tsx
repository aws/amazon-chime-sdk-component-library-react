import React, { ChangeEvent, FormEvent } from 'react';

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
    <form className="SIPMeetingForm" onSubmit={handleSubmit}>
      <h1>Join a meeting via SIP</h1>
      <label htmlFor="meetingId" className="form-label">
        <input
          id="meetingId"
          className="form-control"
          name="meetingId"
          type="name"
          placeholder="Meeting ID"
          required
          value={meetingId}
          onChange={onChangeMeetingId}
        />
      </label>
      <br />
      <label htmlFor="voiceConnectorId" className="form-label">
        <input
          id="voiceConnectorId"
          className="form-control"
          name="voiceConnectorId"
          type="name"
          placeholder="Voice Connector ID"
          required
          value={voiceConnectorId}
          onChange={onChangeVoiceConnectorId}
        />
      </label>
      <br />
      <button type="submit">Continue</button>
      <p>You will need a SIP client in order to join the meeting.</p>
    </form>
  );
}
