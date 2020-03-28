import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import "./App.css";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/signin" component={SignIn} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
