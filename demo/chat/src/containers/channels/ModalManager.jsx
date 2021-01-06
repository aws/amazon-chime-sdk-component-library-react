// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  AddMemberModal,
  ManageMembersModal,
  DeleteChannelModal,
  NewChannelModal,
  LeaveChannelModal,
  ViewChannelDetailsModal,
  ViewMembersModal,
  EditChannelModal,
  BanModal,
} from '../../components/ChannelModals';

const ModalManager = ({
  modal,
  setModal,
  activeChannel,
  userId,
  onAddMember,
  handleChannelDeletion,
  handleDeleteMemberships,
  handlePickerChange,
  formatMemberships,
  activeChannelMemberships,
  selectedMembers,
  onCreateChannel,
  activeChannelModerators,
  handleLeaveChannel,
  banList,
  banUser,
  unbanUser,
}) => {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case 'AddMembers':
      return (
        <AddMemberModal
          onClose={() => setModal('')}
          channel={activeChannel}
          onSubmit={onAddMember}
          handlePickerChange={handlePickerChange}
          members={activeChannelMemberships}
        />
      );
    case 'ManageMembers':
      return (
        <ManageMembersModal
          onClose={() => setModal('')}
          channel={activeChannel}
          userId={userId}
          handleDeleteMemberships={handleDeleteMemberships}
          handlePickerChange={handlePickerChange}
          members={formatMemberships(activeChannelMemberships)}
          selectedMembers={selectedMembers}
        />
      );
    case 'NewChannel':
      return (
        <NewChannelModal
          onClose={() => setModal('')}
          onCreateChannel={onCreateChannel}
        />
      );
    case 'ViewDetails':
      return (
        <ViewChannelDetailsModal
          onClose={() => setModal('')}
          channel={activeChannel}
          moderators={activeChannelModerators}
        />
      );
    case 'LeaveChannel':
      return (
        <LeaveChannelModal
          onClose={() => setModal('')}
          handleLeaveChannel={handleLeaveChannel}
          channel={activeChannel}
        />
      );
    case 'ViewMembers':
      return (
        <ViewMembersModal
          onClose={() => setModal('')}
          channel={activeChannel}
          members={activeChannelMemberships}
          moderators={activeChannelModerators}
        />
      );
    case 'EditChannel':
      return (
        <EditChannelModal
          onClose={() => setModal('')}
          channel={activeChannel}
          userId={userId}
        />
      );
    case 'Ban':
      return (
        <BanModal
          onClose={() => setModal('')}
          handlePickerChange={handlePickerChange}
          channel={activeChannel}
          members={activeChannelMemberships}
          moderators={activeChannelModerators}
          banList={banList}
          banUser={banUser}
          unbanUser={unbanUser}
        />
      );
    case 'DeleteChannel':
      return (
        <DeleteChannelModal
          onClose={() => setModal('')}
          channel={activeChannel}
          handleChannelDeletion={handleChannelDeletion}
        />
      );
    default:
      console.log('Unknown modal type called');
      return null;
  }
};

export default ModalManager;
