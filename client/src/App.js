import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/Navbar";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";

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
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
