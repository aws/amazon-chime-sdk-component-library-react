/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';
import { useNotificationDispatch } from 'amazon-chime-sdk-component-library-react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const notificationDispatch = useNotificationDispatch();
  // Member
  const [member, setMember] = useState({
    username: '',
    userId: '',
  });
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [awsCredentials, setAwsCredentials] = useState('');

  const userSignOut = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.log(`error siging out ${error}`);
    }
  };

  const userSignUp = async (username, password) => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          // TODO: Utilize input field for email that way we can then have users self confirm after reg.
          email: 'email@me.com',
          profile: 'none',
        },
      });
      notificationDispatch({
        type: 0,
        payload: {
          message:
            'Your registration information has been set to your administrator. Contact them for additional instructions.',
          severity: 'success',
        },
      });
    } catch (error) {
      console.log('error signing up:', error);
      notificationDispatch({
        type: 0,
        payload: {
          message: 'Registration failed.',
          severity: 'error',
        },
      });
    }
  };

  const updateUserAttributes = async (userId) => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      await Auth.updateUserAttributes(user, {
        profile: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAwsCredentials = async () => {
    // Set up AWS credentials
    const creds = await Auth.currentCredentials();
    const essentialCreds = await Auth.essentialCredentials(creds);
    setAwsCredentials(essentialCreds);

    return essentialCreds;
  };

  const setAuthenticatedUser = () => {
    Auth.currentUserInfo()
      .then((curUser) => {
        setMember({ username: curUser.username, userId: curUser.id });
        if (curUser.attributes?.profile === 'none') {
          updateUserAttributes(curUser.id);
          // Once we set attribute let's have user relogin to refresh SigninHookFn trigger.
          setIsAuthenticated(false);

          notificationDispatch({
            type: 0,
            payload: {
              message:
                'Your account is activated! Please sign in again to confirm.',
              severity: 'success',
            },
          });
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log(`Failed to set authenticated user! ${err}`);
      });

    getAwsCredentials();
  };

  const userSignIn = (username, password) => {
    Auth.signIn({ username, password })
      .then(setAuthenticatedUser)
      .catch((err) => {
        console.log(err);
        notificationDispatch({
          type: 0,
          payload: {
            message: 'Your username and/or password is invalid!',
            severity: 'error',
          },
        });
      });
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(setAuthenticatedUser)
      .catch((err) => {
        console.log(err);
        setIsAuthenticated(false);
      });
  }, [Auth]);

  const authFulfiller = {
    member,
    isAuthenticated,
    awsCredentials,
    userSignOut,
    userSignUp,
    userSignIn,
  };

  return (
    <AuthContext.Provider value={authFulfiller}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuthContext };
