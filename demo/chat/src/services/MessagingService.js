/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';
import {
  LogLevel,
  ConsoleLogger,
  DefaultMessagingSession,
  MessagingSessionConfiguration
} from 'amazon-chime-sdk-js';

import { getMessagingSessionEndpoint, createMemberArn } from '../api/ChimeAPI';
import appConfig from '../Config';

class MessagingService {
  constructor(member) {
    this._session;
    this.sessionId = uuid();
    this._logger = new ConsoleLogger('SDK Chat Demo', LogLevel.INFO);
    this._member = member;
    this._messageUpdateCallbacks = [];
  }

  messageObserver = {
    messagingSessionDidStart: () => {
      console.log('Messaging Connection started!');
    },
    messagingSessionDidStartConnecting: reconnecting => {
      console.log('Messaging Connection connecting');
    },
    messagingSessionDidStop: event => {
      console.log('Messaging Connection received DidStop event');
    },
    messagingSessionDidReceiveMessage: message => {
      console.log('Messaging Connection received message');
      this.publishMessageUpdate(message);
    }
  };

  setMessagingEndpoint() {
    getMessagingSessionEndpoint()
      .then(async response => {
        this._endpoint = response?.Endpoint?.Url;

        const sessionConfig = new MessagingSessionConfiguration(
          createMemberArn(this._member.userId),
          this.sessionId,
          this._endpoint,
          new AWS.Chime(),
          AWS
        );

        this._session = new DefaultMessagingSession(
          sessionConfig,
          this._logger
        );

        this._session.addObserver(this.messageObserver);
        this._session.start();
      })
      .catch(err => {
        console.error(err);
      });
  }

  connect(awsCredentials) {
    AWS.config.region = appConfig.region;
    AWS.config.credentials = awsCredentials;
    this.setMessagingEndpoint();
  }

  close() {
    try {
      this._session.stop();
    } catch (err) {
      console.error('Failed to stop Messaging Session.');
    }
  }

  subscribeToMessageUpdate(callback) {
    console.log('Message listener subscribed!');
    this._messageUpdateCallbacks.push(callback);
  }

  unsubscribeFromMessageUpdate(callback) {
    const index = this._messageUpdateCallbacks.indexOf(callback);
    if (index !== -1) {
      this._messageUpdateCallbacks.splice(index, 1);
    }
  }

  publishMessageUpdate(message) {
    console.log(`Sending message update to listeners!`);
    for (let i = 0; i < this._messageUpdateCallbacks.length; i += 1) {
      const callback = this._messageUpdateCallbacks[i];
      callback(message);
    }
  }
}

export default MessagingService;
