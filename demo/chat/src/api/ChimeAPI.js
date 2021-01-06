/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Auth } from '@aws-amplify/auth';
import appConfig from '../Config';
// eslint-disable-next-line no-unused-vars
const Chime = require('aws-sdk/clients/chime');

export const createMemberArn = userId =>
  `${appConfig.appInstanceArn}/user/${userId}`;

const appInstanceUserArnHeader = 'x-amz-chime-bearer';

// Setup Chime Client
async function chimeClient() {
  const creds = await Auth.currentCredentials();
  const chime = new Chime({
    region: 'us-east-1',
    credentials: await Auth.essentialCredentials(creds)
  });
  return chime;
}

async function getMessagingSessionEndpoint() {
  const request = (await chimeClient()).getMessagingSessionEndpoint();
  const response = await request.promise();
  return response;
}
/**
 * Function to send channel message
 * @param {channelArn} string Channel Arn
 * @param {messageContent} string Message content
 * @param {member} string Chime channel member
 * @param {options{}} object Additional attributes for the request object.
 * @returns {object} sendMessage object;
 */
async function sendChannelMessage(
  channelArn,
  messageContent,
  member,
  options = null
) {
  console.log('sendChannelMessage called');

  const params = {
    ChannelArn: channelArn,
    Content: messageContent,
    Persistence: 'PERSISTENT', // Allowed types are PERSISTENT and NON_PERSISTENT
    Type: 'STANDARD' // Allowed types are STANDARD and CONTROL
  };
  if (options && options.Metadata) {
    params.Metadata = options.Metadata;
  }

  const request = (await chimeClient()).sendChannelMessage(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      member.userId
    );
  });
  const response = await request.promise();
  const sentMessage = {
    response: response,
    CreatedTimestamp: new Date(),
    Sender: { Arn: createMemberArn(member.userId), Name: member.username }
  };
  return sentMessage;
}

async function listChannelMessages(channelArn, userId, nextToken = null) {
  console.log('listChannelMessages called');

  const params = {
    ChannelArn: channelArn,
    NextToken: nextToken
  };

  const request = (await chimeClient()).listChannelMessages(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  const messageList = response.ChannelMessages;
  messageList.sort(function(a, b) {
    // eslint-disable-next-line no-nested-ternary
    return a.CreatedTimestamp < b.CreatedTimestamp
      ? -1
      : a.CreatedTimestamp > b.CreatedTimestamp
      ? 1
      : 0;
  });

  const messages = [];
  for (let i = 0; i < messageList.length; i++) {
    const message = messageList[i];
    messages.push(message);
  }
  return { Messages: messages, NextToken: response.NextToken };
}

async function createChannelMembership(channelArn, memberArn, userId) {
  console.log('createChannelMembership called');

  const params = {
    ChannelArn: channelArn,
    MemberArn: memberArn,
    Type: 'DEFAULT' // OPTIONS ARE: DEFAULT and HIDDEN
  };

  const request = (await chimeClient()).createChannelMembership(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response.Member;
}

async function deleteChannelMembership(channelArn, memberArn, userId) {
  console.log('deleteChannelMembership called');

  const params = {
    ChannelArn: channelArn,
    MemberArn: memberArn
  };

  const request = (await chimeClient()).deleteChannelMembership(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response;
}

async function createChannelBan(channelArn, memberArn, userId) {
  console.log('createChannelBan called');

  const params = {
    ChannelArn: channelArn,
    MemberArn: memberArn
  };

  const request = (await chimeClient()).createChannelBan(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response;
}

async function deleteChannelBan(channelArn, memberArn, userId) {
  console.log('deleteChannelBan called');

  const params = {
    ChannelArn: channelArn,
    MemberArn: memberArn
  };

  const request = (await chimeClient()).deleteChannelBan(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response;
}

async function listChannelBans(channelArn, maxResults, nextToken, userId) {
  console.log('listChannelBans called');

  const params = {
    ChannelArn: channelArn,
    MaxResults: maxResults,
    NextToken: nextToken
  };

  const request = (await chimeClient()).listChannelBans(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  console.log('listChannelBans response', response);
  return response;
}

async function listChannelMemberships(channelArn, userId) {
  console.log('listChannelMemberships called');
  const params = {
    ChannelArn: channelArn
  };

  const request = (await chimeClient()).listChannelMemberships(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response.ChannelMemberships;
}

async function createChannel(appInstanceArn, name, mode, privacy, userId) {
  console.log('createChannel called');
  const params = {
    AppInstanceArn: appInstanceArn,
    Name: name,
    Mode: mode,
    Privacy: privacy
  };

  const request = (await chimeClient()).createChannel(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response.ChannelArn;
}

async function describeChannel(channelArn, userId) {
  console.log('describeChannel called');

  const params = {
    ChannelArn: channelArn
  };

  const request = (await chimeClient()).describeChannel(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response.Channel;
}

async function updateChannel(channelArn, name, mode, userId) {
  console.log('updateChannel called');

  const params = {
    ChannelArn: channelArn,
    Name: name,
    Mode: mode
  };

  const request = (await chimeClient()).updateChannel(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  console.log('response', response);
  return response;
}

async function listChannelMembershipsForAppInstanceUser(userId) {
  console.log('listChannelMembershipsForAppInstanceUser called');

  const request = (
    await chimeClient()
  ).listChannelMembershipsForAppInstanceUser();
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  const channels = response.ChannelMemberships;
  return channels;
}

async function listChannels(appInstanceArn, userId) {
  console.log('listChannels called');
  const params = {
    AppInstanceArn: appInstanceArn
  };

  const request = (await chimeClient()).listChannels(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  const channels = response.Channels;
  return channels;
}

async function listChannelsForAppInstanceUser(userId) {
  console.log('listChannelsForAppInstanceUser called');

  const request = (await chimeClient()).listChannelsForAppInstanceUser();
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  const channels = response.Channels;
  console.log('channels', channels);
  return channels;
}

async function deleteChannel(channelArn, userId) {
  console.log('deleteChannel called');

  const params = {
    ChannelArn: channelArn
  };

  const request = (await chimeClient()).deleteChannel(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  await request.promise();
}

async function listChannelModerators(channelArn, userId) {
  console.log('listChannelModerators called');
  const params = {
    ChannelArn: channelArn
  };

  const request = (await chimeClient()).listChannelModerators(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response ? response.ChannelModerators : null;
}

async function updateChannelMessage(
  channelArn,
  messageId,
  content,
  metadata,
  userId
) {
  console.log('updateChannelMessage called');
  const params = {
    ChannelArn: channelArn,
    MessageId: messageId,
    Content: content,
    Metadata: metadata
  };

  const request = (await chimeClient()).updateChannelMessage(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });

  const response = await request.promise();
  return response;
}

async function redactChannelMessage(channelArn, messageId, userId) {
  console.log('redactChannelMessage called');
  const params = {
    ChannelArn: channelArn,
    MessageId: messageId
  };

  const request = (await chimeClient()).redactChannelMessage(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });

  const response = await request.promise();
  console.log('response', response);
  return response;
}

export {
  sendChannelMessage,
  listChannelMessages,
  createChannelMembership,
  listChannelMemberships,
  deleteChannelMembership,
  createChannelBan,
  deleteChannelBan,
  listChannelBans,
  createChannel,
  describeChannel,
  updateChannel,
  listChannels,
  listChannelsForAppInstanceUser,
  deleteChannel,
  listChannelModerators,
  updateChannelMessage,
  redactChannelMessage,
  getMessagingSessionEndpoint,
  listChannelMembershipsForAppInstanceUser
};
