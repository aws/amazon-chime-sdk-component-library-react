// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ControlBarButton,
  Phone,
  Modal,
  ModalBody,
  ModalHeader,
  ModalButton,
  ModalButtonGroup,
  useMeetingManager,
  useMeetingStatus,
  MeetingStatus
} from 'amazon-chime-sdk-component-library-react';

import { endMeeting } from '../../utils/api';
import routes from '../../constants/routes';
import { StyledP } from './Styled';
import { useAppState } from '../../providers/AppStateProvider';

const EndMeetingControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (): void => setShowModal(!showModal);
  const { updateMeetingStatus } = useMeetingStatus();
  const { meetingId } = useAppState();

  const endMeetingForAll = async (): Promise<void> => {
    try {
      await meetingManager.leave();
      if (meetingId) {
        await endMeeting(meetingId);
      }
    } catch (e) {
      console.log('Could not end meeting');
    }

    updateMeetingStatus(MeetingStatus.Ended);
    history.push(routes.HOME);
  };

  const leaveMeeting = async (): Promise<void> => {
    await meetingManager.leave();
    history.push(routes.HOME);
  };

  return (
    <>
      <ControlBarButton icon={<Phone />} onClick={toggleModal} label="Leave" />
      {showModal && (
        <Modal size="md" onClose={toggleModal} rootId="modal-root">
          <ModalHeader title="End Meeting" />
          <ModalBody>
            <StyledP>
              Are you sure you want to end the meeting for everyone? The meeting
              cannot be used after ending it.
            </StyledP>
          </ModalBody>
          <ModalButtonGroup
            primaryButtons={[
              <ModalButton
                onClick={endMeetingForAll}
                variant="primary"
                label="End meeting for all"
                closesModal
              />,
              <ModalButton
                onClick={leaveMeeting}
                variant="primary"
                label="Leave Meeting"
                closesModal
              />,
              <ModalButton variant="secondary" label="Cancel" closesModal />
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default EndMeetingControl;
