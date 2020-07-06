// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'amazon-chime-sdk-component-library-react';
import { MeetingProvider } from '../../../src';

import MeetingView from './containers/MeetingView';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { Home, DeviceSetup } from './views';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={lightTheme}>
      <ErrorProvider>
        <MeetingProvider>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.DEVICE} component={DeviceSetup} />
            <Route path={routes.MEETING} component={MeetingView} />
          </Switch>
        </MeetingProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default App;
