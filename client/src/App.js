import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/Navbar";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import BusinessInformation from "./pages/BusinessInformation";
import BuyerInfo from "./pages/BuyerInfo";
import Storefront from "./pages/Storefront";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavbarTop></NavbarTop>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/business" component={BusinessInformation} />
          <Route exact path="/buyer" component={BuyerInfo} />
          <Route exact path="/Storefront" component={Storefront} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
