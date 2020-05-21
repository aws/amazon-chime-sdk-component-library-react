import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MeetingView from './containers/MeetingView';
import MeetingFormSelector from './containers/MeetingFormSelector';
import MeetingProvider from './meeting/MeetingProvider';
import ErrorProvider from './providers/ErrorProvider';
import routes from './constants/routes';
import SelectDevicesView from './containers/SelectDevicesView';

const App: FC = () => (
  <Router>
    <ErrorProvider>
      <MeetingProvider>
        <Switch>
          <Route path={routes.HOME}>
            <Route path={routes.HOME} exact component={MeetingFormSelector} />
            <Route path={routes.DEVICE} component={SelectDevicesView} />
            <Route path={routes.MEETING} component={MeetingView} />
          </Route>
        </Switch>
      </MeetingProvider>
    </ErrorProvider>
  </Router>
);

export default App;
