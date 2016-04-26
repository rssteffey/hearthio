
//Architecture imports
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/client/index.js'

//Our imports
import App from '../imports/ui/components/App.js';


Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});