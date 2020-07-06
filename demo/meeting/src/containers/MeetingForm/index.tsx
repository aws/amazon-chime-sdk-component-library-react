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
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';

import { getErrorContext } from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import { AVAILABLE_AWS_REGIONS } from '../../constants';
import getFormattedOptionsForSelect from '../../utils/select-options-format';

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const [meetingId, setMeetingId] = useState('');
  const [inputName, setInputName] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const meeting = await meetingManager?.authenticate(
        meetingId,
        inputName,
        region
      );
      console.log('Join meeting info ', meeting);
      history.push(routes.DEVICE);
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setInputName('');
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
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setMeetingId(e.target.value)
        }
      />
      <FormField
        field={Input}
        label="Name"
        value={inputName}
        fieldProps={{
          name: 'inputName',
          placeholder: 'Enter Your Name'
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setInputName(e.target.value)
        }
      />
      <FormField
        field={Select}
        options={getFormattedOptionsForSelect(AVAILABLE_AWS_REGIONS)}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
          setRegion(e.target.value)
        }
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
        <Modal onClose={closeError}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="Unable to find meeting"
            description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
            smallText={errorMessage}
          />
        </Modal>
      )}
      <DevicePermissionPrompt />
    </form>
  );
};

export default MeetingForm;
