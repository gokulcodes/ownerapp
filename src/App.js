import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard';
import Jobs from './screens/Jobs/Jobs';
import Drivers from './screens/Drivers/Drivers';
import Stats from './screens/Stats/Stats';
import Admins from './screens/Admins/Admins';
import Login from './screens/Auth/Login';
import Onboarding from './screens/Auth/Onboarding';
import Splash from './screens/Auth/Splash';

const App = () => {
	return (
		<Router key="routerSwitch">
			<Switch>
				<Route path="/" exact component={Splash} />
				<Route path="/login" exact component={Login} />
				<Route path="/onboarding/:id" exact component={Onboarding} />
				<Route path="/dash" exact component={Dashboard} />
				<Route path="/jobs" exact component={Jobs} />
				<Route path="/drivers" exact component={Drivers} />
				<Route path="/admins" exact component={Admins} />
				<Route path="/stats" exact component={Stats} />
			</Switch>
		</Router>
	);
};

export default App;