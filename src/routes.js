import React from 'react';
import { Switch, Route } from 'react-router';

import Landing from './components/Landing';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Switch >
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    // <Route path="/notfound" component={NotFound} />
  </Switch>
);

export default Routes;