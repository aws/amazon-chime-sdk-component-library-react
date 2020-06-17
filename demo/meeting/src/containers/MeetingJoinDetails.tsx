import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PrimaryButton,
  Flex,
  Label,
} from 'amazon-chime-sdk-component-library-react';

import { useMeetingManager } from '../providers/MeetingProvider';
import routes from '../constants/routes';
import Card from '../components/Card';
import Modal from '../components/Modal';

const MeetingJoinDetails = () => {
  const meetingManager = useMeetingManager();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const meetingId = meetingManager?.meetingId || '';
  const attendeeName = meetingManager?.attendeeName;

  const handleJoinMeeting = async () => {
    setIsLoading(true);

    try {
      await meetingManager.join();
      history.push(`${routes.MEETING}/${meetingId}`);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Flex container alignItems="center" flexDirection="column">
        <PrimaryButton
          label={isLoading ? 'Loading...' : 'Join meeting'}
          onClick={handleJoinMeeting}
        />
        <Label style={{ margin: '.75rem 0 0 0' }}>
          Joining meeting <b>{meetingId}</b> as <b>{attendeeName}</b>
        </Label>
      </Flex>
      {error && (
        <Modal onClose={() => setError('')}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="Unable to join meeting"
            description="There was an issue in joining this meeting. Check your connectivity and try again."
            smallText={error}
          />
        </Modal>
      )}
    </>
  );
};

export default MeetingJoinDetails;
