/* eslint-disable import/no-extraneous-dependencies */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import AWS from 'aws-sdk';
import Auth from '@aws-amplify/auth';

/**
 * @class IdentityService
 */
export class IdentityService {
  /**
   * @param {region}  region AWS region.
   * @param {userPoolId} userPoolId Cognito User Pool Id.
   */
  constructor(region, userPoolId) {
    this._userPoolId = userPoolId;
    this._region = region;
  }

  async getUsers(limit = 60) {
    try {
      const users = await this._identityClient
        .listUsers({
          Limit: limit,
          UserPoolId: this._userPoolId
        })
        .promise();

      return users.Users;
    } catch (err) {
      throw new Error(err);
    }
  }

  async searchByName(name) {
    try {
      const list = await this._identityClient
        .listUsers({
          Filter: `username ^= "${name}"`,
          Limit: 10,
          UserPoolId: this._userPoolId
        })
        .promise();

      return list.Users;
    } catch (err) {
      throw new Error(`Failed with error: ${err}`);
    }
  }

  async setupClient() {
    const creds = await Auth.currentCredentials();
    if (!creds) return;

    this._identityClient = new AWS.CognitoIdentityServiceProvider({
      region: this._region,
      credentials: Auth.essentialCredentials(creds)
    });
  }
}

export default IdentityService;
