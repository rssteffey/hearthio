import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// Start up scripts
//import '../imports/startup/accounts-config.js';
import '../imports/startup/client/main.js'

import App from '../imports/ui/components/App';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});