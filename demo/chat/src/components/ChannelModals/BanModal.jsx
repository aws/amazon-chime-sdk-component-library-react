// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
  Input,
  Checkbox,
} from 'amazon-chime-sdk-component-library-react';

import { createMemberArn } from '../../api/ChimeAPI';
import { useIdentityService } from '../../providers/IdentityProvider';

import './ChannelModals.css';

export const BanModal = ({
  onClose,
  channel,
  members,
  moderators,
  banList,
  banUser,
  unbanUser,
}) => {
  let timeout = null;
  const [userName, setUserName] = useState('');
  const [usersList, setUsersList] = useState([]);
  const identityClient = useIdentityService();

  const getUserAttributeByName = (user, attribute) => {
    try {
      return user.Attributes.filter((attr) => attr.Name === attribute)[0].Value;
    } catch (err) {
      throw new Error(`Failed at getUserAttributeByName() with error: ${err}`);
    }
  };

  const searchUsers = (name) => {
    identityClient
      .searchByName(name)
      .then((users) => {
        const list = users.map((user) => {
          if (getUserAttributeByName(user, 'profile') !== 'none') {
            return user;
          }
          return false;
        });

        setUsersList(list);
      })
      .catch((err) => {
        throw new Error(`Failed at searchUsers() with error: ${err}`);
      });
  };

  const getAllUsers = () => {
    identityClient
      .getUsers()
      .then((users) => {
        const list = users.map((user) => {
          if (getUserAttributeByName(user, 'profile') !== 'none') {
            return user;
          }
          return false;
        });

        setUsersList(list);
      })
      .catch((err) => {
        throw new Error(`Failed at searchUsers() with error: ${err}`);
      });
  };

  const handleUserFilter = (event) => {
    const name = event.target.value;
    setUserName(name);
    if (timeout) clearTimeout(timeout);
    if (!name) return;
    timeout = setTimeout(() => {
      searchUsers(name);
    }, 1000);
  };

  // get all users
  useEffect(() => {
    if (!identityClient) return;
    getAllUsers();
  }, [identityClient]);

  const memberArns = members.map((mem) => mem.Member.Arn);

  const formattedUsersList = usersList.map((user) => {
    if (!user || !user.Attributes) {
      return;
    }

    const userArn = createMemberArn(
      user.Attributes.filter((attr) => attr.Name === 'profile')[0].Value
    );
    return {
      arn: userArn,
      name: user.Username,
      role: memberArns.includes(userArn) ? 'Member' : '',
      banned: banList.length ? banList.includes(userArn) : false,
    };
  });

  const sorttedUsers = formattedUsersList.sort((a, b) => {
    return a.role.length > b.role.length ? -1 : 1;
  });

  const modArns = moderators.map((mod) => mod.Moderator.Arn);

  const nonMods = sorttedUsers.filter(
    (user) => user && modArns.indexOf(user.arn) === -1
  );

  const handleCheckClick = (e) => {
    const selected = sorttedUsers.filter(
      (user) => user && user.arn === e.target.value
    )[0];

    if (selected.banned) {
      unbanUser(selected.arn);
    } else {
      banUser(selected.arn);
    }
  };

  const userItems = nonMods.map((user) => (
    <div className="ban-row" key={user.arn}>
      <span className="ban-row-name">{user.name}</span>
      <span className="ban-row-role">{user.role}</span>
      <span className="ban-row-check">
        <Checkbox
          value={user.arn}
          checked={user.banned}
          onChange={(e) => handleCheckClick(e)}
        />
      </span>
    </div>
  ));

  return (
    <Modal onClose={onClose}>
      <ModalHeader title={`Ban users in ${channel.Name}`} />
      <ModalBody className="modal-body">
        <form id="ban-member" className="modal-form">
          <Input
            className="ban-input"
            onChange={handleUserFilter}
            value={userName}
            type="text"
            placeholder="Enter the member's name"
          />
        </form>
        <div className="ban-row ban-row-header">
          <span className="ban-row-name">Name</span>
          <span className="ban-row-role">Role</span>
          <span className="ban-row-check">Ban</span>
        </div>
        <ul className="ban-users-list">{userItems}</ul>
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton label="OK" variant="secondary" closesModal />,
        ]}
      />
    </Modal>
  );
};

export default BanModal;
