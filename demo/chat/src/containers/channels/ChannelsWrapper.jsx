/* eslint-disable no-console */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
  PopOverItem,
  PopOverSeparator,
  IconButton,
  Dots,
  useNotificationDispatch,
  ChannelList,
  ChannelItem,
} from 'amazon-chime-sdk-component-library-react';
import { useTheme } from 'styled-components';
import {
  createMemberArn,
  createChannelMembership,
  createChannel,
  listChannelMessages,
  listChannels,
  listChannelMembershipsForAppInstanceUser,
  deleteChannel,
  describeChannel,
  listChannelMemberships,
  deleteChannelMembership,
  listChannelModerators,
  listChannelBans,
  createChannelBan,
  deleteChannelBan,
} from '../../api/ChimeAPI';
import appConfig from '../../Config';

import { useUserPermission } from '../../providers/UserPermissionProvider';
import mergeArrayOfObjects from '../../utilities/mergeArrays';
import {
  useChatChannelState,
  useChatMessagingState,
} from '../../providers/ChatMessagesProvider';
import { useAuthContext } from '../../providers/AuthProvider';
import ModalManager from './ModalManager';

import './ChannelsWrapper.css';

const ChannelsWrapper = () => {
  const dispatch = useNotificationDispatch();
  const [modal, setModal] = useState('');
  const [selectedMember, setSelectedMember] = useState({}); // TODO change to an empty array when using batch api
  const [activeChannelModerators, setActiveChannelModerators] = useState([]);
  const [banList, setBanList] = useState([]);
  const theme = useTheme();
  const userPermission = useUserPermission();
  const { userId } = useAuthContext().member;
  const messagingUserArn = `${appConfig.appInstanceArn}/user/${userId}`;
  const {
    channelList,
    setChannelList,
    setActiveChannel,
    activeChannel,
    activeChannelMemberships,
    setActiveChannelMemberships,
    setChannelMessageToken,
    unreadChannels,
    setUnreadChannels,
    hasMembership,
  } = useChatChannelState();
  const { setMessages } = useChatMessagingState();

  // get all channels
  useEffect(() => {
    if (!userId) return;
    const fetchChannels = async () => {
      const userChannelMemberships = await listChannelMembershipsForAppInstanceUser(
        userId
      );
      const userChannelList = userChannelMemberships.map(
        (channelMembership) => channelMembership.ChannelSummary
      );
      const publicChannels = await listChannels(
        appConfig.appInstanceArn,
        userId
      );

      setChannelList(
        mergeArrayOfObjects(userChannelList, publicChannels, 'ChannelArn')
      );
    };
    fetchChannels();
  }, [userId]);

  // get channel memberships
  useEffect(() => {
    if (activeChannel.ChannelArn) {
      fetchMemberships();
    }
  }, [activeChannel.ChannelArn]);

  const getBanList = async () => {
    const banListResponse = await listChannelBans(
      activeChannel.ChannelArn,
      50,
      null,
      userId
    );
    setBanList(banListResponse.ChannelBans.map((m) => m.Member.Arn));
  };

  const banUser = async (memberArn) => {
    try {
      await createChannelBan(activeChannel.ChannelArn, memberArn, userId);
      const newBanList = banList.concat(...banList, memberArn);
      setBanList(newBanList);
      dispatch({
        type: 0,
        payload: {
          message: 'Successfully banned user.',
          severity: 'success',
        },
      });
    } catch {
      dispatch({
        type: 0,
        payload: {
          message: 'Error, unable to perform this action.',
          severity: 'error',
        },
      });
    }
  };

  const unbanUser = async (memberArn) => {
    await deleteChannelBan(activeChannel.ChannelArn, memberArn, userId);
    await getBanList();
  };

  useEffect(() => {
    if (activeChannel.ChannelArn && modal === 'Ban') {
      getBanList();
    }
  }, [activeChannel.ChannelArn, modal]);

  const onCreateChannel = async (e, newName, mode, privacy) => {
    e.preventDefault();
    if (!newName) {
      dispatch({
        type: 0,
        payload: {
          message: 'Error, channel name cannot be blank.',
          severity: 'error',
        },
      });
    } else {
      const channelArn = await createChannel(
        appConfig.appInstanceArn,
        newName,
        mode,
        privacy,
        userId
      );
      if (channelArn) {
        const channel = await describeChannel(channelArn, userId);
        setModal('');
        if (channel) {
          setChannelList([...channelList, channel]);
          dispatch({
            type: 0,
            payload: {
              message: 'Successfully created channel.',
              severity: 'success',
              autoClose: true,
            },
          });
          setActiveChannel(channel);
          channelIdChangeHandler(channel.ChannelArn);
        } else {
          dispatch({
            type: 0,
            payload: {
              message: 'Error, could not retreive channel information.',
              severity: 'error',
              autoClose: false,
            },
          });
        }
      } else {
        dispatch({
          type: 0,
          payload: {
            message: 'Error, could not create new channel.',
            severity: 'error',
            autoClose: false,
          },
        });
      }
    }
  };

  const joinChannel = async (e) => {
    e.preventDefault();
    const membership = await createChannelMembership(
      activeChannel.ChannelArn,
      `${appConfig.appInstanceArn}/user/${userId}`,
      userId
    );
    if (membership) {
      const memberships = activeChannelMemberships;
      memberships.push({ Member: membership });
      setActiveChannelMemberships(memberships);
      channelIdChangeHandler(activeChannel.ChannelArn);
      dispatch({
        type: 0,
        payload: {
          message: `Successfully joined ${activeChannel.Name}`,
          severity: 'success',
          autoClose: true,
        },
      });
    } else {
      dispatch({
        type: 0,
        payload: {
          message: 'Error occured. Unable to join channel.',
          severity: 'error',
          autoClose: true,
        },
      });
    }
  };

  const onAddMember = async () => {
    if (!selectedMember) {
      dispatch({
        type: 0,
        payload: {
          message: 'Error, user name cannot be blank.',
          severity: 'error',
        },
      });
      return;
    }

    try {
      const membership = await createChannelMembership(
        activeChannel.ChannelArn,
        `${appConfig.appInstanceArn}/user/${selectedMember.value}`,
        userId
      );
      const memberships = activeChannelMemberships;
      memberships.push({ Member: membership });
      setActiveChannelMemberships(memberships);
      channelIdChangeHandler(activeChannel.ChannelArn);
      dispatch({
        type: 0,
        payload: {
          message: `New ${selectedMember.label} successfully added to ${activeChannel.Name}`,
          severity: 'success',
          autoClose: true,
        },
      });
      setModal('');
    } catch {
      dispatch({
        type: 0,
        payload: {
          message: 'Error occured. Member not added to channel.',
          severity: 'error',
          autoClose: true,
        },
      });
    }
  };

  const channelIdChangeHandler = async (channelArn) => {
    if (activeChannel.ChannelArn === channelArn) return;
    let mods = [];
    setActiveChannelModerators([]);
    try {
      mods = await listChannelModerators(channelArn, userId);
      setActiveChannelModerators(mods);
    } catch (err) {
      console.error('ERROR', err);
    }

    const isModerator =
      mods?.find((moderator) => moderator.Moderator.Arn === messagingUserArn) ||
      false;

    // Assessing user role for given channel
    userPermission.setRole(isModerator ? 'moderator' : 'user');

    const newMessages = await listChannelMessages(channelArn, userId);
    const channel = await describeChannel(channelArn, userId);
    setMessages(newMessages.Messages);
    setChannelMessageToken(newMessages.NextToken);
    setActiveChannel(channel);
    setUnreadChannels(unreadChannels.filter((c) => c !== channelArn));
  };

  const handleChannelDeletion = async (e, channelArn) => {
    e.preventDefault();
    await deleteChannel(channelArn, userId);
    const newChannelList = channelList.filter(
      (channel) => channel.ChannelArn !== channelArn
    );
    setChannelList(newChannelList);
    setActiveChannel('');
    setMessages([]);
    setModal('');
    dispatch({
      type: 0,
      payload: {
        message: 'Channel successfully deleted.',
        severity: 'success',
        autoClose: true,
      },
    });
  };

  const formatMemberships = (memArr) =>
    memArr.flatMap((m) =>
      m.Member.Arn !== messagingUserArn
        ? [{ value: m.Member.Arn, label: m.Member.Name }]
        : []
    );

  const fetchMemberships = async () => {
    const memberships = await listChannelMemberships(
      activeChannel.ChannelArn,
      userId
    );
    setActiveChannelMemberships(memberships);
  };

  const handlePickerChange = (changes) => {
    setSelectedMember(changes);
  };

  const handleDeleteMemberships = () => {
    try {
      deleteChannelMembership(
        activeChannel.ChannelArn,
        selectedMember.value,
        userId
      );
      dispatch({
        type: 0,
        payload: {
          message: 'Sucessfully removed members from the channel.',
          severity: 'success',
          autoClose: true,
        },
      });
      setSelectedMember({});
    } catch (err) {
      dispatch({
        type: 0,
        payload: {
          message: 'Error, unable to remove members.',
          severity: 'error',
        },
      });
    }
  };

  const handleLeaveChannel = async () => {
    try {
      await deleteChannelMembership(
        activeChannel.ChannelArn,
        createMemberArn(userId),
        userId
      );
      dispatch({
        type: 0,
        payload: {
          message: `Sucessfully left ${activeChannel.Name}.`,
          severity: 'success',
          autoClose: true,
        },
      });
      setSelectedMember({});
    } catch (err) {
      dispatch({
        type: 0,
        payload: {
          message: 'Error, unable to leave the channel.',
          severity: 'error',
        },
      });
    }
  };

  const [isRestricted, setIsRestricted] = useState(
    activeChannel.Mode === 'RESTRICTED'
  );

  useEffect(() => {
    setIsRestricted(activeChannel.Mode === 'RESTRICTED');
  }, [activeChannel]);

  const loadUserActions = (role) => {
    const joinChannelOption = (
      <PopOverItem key="join_channel" as="button" onClick={joinChannel}>
        <span>Join Channel</span>
      </PopOverItem>
    );
    const viewDetailsOption = (
      <PopOverItem
        key="view_channel_details"
        as="button"
        onClick={() => setModal('ViewDetails')}
      >
        <span>View channel details</span>
      </PopOverItem>
    );
    const editChannelOption = (
      <PopOverItem
        key="edit_channel"
        as="button"
        onClick={() => setModal('EditChannel')}
      >
        <span>Edit channel</span>
      </PopOverItem>
    );
    const viewMembersOption = (
      <PopOverItem
        key="view_members"
        as="button"
        onClick={() => setModal('ViewMembers')}
      >
        <span>View members</span>
      </PopOverItem>
    );
    const addMembersOption = (
      <PopOverItem
        key="add_member"
        as="button"
        onClick={() => setModal('AddMembers')}
      >
        <span>Add members</span>
      </PopOverItem>
    );
    const manageMembersOption = (
      <PopOverItem
        key="manage_members"
        as="button"
        onClick={() => setModal('ManageMembers')}
      >
        <span>Manage members</span>
      </PopOverItem>
    );
    const banOrAllowOption = (
      <PopOverItem key="ban_allow" as="button" onClick={() => setModal('Ban')}>
        <span>Ban/Allow members</span>
      </PopOverItem>
    );
    const leaveChannelOption = (
      <PopOverItem
        key="leave_channel"
        as="button"
        onClick={() => setModal('LeaveChannel')}
      >
        <span>Leave channel</span>
      </PopOverItem>
    );
    const deleteChannelOption = (
      <PopOverItem
        key="delete_channel"
        as="button"
        onClick={() => setModal('DeleteChannel')}
      >
        <span>Delete channel</span>
      </PopOverItem>
    );

    const moderatorActions = [
      viewDetailsOption,
      editChannelOption,
      <PopOverSeparator key="separator1" className="separator" />,
      addMembersOption,
      manageMembersOption,
      banOrAllowOption,
      <PopOverSeparator key="separator2" className="separator" />,
      leaveChannelOption,
      deleteChannelOption,
    ];
    const restrictedMemberActions = [
      viewDetailsOption,
      <PopOverSeparator key="separator1" className="separator" />,
      viewMembersOption,
      <PopOverSeparator key="separator2" className="separator" />,
      leaveChannelOption,
    ];
    const unrestrictedMemberActions = [
      viewDetailsOption,
      <PopOverSeparator key="separator1" className="separator" />,
      viewMembersOption,
      addMembersOption,
      <PopOverSeparator key="separator2" className="separator" />,
      leaveChannelOption,
    ];

    const nonMemberActions = [
      joinChannelOption,
      viewDetailsOption,
      viewMembersOption,
    ];

    if (!hasMembership) {
      return nonMemberActions;
    }

    if (role === 'moderator') {
      return moderatorActions;
    }
    return isRestricted ? restrictedMemberActions : unrestrictedMemberActions;
  };

  return (
    <>
      <ModalManager
        modal={modal}
        setModal={setModal}
        activeChannel={activeChannel}
        userId={userId}
        onAddMember={onAddMember}
        handleChannelDeletion={handleChannelDeletion}
        handleDeleteMemberships={handleDeleteMemberships}
        handlePickerChange={handlePickerChange}
        formatMemberships={formatMemberships}
        activeChannelMemberships={activeChannelMemberships}
        selectedMember={selectedMember}
        onCreateChannel={onCreateChannel}
        activeChannelModerators={activeChannelModerators}
        handleLeaveChannel={handleLeaveChannel}
        banList={banList}
        banUser={banUser}
        unbanUser={unbanUser}
      />
      <div className="channel-list-wrapper">
        <div className="channel-list-header">
          <div className="channel-list-header-title">Channels</div>
          <IconButton
            className="create-channel-button channel-options"
            onClick={() => setModal('NewChannel')}
            icon={<Dots width="1.5rem" height="1.5rem" />}
          />
        </div>
        <ChannelList
          style={{
            padding: '8px',
          }}
        >
          {channelList.map((channel) => (
            <ChannelItem
              key={channel.ChannelArn}
              name={channel.Name}
              actions={loadUserActions(userPermission.role)}
              isSelected={channel.ChannelArn === activeChannel.ChannelArn}
              onClick={e => {
                e.stopPropagation();
                channelIdChangeHandler(channel.ChannelArn);
              }}
              unread={unreadChannels.includes(channel.ChannelArn)}
              unreadBadgeLabel="New"
            />
          ))}
        </ChannelList>
      </div>
    </>
  );
};

export default ChannelsWrapper;
