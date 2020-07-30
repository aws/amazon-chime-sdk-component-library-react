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
  ActionType,
  useNotificationDispatch,
  Severity
} from 'amazon-chime-sdk-component-library-react';

import { endMeeting } from '../../utils/api';
import { StyledP } from './Styled';
import { useAppState } from '../../providers/AppStateProvider';
import routes from '../../constants/routes';

const EndMeetingControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (): void => setShowModal(!showModal);
  const { meetingId } = useAppState();
  const history = useHistory();
  const dispatch = useNotificationDispatch();

  const leaveNotifyAndRedirect = (notificationMessage: string): void => {
    meetingManager.leave();
    dispatch({
      type: ActionType.ADD,
      payload: {
        severity: Severity.INFO,
        message: `${notificationMessage}`,
        autoClose: true,
        replaceAll: true
      }
    });
    history.push(routes.HOME);
  };

  const leaveMeeting = async (): Promise<void> => {
    leaveNotifyAndRedirect('You left the meeting');
  };

  const endMeetingForAll = async (): Promise<void> => {
    try {
      if (meetingId) {
        await endMeeting(meetingId);
        leaveNotifyAndRedirect('Meeting ended for all');
      }
    } catch (e) {
      console.log('Could not end meeting');
    }
  };

  return (
    <>
      <ControlBarButton icon={<Phone />} onClick={toggleModal} label="Leave" />
      {showModal && (
        <Modal size="md" onClose={toggleModal} rootId="modal-root">
          <ModalHeader title="End Meeting" />
          <ModalBody>
            <StyledP>
              Leave meeting or you can end the meeting for all. The meeting
              cannot be used once it ends.
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
