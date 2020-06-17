import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'amazon-chime-sdk-component-library-react';

import MeetingView from './containers/MeetingView';
import MeetingFormSelector from './containers/MeetingFormSelector';
import MeetingProvider from './providers/MeetingProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { AudioVideoProvider } from './providers/AudioVideoProvider';
import { DevicesProvider } from './providers/DevicesProvider';
import DeviceSetup from './views/DeviceSetup';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={lightTheme}>
      <ErrorProvider>
        <MeetingProvider>
          <AudioVideoProvider>
            <DevicesProvider>
              <Switch>
                <Route path={routes.HOME}>
                  <Route
                    path={routes.HOME}
                    exact
                    component={MeetingFormSelector}
                  />
                  <Route path={routes.DEVICE} component={DeviceSetup} />
                  <Route path={routes.MEETING} component={MeetingView} />
                </Route>
              </Switch>
            </DevicesProvider>
          </AudioVideoProvider>
        </MeetingProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default App;
