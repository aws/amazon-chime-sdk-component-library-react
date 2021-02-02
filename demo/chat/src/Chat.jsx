/* eslint-disable import/no-unresolved */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  NotificationProvider,
  darkTheme,
  GlobalStyles,
} from 'amazon-chime-sdk-component-library-react';
import routes from './constants/routes';
import Notifications from './containers/Notifications';
import './Chat.css';
import { AppStateProvider, useAppState } from './providers/AppStateProvider';
import { AuthProvider } from './providers/AuthProvider';
import Signin from './views/Signin';
import Channels from './views/Channels';
import { MessagingProvider } from './providers/ChatMessagesProvider';
import { UserPermissionProvider } from './providers/UserPermissionProvider';
import Authenticated from './components/Authenticated';
import { IdentityProvider } from './providers/IdentityProvider';

const Chat = () => (
  <Router>
    <AppStateProvider>
      <Theme>
        <NotificationProvider>
          <Notifications />
          <AuthProvider>
            <Authenticated />
            <IdentityProvider>
              <Switch>
                <Route path={routes.CHAT}>
                  <MessagingProvider>
                    <UserPermissionProvider>
                      <Channels />
                    </UserPermissionProvider>
                  </MessagingProvider>
                </Route>
                <Route exact path={routes.SIGNIN} component={Signin} />
              </Switch>
            </IdentityProvider>
          </AuthProvider>
        </NotificationProvider>
      </Theme>
    </AppStateProvider>
  </Router>
);

const Theme = ({ children }) => {
  const { theme } = useAppState();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Chat;
