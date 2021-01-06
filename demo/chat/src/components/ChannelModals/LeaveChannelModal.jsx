// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
} from 'amazon-chime-sdk-component-library-react';

export const LeaveChannelModal = ({ onClose, channel, handleLeaveChannel }) => {
  return (
    <Modal onClose={onClose}>
      <ModalHeader title={`Leave ${channel.Name}?`} />
      <ModalBody>
        <p>You cannot undo this action.</p>
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton
            label="Leave"
            onClick={handleLeaveChannel}
            variant="primary"
            closesModal
          />,
          <ModalButton label="Cancel" closesModal variant="secondary" />,
        ]}
      />
    </Modal>
  );
};

export default LeaveChannelModal;
