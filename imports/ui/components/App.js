import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// import Login from './Login';

import HousePanel from './HousePanel';
import NavBar from './NavBar';
import FloorsPanel from './FloorsPanel';
import ObjectInfo from './ObjectInfo';
import LoadingPanel from './LoadingPanel';
import UserAccountsWrapper from './login/UserAccountsWrapper';


class App extends Component {
	constructor(props) {
		super(props);
	}


	renderContent() {
		let content = '';
		if (this.props.loggedInUser) {
			content = <div id="container">
			             <LoadingPanel />
			             <HousePanel />
			             <NavBar />
			             <FloorsPanel />
			             <ObjectInfo />
			          </div>;
		}
		return content;
	}


	render() {
		return (
			<div id="container">
				<UserAccountsWrapper />
				{this.renderContent()}
			</div>
		);
	}
}

App.propTypes = {
	loggedInUser: PropTypes.object,
};


export default createContainer(() => {
	return {
		loggedInUser: Meteor.user(),
	};
}, App);
