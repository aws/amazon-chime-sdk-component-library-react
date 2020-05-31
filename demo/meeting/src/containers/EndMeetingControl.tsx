import React, { useContext, useState } from 'react';
import {
  faSignOutAlt,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import { getMeetingStatusContext, MeetingStatus } from '../meeting/MeetingStatusContext';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';
import Card from '../components/Card';
import Modal from '../components/Modal';
import routes from '../constants/routes';

const EndMeetingControl: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const history = useHistory();
  const [showEndModal, setShowEndModal] = useState(false);
  const { updateMeetingStatus } = useContext(getMeetingStatusContext());
  const meetingId = meetingManager?.meetingId;

  const toggleEndMeeting = (): void => {
    setShowEndModal(true);
  }

  const endMeeting = async (): Promise<void> => {
    await meetingManager?.endMeeting(meetingId!);
    updateMeetingStatus(MeetingStatus.Ended);

    await meetingManager?.leaveMeeting();
    history.push(`${routes.HOME}`)
  }

  const leaveMeeting = async (): Promise<void> => {
    meetingManager?.leaveMeeting().then(() => {
      history.push(`${routes.HOME}`);
    });
  }

  return (
    <>
      <ButtonGroup>
        <IconButton icon={faSignOutAlt} onClick={leaveMeeting} />
        <IconButton icon={faPowerOff} onClick={toggleEndMeeting} />
      </ButtonGroup>
      {showEndModal && (
        <Modal
          onClose={() => setShowEndModal(false)}
          onConfirm={endMeeting}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="End Meeting"
            description="Are you sure you want to end the meeting for everyone? The meeting cannot be used after ending it."
          />
        </Modal>
      )}
    </>
  );
}

export default EndMeetingControl;
