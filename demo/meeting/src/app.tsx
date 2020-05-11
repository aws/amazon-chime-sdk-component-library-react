import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Meeting from './containers/Meeting';
import MeetingForm from './containers/MeetingForm';
import MeetingProvider from './meeting/MeetingProvider';
import routes from './constants/routes';
import SelectDevicesView from './containers/SelectDevicesView';

const App: FC = () => {
  return (
    <Router>
      <MeetingProvider>
        <Switch>
          <Route path={routes.HOME}>
            <Route path={routes.HOME} exact component={MeetingForm} />
            <Route path={routes.MEETING} component={SelectDevicesView} />
          </Route>
        </Switch>
      </MeetingProvider>
    </Router>
  );
}

export default App;
