import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import "./App.css";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
