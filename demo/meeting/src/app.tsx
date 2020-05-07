import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Meeting from './containers/Meeting';
import MeetingForm from './containers/MeetingForm';
import routes from './constants/routes';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.HOME}>
          <Route path={routes.HOME} exact component={MeetingForm} />
          <Route path={routes.MEETING} component={Meeting} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
