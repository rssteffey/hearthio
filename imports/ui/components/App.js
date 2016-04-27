import React, { Component } from 'react';

// import Login from './Login';

import HousePanel from './HousePanel';
import NavBar from './NavBar';
import FloorsPanel from './FloorsPanel';
import ObjectInfo from './ObjectInfo';
import LoadingPanel from './LoadingPanel';


class App extends Component {
	constructor(props) {
		super(props);

		/*
		this.state = {
		hideCompleted: false,
		};
		*/
	}

	render() {
		return (
			<div id="container">
			<LoadingPanel />
				<HousePanel />
				<NavBar />
				<FloorsPanel />
				<ObjectInfo />
			</div>
		);
	}
}

export default App;
