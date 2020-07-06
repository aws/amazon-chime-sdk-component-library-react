// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ControlBarButton,
  Phone,
  Modal,
  ModalBody,
  ModalHeader,
  ModalButton,
  ModalButtonGroup,
} from 'amazon-chime-sdk-component-library-react';

import { useMeetingManager } from '../../../../../src';
import {
  getMeetingStatusContext,
  MeetingStatus,
} from '../../providers/MeetingStatusProvider';
import routes from '../../constants/routes';
import { StyledP } from './Styled';

const EndMeetingControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (): void => setShowModal(!showModal);
  const { updateMeetingStatus } = useContext(getMeetingStatusContext());

  const endMeeting = async (): Promise<void> => {
    await meetingManager?.endMeeting();
    updateMeetingStatus(MeetingStatus.Ended);
    history.push(routes.HOME);
  };

  const leaveMeeting = async (): Promise<void> => {
    await meetingManager?.leaveMeeting();
    history.push(routes.HOME);
  };

  return (
    <>
      <ControlBarButton icon={<Phone />} onClick={toggleModal} label="Leave" />
      {showModal && (
        <Modal size="medium" onClose={toggleModal} rootId="modal-root">
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
                onClick={endMeeting}
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
              <ModalButton variant="secondary" label="cancel" closesModal />,
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default EndMeetingControl;
