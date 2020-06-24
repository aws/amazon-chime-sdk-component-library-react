import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'amazon-chime-sdk-component-library-react';

import MeetingView from './containers/MeetingView';
import MeetingProvider from './providers/MeetingProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import { AudioVideoProvider } from './providers/AudioVideoProvider';
import { DevicesProvider } from './providers/DevicesProvider';
import { Home, DeviceSetup } from './views';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={lightTheme}>
      <ErrorProvider>
        <MeetingProvider>
          <AudioVideoProvider>
            <DevicesProvider>
              <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route path={routes.DEVICE} component={DeviceSetup} />
                <Route path={routes.MEETING} component={MeetingView} />
              </Switch>
            </DevicesProvider>
          </AudioVideoProvider>
        </MeetingProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default App;
