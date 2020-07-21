// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  MeetingProvider
} from 'amazon-chime-sdk-component-library-react';

import { AppStateProvider } from './providers/AppStateProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { Meeting, Home, DeviceSetup } from './views';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={lightTheme}>
      <ErrorProvider>
        <MeetingProvider>
          <AppStateProvider>
            <Switch>
              <Route exact path={routes.HOME} component={Home} />
              <Route path={routes.DEVICE} component={DeviceSetup} />
              <Route path={routes.MEETING} component={Meeting} />
            </Switch>
          </AppStateProvider>
        </MeetingProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default App;
