// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useContext, FormEvent } from 'react';

import Card from '../../components/Card';
import Modal from '../../components/Modal';
import SIPURI from '../SIPURI';
import SIPMeetingForm from '../../components/SIPMeetingForm';
import { getErrorContext } from '../../providers/ErrorProvider';
import {
  SIPMeetingContext,
  SIPMeetingManager,
} from '../../providers/SIPMeetingProvider';

const SIPMeeting: React.FC = () => {
  const [sipURI, setSipURI] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [voiceConnectorId, setVoiceConnectorId] = useState('');
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const sipMeetingManager: SIPMeetingManager | null = useContext(
    SIPMeetingContext
  );

  const handleSIPMeetingFormSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const sipMeetingUri = await sipMeetingManager?.getSIPURI(
        meetingId,
        voiceConnectorId
      );
      if (sipMeetingUri && typeof sipMeetingUri === 'string') {
        setSipURI(sipMeetingUri);
      } else {
        updateErrorMessage('Could not generate SIPURI');
      }
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
  };

  return (
    <>
      <SIPMeetingForm
        meetingId={meetingId}
        voiceConnectorId={voiceConnectorId}
        onChangeMeetingId={(e): void => setMeetingId(e.target.value)}
        onChangeVoiceConnectorId={(e): void =>
          setVoiceConnectorId(e.target.value)
        }
        handleSubmit={handleSIPMeetingFormSubmit}
      />
      {errorMessage && (
        <Modal onClose={closeError}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="Unable to find meeting"
            description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
            smallText={errorMessage}
          />
        </Modal>
      )}
      {sipURI && <SIPURI sipURI={sipURI} />}
    </>
  );
};

export default SIPMeeting;
