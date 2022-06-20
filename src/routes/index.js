// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import AddBankNative from "../containers/AddBankNative.js";
import TermsConditions from "../containers/TermsConditions";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-bank/:userId" component={AddBankNative} />
      <Route path="/termsconditions" component={TermsConditions} />
    </Switch>
  );
};

export default index;
