import React, { Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/Navbar";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import BusinessInformation from "./pages/BusinessInformation";
import BuyerInfo from "./pages/BuyerInfo";

export const AppContext = React.createContext({});

const App = () => {
	// Global state
	const [userGeoLocation, setUserGeoLocation] = useState(null);
	const [itemsAround, setItemsAround] = useState([]);

	const store = {
		userGeoLocation: { get: userGeoLocation, set: setUserGeoLocation },
		itemsAround: { get: itemsAround, set: setItemsAround }
	};

	return (
		<AppContext.Provider value={store}>
			<Router>
				<Fragment>
					<NavbarTop></NavbarTop>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/signin" component={SignIn} />
						<Route
							exact
							path="/business"
							component={BusinessInformation}
						/>
						<Route exact path="/buyer" component={BuyerInfo} />
					</Switch>
				</Fragment>
			</Router>
		</AppContext.Provider>
	);
};

export default App;
