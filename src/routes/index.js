// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from '../containers/Home.js';
import PrivacyPolicy from '../containers/PrivacyPolicy.js';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/privacy" component={PrivacyPolicy} />
    </Switch>
  );
};

export default index;
