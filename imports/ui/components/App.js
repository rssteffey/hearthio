import React, { Component } from 'react';

// import Login from './Login';

import HousePanel from './HousePanel';
import NavBar from './NavBar';
import FloorsPanel from './FloorsPanel';
import ObjectInfo from './ObjectInfo';


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
				<Loading_Panel id="loadScreen" />
				<HousePanel />
				<NavBar />
				<FloorsPanel />
				<ObjectInfo />
			</div>
		);
	}
}

export default App;
