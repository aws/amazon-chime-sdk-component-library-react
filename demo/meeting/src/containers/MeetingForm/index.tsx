// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useContext, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Input,
  Flex,
  Heading,
  Select,
  FormField,
  PrimaryButton,
  useMeetingManager,
  Modal,
  ModalBody,
  ModalHeader
} from 'amazon-chime-sdk-component-library-react';

import { getErrorContext } from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import { AVAILABLE_AWS_REGIONS } from '../../constants';
import getFormattedOptionsForSelect from '../../utils/select-options-format';
import { fetchMeeting, createGetAttendeeCallback } from '../../utils/api';
import { useAppState } from '../../providers/AppStateProvider';

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const { 
    setMeeting,
    setLocalName,
    setRegion: setAppRegion
  } = useAppState();
  const [meetingId, setMeetingId] = useState('');
  const [meetingErr, setMeetingErr] = useState(false);
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [region, setRegion] = useState('us-east-1');
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = meetingId.trim().toLocaleLowerCase();
    const attendeeName = name.trim();

    if (!id || !attendeeName) {
      if (!attendeeName) {
        setNameErr(true);
      }

      if (!id) {
        setMeetingErr(true);
      }
      return;
    }

    setIsLoading(true);
    meetingManager.getAttendee = createGetAttendeeCallback(id);

    try {
      const { JoinInfo } = await fetchMeeting(id, attendeeName, region);

      await meetingManager.join({
        meetingInfo: JoinInfo.Meeting,
        attendeeInfo: JoinInfo.Attendee
      });

      setMeeting(id);
      setLocalName(attendeeName);
      history.push(routes.DEVICE);
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setName('');
    setIsLoading(false);
  };

  return (
    <form>
      <Heading tag="h1" level={4} css="margin-bottom: 1rem">
        Join a meeting
      </Heading>
      <FormField
        field={Input}
        label="Meeting Id"
        value={meetingId}
        infoText="Anyone with access to the meeting ID can join"
        fieldProps={{
          name: 'meetingId',
          placeholder: 'Enter Meeting Id'
        }}
        errorText="Please enter a valid meeting ID"
        error={meetingErr}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setMeetingId(e.target.value);
          if (meetingErr) {
            setMeetingErr(false);
          }
        }}
      />
      <FormField
        field={Input}
        label="Name"
        value={name}
        fieldProps={{
          name: 'name',
          placeholder: 'Enter Your Name'
        }}
        errorText="Please enter a valid name"
        error={nameErr}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setName(e.target.value);
          if (nameErr) {
            setNameErr(false);
          }
        }}
      />
      <FormField
        field={Select}
        options={getFormattedOptionsForSelect(AVAILABLE_AWS_REGIONS)}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
          setRegion(e.target.value);
          setAppRegion(e.target.value);
        }}
        value={region}
        label="Select AWS region"
      />
      <Flex
        container
        layout="fill-space-centered"
        style={{ marginTop: '2.5rem' }}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton label="Continue" onClick={handleJoinMeeting} />
        )}
      </Flex>
      {errorMessage && (
        <Modal size="md" onClose={closeError}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <Card
              title="Unable to join meeting"
              description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
              smallText={errorMessage}
            />
          </ModalBody>
        </Modal>
      )}
      <DevicePermissionPrompt />
    </form>
  );
};

export default MeetingForm;
