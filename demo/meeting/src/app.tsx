// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  MeetingProvider,
  NotificationProvider,
} from 'amazon-chime-sdk-component-library-react';

import { AppStateProvider } from './providers/AppStateProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { NavigationProvider } from './providers/NavigationProvider';
import { Meeting, Home, DeviceSetup } from './views';
import Notifications from './containers/Notifications';
import NoMeetingRedirect from './containers/NoMeetingRedirect';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={lightTheme}>
      <NotificationProvider>
        <Notifications />
        <ErrorProvider>
          <MeetingProvider>
            <NavigationProvider>
              <AppStateProvider>
                <Switch>
                  <Route exact path={routes.HOME} component={Home} />
                  <Route path={routes.DEVICE}>
                    <NoMeetingRedirect>
                      <DeviceSetup />
                    </NoMeetingRedirect>
                  </Route>
                  <Route path={routes.MEETING}>
                    <NoMeetingRedirect>
                      <Meeting />
                    </NoMeetingRedirect>
                  </Route>
                </Switch>
              </AppStateProvider>
            </NavigationProvider>
          </MeetingProvider>
        </ErrorProvider>
      </NotificationProvider>
    </ThemeProvider>
  </Router>
);

export default App;
