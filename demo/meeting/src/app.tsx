// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  MeetingProvider,
  NotificationProvider,
  darkTheme,
  GlobalStyles
} from 'amazon-chime-sdk-component-library-react';

import { AppStateProvider, useAppState } from './providers/AppStateProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { NavigationProvider } from './providers/NavigationProvider';
import { Meeting, Home, DeviceSetup } from './views';
import Notifications from './containers/Notifications';
import NoMeetingRedirect from './containers/NoMeetingRedirect';
import meetingConfig from './meetingConfig';

const App: FC = () => (
  <Router>
    <AppStateProvider>
      <Theme>
        <NotificationProvider>
          <Notifications />
          <ErrorProvider>
            <MeetingProvider {...meetingConfig}>
              <NavigationProvider>
                <Switch>
                  <Route exact path={routes.HOME} component={Home} />
                  <Route path={routes.DEVICE}>
                    <NoMeetingRedirect>
                      <DeviceSetup />
                    </NoMeetingRedirect>
                  </Route>
                  <Route path={routes.MEETING}>
                    <NoMeetingRedirect>
                      <MeetingModeSelector />
                    </NoMeetingRedirect>
                  </Route>
                </Switch>
              </NavigationProvider>
            </MeetingProvider>
          </ErrorProvider>
        </NotificationProvider>
      </Theme>
    </AppStateProvider>
  </Router>
);

const Theme: React.FC = ({ children }) => {
  const { theme } = useAppState();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const MeetingModeSelector: React.FC = () => {
  const { meetingMode } = useAppState();

  return (
    <Meeting mode={meetingMode} />
  );
};

export default App;
