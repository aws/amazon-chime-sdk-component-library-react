import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CustomerHome from './customer/CustomerHome';
import AgentHome from './agent/AgentHome';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/customer">
          <CustomerHome />
        </Route>
        <Route path="/agent">
          <AgentHome />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
