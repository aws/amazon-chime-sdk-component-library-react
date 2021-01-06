/* eslint-disable import/no-unresolved */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
  Input,
  RadioGroup,
  useNotificationDispatch,
} from 'amazon-chime-sdk-component-library-react';

import { updateChannel } from '../../api/ChimeAPI';

import './ChannelModals.css';

export const EditChannelModal = ({ onClose, channel, userId }) => {
  const [newName, setNewName] = useState(channel.Name);
  const [newMode, setNewMode] = useState(channel.Mode);
  const dispatch = useNotificationDispatch();

  const onChange = (e) => {
    setNewName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      updateChannel(channel.ChannelArn, newName, newMode, userId);
      dispatch({
        type: 0,
        payload: {
          message: 'Successfully updated channel.',
          severity: 'success',
          autoClose: true,
        },
      });
    } catch {
      dispatch({
        type: 0,
        payload: {
          message: 'Unable to update channel.',
          severity: 'error',
        },
      });
    }
    onClose();
  };

  return (
    <Modal onClose={onClose} className="edit-channel">
      <ModalHeader title={`Edit ${channel.Name}`} />
      <ModalBody>
        <form onSubmit={(e) => onSubmit(e)} id="edit-channel">
          <Input
            className="input"
            onChange={onChange}
            value={newName}
            type="text"
          />
          <div className="radio-buttons">
            <RadioGroup
              options={[
                { value: 'RESTRICTED', label: 'Restricted' },
                { value: 'UNRESTRICTED', label: 'Unrestricted' },
              ]}
              value={newMode}
              onChange={(e) => setNewMode(e.target.value)}
            />
          </div>
        </form>
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton
            label="Save"
            type="submit"
            form="edit-channel"
            variant="primary"
          />,
          <ModalButton label="Cancel" variant="secondary" closesModal />,
        ]}
      />
    </Modal>
  );
};

export default EditChannelModal;
