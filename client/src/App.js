import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/Navbar";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavbarTop></NavbarTop>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
