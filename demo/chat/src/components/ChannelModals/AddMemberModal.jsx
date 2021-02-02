/* eslint-disable import/no-unresolved */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
} from 'amazon-chime-sdk-component-library-react';

import { createMemberArn } from '../../api/ChimeAPI';
import { useIdentityService } from '../../providers/IdentityProvider';
import ContactPicker from '../ContactPicker';

import './ChannelModals.css';

export const AddMemberModal = ({
  onClose,
  channel,
  handlePickerChange,
  onSubmit,
  members,
}) => {
  const [usersList, setUsersList] = useState([]);
  const identityClient = useIdentityService();

  const getUserAttributeByName = (user, attribute) => {
    try {
      return user.Attributes.filter((attr) => attr.Name === attribute)[0].Value;
    } catch (err) {
      throw new Error(`Failed at getUserAttributeByName() with error: ${err}`);
    }
  };

  const getAllUsers = () => {
    identityClient
      .getUsers()
      .then((users) => {
        const list = users.map((user) => {
          if (getUserAttributeByName(user, 'profile') !== 'none') {
            return {
              label: user.Username,
              value: user.Attributes.filter(
                (attr) => attr.Name === 'profile'
              )[0].Value,
            };
          }
          return false;
        });
        setUsersList(list);
      })
      .catch((err) => {
        throw new Error(`Failed at searchUsers() with error: ${err}`);
      });
  };

  useEffect(() => {
    if (!identityClient) return;

    identityClient.setupClient();
    getAllUsers();
  }, [identityClient]);

  const memberArns = members.map((mem) => mem.Member.Arn);

  const nonmembers = usersList.filter((user) => {
    if (!user.value) {
      return false;
    }
    return memberArns.indexOf(createMemberArn(user.value)) === -1;
  });

  return (
    <Modal onClose={onClose} className="add-members">
      <ModalHeader title={`Add Members to ${channel.Name}`} />
      <ModalBody className="modal-body">
        <ContactPicker onChange={handlePickerChange} options={nonmembers} />
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton label="Add" onClick={onSubmit} variant="primary" />,
          <ModalButton label="Cancel" variant="secondary" closesModal />,
        ]}
      />
    </Modal>
  );
};

export default AddMemberModal;
