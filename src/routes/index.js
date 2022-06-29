// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import AddBankNative from "../containers/AddBankNative.js";
import AddUserBankNative from "../containers/AddUserBankNative";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-bank/:userId" component={AddBankNative} />
      <Route path="/add-user-bank/:userId" component={AddUserBankNative} />
    </Switch>
  );
};

export default index;
