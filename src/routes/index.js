// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from "../containers/Home.js";
import AddBankNative from "../containers/AddBankNative.js";
import AddUserBankNative from "../containers/AddUserBankNative";
import TermsConditions from "../containers/TermsConditions";
import PrivacyPolicy from '../containers/PrivacyPolicy.js';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/privacy" component={PrivacyPolicy} />
      <Route path="/add-bank/:userId" component={AddBankNative} />
      <Route path="/add-user-bank/:userId" component={AddUserBankNative} />
      <Route path="/termsconditions" component={TermsConditions} />
    </Switch>
  );
};

export default index;
