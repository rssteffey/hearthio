// Architecture imports
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// Our imports
import '../imports/startup/lib/accounts-config.js';
//import '../imports/startup/client/index.js';

import App from '../imports/ui/components/App';

//import '../imports/startup/client/index.js';

Meteor.startup(() => {
	render(<App />, document.getElementById('render-target'));
});
