// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PrimaryButton,
  Flex,
  Label,
  useMeetingManager,
  Modal,
  ModalBody,
  ModalHeader
} from 'amazon-chime-sdk-component-library-react';

import routes from '../constants/routes';
import Card from '../components/Card';
import { useAppState } from '../providers/AppStateProvider';

const MeetingJoinDetails = () => {
  const meetingManager = useMeetingManager();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { meetingId, localUserName } = useAppState();

  const handleJoinMeeting = async () => {
    setIsLoading(true);

    try {
      await meetingManager.start();
      setIsLoading(false);
      history.push(`${routes.MEETING}/${meetingId}`);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Flex container alignItems="center" flexDirection="column">
        <PrimaryButton
          label={isLoading ? 'Loading...' : 'Join meeting'}
          onClick={handleJoinMeeting}
        />
        <Label style={{ margin: '.75rem 0 0 0' }}>
          Joining meeting <b>{meetingId}</b> as <b>{localUserName}</b>
        </Label>
      </Flex>
      {error && (
        <Modal size="md" onClose={(): void => setError('')}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <Card
              title="Unable to join meeting"
              description="There was an issue in joining this meeting. Check your connectivity and try again."
              smallText={error}
            />
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export default MeetingJoinDetails;
